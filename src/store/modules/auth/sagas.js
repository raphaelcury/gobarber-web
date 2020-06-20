import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';
import { signinSuccess, signFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('Usuário não é prestador de serviço');
      yield put(signFailure());
      return;
    }
    yield put(signinSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(signFailure());
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
  } catch (error) {
    toast.error(`Erro no cadastro. Verifique seus dados.`);
    console.tron.error(error);
  }
}

export default all([
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
]);
