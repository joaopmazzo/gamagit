import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Moment from 'moment';
import 'boxicons';

import * as S from './styled';

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesData = localStorage.getItem('repositoriesData');
    if (repositoriesData !== null) {
      repositoriesData = JSON.parse(repositoriesData);
      setRepositories(repositoriesData);
      // setTimeout(() => localStorage.clear(), 200)
    } else {
      navigate('/');
    }
  }, []);

  function dateFormated(date) {
    const newFormatdate = Moment(date).format("Do MMM YY");
    return newFormatdate;
  }

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories.map((repository, index) => {
          return (
            <S.ListItem key={index}>
              <S.TituloRepository>
                {repository.name}
              </S.TituloRepository>
              <hr />
              <S.DadosRepository>
                <div>
                  Created at: {dateFormated(repository.created_at)}&#9;|&#9;Last update: {dateFormated(repository.updated_at)}
                </div>
                <div>
                  <S.LinkRepository href={repository.html_url} target="_blank" rel="noreferrer noopener">
                    <box-icon name='link-external' color='#060a6d' />
                  </S.LinkRepository>
                </div>
              </S.DadosRepository>
            </S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  )
}
