import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

function* updateProfile({ payload }) {
  try {
    console.tron.log(
      `UPDATEPROFILEREQUEST: ${payload.name}, ${payload.email}, ${payload.avatar_id})
      }`
    );
    const { name, email, avatar_id, ...rest } = payload;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'users', profile);
    toast.success('Usuário atualizado com sucesso.');
    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    yield put(updateProfileFailure());
    toast.error('Erro ao atualizar usuário.');
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
