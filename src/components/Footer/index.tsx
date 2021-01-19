import React from 'react';

import { Container } from './styles';

import logoMinaSvg from '../../assets/logoMina.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <div>
          <img src={logoMinaSvg} alt="mina" />
          <span>Mina © 2021</span>
        </div>

        <div>
          <span>Nossa causa</span>
          <span>Missão e visão</span>
          <span>Como funciona</span>
        </div>

        <div>
          <span>Trabalhe conosco</span>
        </div>

        <div>
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </section>
    </Container>
  );
};

export default Footer;
