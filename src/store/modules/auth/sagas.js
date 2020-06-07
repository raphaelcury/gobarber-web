import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { signinSuccess } from './actions';

function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', { email, password });
  const { token, user } = response.data;
  if (!user.provider) {
    console.tron.error('Usuário não é prestador de serviço');
    return;
  }
  yield put(signinSuccess(token, user));
}

export default all([takeLatest('@auth/SIGNIN_REQUEST', signIn)]);
