import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.div`
  background: #f3f3f3;
  color: #000;

  margin: 1rem 0;
  padding: 1rem;

  border-radius: 1rem;
  opacity: 0.885;
  box-shadow: 5px 5px 10px rgba(0,0,0,6);
`;

export const TituloRepository = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const DadosRepository = styled.span`
  display: flex;
  justify-content: space-between;

  font-size: 0.815rem;
`;

export const LinkRepository = styled.a`
  text-decoration: none;
  color: #000;

  &:hover{
    filter: drop-shadow(1.5px 2px 2px rgba(0,0,0,6));
  }
`;

export const LinkHome = styled(Link)`
  display: block;
  text-align: center;
  margin: 2rem auto;
  padding: .5rem 0;
  text-decoration: none;

  border: 1px solid #f3f3f3;
  background: #f3f3f3;
  border-radius: .5rem;
  color: #000;

  width: 80px;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0,0,0,1);
  }
`;