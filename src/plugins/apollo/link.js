import { ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const link = ApolloLink.from([
  onError((error) => {
    console.error('GraphQLError', error);
  }),
  setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
      }
    }
  }),
  createHttpLink({
    uri: GITHUB_BASE_URL
  })
])

export default link;