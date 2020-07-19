import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';
import { signinSuccess, signupSuccess, signFailure } from './actions';

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
    api.defaults.headers.Authorization = `Bearer ${token}`;
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
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });
    const user = response.data;
    toast.success(`Usuário ${user.name} criado com sucesso.`);
    yield put(signupSuccess(user));
  } catch (error) {
    toast.error(`Erro no cadastro. Verifique seus dados.`);
    yield put(signFailure());
  }
}

function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
  takeLatest('@auth/SIGNOUT', signOut),
]);
