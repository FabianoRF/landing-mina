import React from 'react';
import Header from '../../components/Header';

import Footer from '../../components/Footer';

import willGif from '../../assets/will.gif';

import { Container } from './styles';

const Confirmation: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <section>
          <h1>Estamos juntos nessa causa! 💪</h1>

          <div>
            <p>
              Estamos trabalhando duro para dar os últimos toques em nosso
              produto. Aos poucos estamos fornecendo acesso antecipado a Mina,
              então logo também chegará sua vez de experimentar nosso produto
              🤩. Mal podemos esperar para que possa conferir nosso trabalho,
              estamos ansiosos para saber sua opinião sobre ele.
            </p>

            <img src={willGif} alt="will feliz" />

            <p>Até lá, manteremos você atualizado de tudo! </p>
            <p>
              Vamos juntos combater o assédio e a violência contra a mulher!
            </p>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Confirmation;
