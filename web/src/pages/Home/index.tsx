import React from 'react';
import { FiLogIn, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import background from '../../assets/home-background.svg';
import logo from '../../assets/logo.svg';
import * as S from './styles';

const Home: React.FC = () => (
  <S.Container>
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
          <S.Button>
            <FiMoon />
          </S.Button>
        </header>
        <div id="container-centralizar">
          <main>
            <h1>Seu marketplace de coleta de resíduos.</h1>
            <p>Ajudamos as pessoas a encontrarem pontos de coleta de forma eficiente</p>

            <Link to="/create">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </Link>
          </main>
          <aside>
            <img src={background} alt="background" />
          </aside>
        </div>
      </div>
    </div>
  </S.Container>
);

export default Home;
