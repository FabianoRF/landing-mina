import React from 'react';
import Header from '../../components/Header';

import Footer from '../../components/Footer';

import { Container } from './styles';
import SubscribeForm from '../../components/SubscribeForm';

const Confirmation: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <section>
          <h1>Updates</h1>

          <div>
            <p>
              Assim que novas informações forem surgindo iremos atualizando por
              aqui. Inscreva-se para ter acesso antecipado e receba as
              informações diretamente em seu e-mail.
            </p>

            <section className="access-section">
              <h2>Tenha acesso antecipado</h2>

              <div>
                <p>
                  Estamos aos poucos fornecendo acesso antecipado. Solicite
                  agora e ajude outras mulheres no combate ao assédio e
                  violência contra a mulher
                </p>

                <SubscribeForm />
              </div>
            </section>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
};

export default Confirmation;
