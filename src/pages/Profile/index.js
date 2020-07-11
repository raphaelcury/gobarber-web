import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          name="currentPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="newPassword" type="password" placeholder="Nova senha" />
        <Input
          name="newPasswordConfirmation"
          type="password"
          placeholder="Confirmação da nova senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}

export default Profile;
