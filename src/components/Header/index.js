import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-purple.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber Logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <Profile>
          <div>
            <strong>Raphael Cury</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="User Avatar"
          />
        </Profile>
      </Content>
    </Container>
  );
}

export default Header;
