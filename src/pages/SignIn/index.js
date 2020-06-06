import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Logo" />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/signup">Criar minha conta</Link>
      </form>
    </>
  );
}
