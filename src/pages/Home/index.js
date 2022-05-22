import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from './styled';

export default function Home(props) {
  const navigate = useNavigate();
  const [usuario, setUsario] = useState('');
  const [error, setError] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        localStorage.setItem('repositoriesData', JSON.stringify(repositories));
        setError(true);
        navigate('/repositories');
      })
      .catch(error => {
        setError(true);
      })
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsario(e.target.value)} />
        {error ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : ''}
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
    </S.HomeContainer>
  );
}
