import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoMinaSvg from '../../assets/logoMina.svg';

interface HeaderProps {
  isBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isBackground = false }) => {
  return (
    <Container isBackground={isBackground}>
      <div>
        <Link to="/">
          <img src={logoMinaSvg} alt="logo mina" />
        </Link>

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
