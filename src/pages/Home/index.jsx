import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";

import githubLogo from "./../../assets/github_logo.jpg";
import { useEffect } from "react";

const GET_USER_INFOS = gql`
  query GET_USER_INFOS($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      login
      company
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 50, privacy: PUBLIC) {
        totalCount
        nodes {
          createdAt
          name
          updatedAt
          url
        }
      }
    }
  }
`;

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(GET_USER_INFOS);

  const handleUserChange = (event) => setUser(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    search({
      variables: {
        login: user,
      },
    });
    localStorage.setItem("userData", JSON.stringify(data));
  };

  useEffect(() => {
    if (user && data && !error) {
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/repositories");
    }
  }, [data, user, error]);

  const handleSearchError = (() => {
    if (error && user)
      return (
        <p className="text-center text-xs text-red-600">
          The following user doesn't exist
        </p>
      );

    if (error && !user)
      return (
        <p className="text-center text-xs text-red-600">
          Please, insert user to search
        </p>
      );

    return "";
  })();

  return (
    <main className="grid grid-cols-2 h-screen text-white">
      <div className="flex items-center justify-center bg-purple">
        <div className="flex items-center justify-center flex-row flex-wrap w-[450px] bg-gray-black rounded-2xl">
          <h1 className="text-4xl font-bold mt-20">GitHub user searcher</h1>
          <form className="flex flex-row flex-wrap w-80">
            <label className="mt-16">
              <span className="text-xs ml-3">Username:</span>
              <input
                className="w-80 h-10 rounded-2xl text-gray-black pl-4"
                type="text"
                name="username"
                value={user}
                onChange={handleUserChange}
                autoComplete="username"
              />
              {handleSearchError}
            </label>
            {loading && !data ? (
              <button
                className="mx-auto my-20 h-12 w-28 bg-white rounded-2xl text-gray-black"
                type="submit"
                disabled={loading}
              >
                Loading
              </button>
            ) : (
              <button
                className="mx-auto my-20 h-12 w-28 bg-white rounded-2xl text-gray-black"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-black">
        <img src={githubLogo} alt="logo " />
      </div>
    </main>
  );
}
