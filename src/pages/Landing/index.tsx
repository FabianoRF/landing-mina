import React from 'react';
import Header from '../../components/Header';

import SubscribeForm from '../../components/SubscribeForm';
// import NewForm from '../../components/NewForm';
import Footer from '../../components/Footer';

import { Container, CardContainer } from './styles';

import girlsImg1 from '../../assets/girls1.png';
import girlsImg2 from '../../assets/girls2.png';
import girlsImg3 from '../../assets/girls3.png';
import iconLock from '../../assets/icons/iconLock.svg';
import iconGroup from '../../assets/icons/iconGroup.svg';
import iconConnection from '../../assets/icons/iconConnection.svg';

const Landing: React.FC = () => {
  return (
    <>
      <Header isBackground />

      <Container>
        <div className="background-section">
          <section>
            <div className="data-container">
              <h1>A proteção delas, por elas, para elas</h1>
              <p>
                Conectando mulheres para se protegerem, construindo uma
                comunidade forte e segura
              </p>
              <div className="input-container">
                <SubscribeForm />
              </div>
            </div>

            <div className="img-container">
              <img src={girlsImg1} alt="girls" />
            </div>
          </section>
        </div>

        <main>
          <section className="first-section">
            <img src={girlsImg2} alt="girls" />

            <div>
              <h2>Pelo fim do assédio e violência contra a mulher</h2>
              <p>
                Diariamente mulheres sofrem vítimas de assédio e violência. O
                feminicídio é real e assombra a vide de muitas mulheres ao redor
                do mundo. Estamos aqui para combater esse problema. Estamos aqui
                pelo fim do assédio e a violência contra a mulher. Esta é nossa
                causa.
              </p>

              <span className="pink-square" />
            </div>
          </section>

          <section className="second-section">
            <img src={girlsImg3} alt="girls" />

            <div>
              <h2>
                Nossa
                <br />
                missão
              </h2>
              <p>
                Nós acreditamos que todas as mulheres tem o direito de ser
                livres, ir onde quiser, vestir o que quiser, sem ter
                preocupações. Nossa missão é oferecer as mulheres o poder de se
                conectar e criar comunidades entre si, em busca de segurança.
                Criamos uma tecnologia baseada nesse objetivo. Acreditamos que
                unidas as mulheres são mais fortes, e queremos tornar o mundo um
                lugar melhor e seguro para todas elas.
              </p>

              <span className="pink-square" />
            </div>
          </section>

          <section className="third-section">
            <h2>Como Funciona</h2>
            <div>
              <CardContainer>
                <div>
                  <img src={iconConnection} alt="conexão" />
                </div>

                <h3>Conexão</h3>
                <p>
                  Conectando mulheres em busca de uma segurança compartilhada
                </p>
              </CardContainer>

              <CardContainer>
                <div>
                  <img src={iconLock} alt="segurança" />
                </div>

                <h3>Segurança</h3>
                <p>Nosso objetivo é mostrar que juntas estarão seguras</p>
              </CardContainer>

              <CardContainer>
                <div>
                  <img src={iconGroup} alt="Comunidade" />
                </div>

                <h3>Comunidade</h3>
                <p>
                  Uma comunidade de mulheres fortes e unidas contra a violência
                  e o assédio
                </p>
              </CardContainer>
            </div>
          </section>

          <section className="access-section">
            <h2>Tenha acesso antecipado</h2>

            <div>
              <p>
                Estamos aos poucos fornecendo acesso antecipado. Solicite agora
                e ajude outras mulheres no combate ao assédio e violência contra
                a mulher
              </p>

              <SubscribeForm />
            </div>
          </section>
        </main>
      </Container>

      <Footer />
    </>
  );
};

export default Landing;
