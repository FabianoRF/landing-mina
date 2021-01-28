import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';

import logoMinaSvg from '../../assets/logoMina.svg';
import useWindowSize from '../../hooks/useWindowSize';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  isBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isBackground = false }) => {
  const windowSize = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Container isBackground={isBackground}>
        <div>
          <Link to="/">
            <img src={logoMinaSvg} alt="logo mina" />
          </Link>

          {windowSize.width > 1000 ? (
            <div className="box-links">
              <Link to="/updates" className="btn-update">
                Updates
              </Link>
              <Link to="/confirmation" className="btn-acess">
                Acesso antecipado
              </Link>
            </div>
          ) : (
            <FiMenu onClick={() => setShowMenu(true)} />
          )}
        </div>
      </Container>
      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}
    </>
  );
};

export default Header;
