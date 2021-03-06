import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signupRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter ao menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signupRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">
          {loading ? 'Criando...' : 'Criar usuário'}
        </button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
