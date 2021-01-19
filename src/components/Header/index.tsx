import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoMinaSvg from '../../assets/logoMina.svg';

interface HeaderProps {
  isBackground: boolean;
}

const Header: React.FC<HeaderProps> = ({ isBackground }) => {
  return (
    <Container isBackground={isBackground}>
      <div>
        <img src={logoMinaSvg} alt="logo mina" />

        <div className="box-links">
          <Link to="/updates" className="btn-update">
            Updates
          </Link>
          <Link to="/updates" className="btn-acess">
            Acesso antecipado
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
