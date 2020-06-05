import React, { useState, useEffect, FormEvent } from 'react';

import { Link } from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [ newRepo, setNewRepo ] = useState('');
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(()=>{
    const storageRepo = localStorage.getItem('&GitHubExplorer:repositories')

    if (storageRepo) {
      return JSON.parse(storageRepo);
    }else{
      return [];
    }
  });



  useEffect(()=> {
    localStorage.setItem('&GitHubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories] )

  async function handleNewRepo(event:FormEvent<HTMLFormElement>):Promise<void> {
    event.preventDefault()
    if(!newRepo){
      setInputError('Digite o nome do repositório!')
      return
    }

    try{
      const response = await api.get(`repos/${newRepo}`)

      const repository = response.data

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    }catch(err){
      setInputError('Erro na busca')
    }
  }

  return (
    <>
      <Title>Github Repositories</Title>

      <Form hasError={!!inputError} onSubmit={handleNewRepo}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Insert Repo"
        />
        <button type="submit">Search</button>
      </Form>

       { inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
        <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </Link>))}
      </Repositories>
    </>
  );
};

export default Dashboard;
