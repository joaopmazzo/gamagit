import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import githubLogo from './../../assets/github_logo.jpg';

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

  const handleUsuarioChange = (event) => setUsario(event.target.value);

  return (
    <main className='grid grid-cols-2 h-screen text-white'>
      <div className='flex items-center justify-center bg-purple'>
        <div className='flex items-center justify-center flex-row flex-wrap w-[450px] bg-gray-black rounded-2xl'>
          <h1 className='text-4xl font-bold mt-20 mb-16'>GitHub user searcher</h1>
          <form className='flex flex-row flex-wrap w-80'>
            <label>
              <span className='text-xs ml-3'>Username:</span>
              <input className='w-80 h-10 rounded-2xl' type="text" name="username" value={usuario} onChange={handleUsuarioChange}></input>
            </label>
            <button type="submit"></button>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-center bg-gray-black'>
        <img src={githubLogo} alt="logo " />
      </div>
    </main >
  );
}
  //       { error ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : '' }
  // <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>