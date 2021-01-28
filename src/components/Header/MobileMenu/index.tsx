import React from 'react';
import { FiX } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container } from './styles';

import logoMinaSvg from '../../../assets/logoMina.svg';

interface MobileMenuProps {
  onClose(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <Container>
      <header>
        <div />
        <img src={logoMinaSvg} alt="mina" />

        <FiX onClick={onClose} />
      </header>

      <div className="box-links">
        <Link to="/updates" className="btn-update">
          Updates
        </Link>
        <Link to="/confirmation" className="btn-acess">
          Acesso antecipado
        </Link>
      </div>
    </Container>
  );
};

export default MobileMenu;
