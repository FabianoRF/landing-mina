import React from 'react';
import Header from '../../components/Header';

import SubscribeForm from '../../components/SubscribeForm';
// import NewForm from '../../components/NewForm';

import { Container } from './styles';

import girlsImg1 from '../../assets/girls1.png';
import girlsImg2 from '../../assets/girls2.png';
import girlsImg3 from '../../assets/girls3.png';
import Footer from '../../components/Footer';

const Landing: React.FC = () => {
  return (
    <>
      <Header isBackground />

      <Container>
        <div className="background-section">
          <section>
            <div className="titles-container">
              <h1>A proteção delas, por elas, para elas</h1>
              <p>
                Conectando mulheres para se protegerem, construindo uma
                comunidade forte e segura
              </p>
            </div>

            <div className="input-container">
              <SubscribeForm />
            </div>

            <div className="img-container">
              <img src={girlsImg1} alt="girls" />
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Landing;
