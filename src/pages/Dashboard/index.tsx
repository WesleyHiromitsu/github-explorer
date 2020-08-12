import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore respositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/14797491?s=460&u=d36d126cdc234188618c5d8e1c63e4448d0a7be7&v=4"
            alt="Wesley Hiromitsu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositorio muito massa em</p>
          </div>

          <FaChevronRight size={14} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/14797491?s=460&u=d36d126cdc234188618c5d8e1c63e4448d0a7be7&v=4"
            alt="Wesley Hiromitsu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositorio muito massa em</p>
          </div>

          <FaChevronRight size={14} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/14797491?s=460&u=d36d126cdc234188618c5d8e1c63e4448d0a7be7&v=4"
            alt="Wesley Hiromitsu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositorio muito massa em</p>
          </div>

          <FaChevronRight size={14} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
