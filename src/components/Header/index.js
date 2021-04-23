import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Head } from './styles';
import ButtonsUsuario from './ButtonsUsuario';
import ButtonsConvidado from './ButtonsConvidado';
import { isAuthenticated } from '../../services/auth';

export default function Header() {
  return (
    <Head>
      <img src="https://bit.ly/3sERTuX" alt="Mesavip logo" />
      <nav>
        <a
          href="https://bit.ly/3tIw4v3"
          alt="Link to my github repo"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <ul>
            <li>
              <FaGithub size={25} color="#000" />
            </li>
          </ul>
        </a>
        <a href="/">
          <ul>
            <li>Restaurantes</li>
          </ul>
        </a>
        <a href="/my-scheduling">
          <ul>
            <li>Meus agendamentos</li>
          </ul>
        </a>

        {isAuthenticated() ? <ButtonsUsuario /> : <ButtonsConvidado />}
      </nav>
    </Head>
  );
}
