import { produce } from 'immer';

const INITIAL_STATE = { profile: null };

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGNIN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = { ...action.payload.user };
      });
    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = { ...action.payload };
      });
    case '@user/UPDATE_PROFILE_FAILURE':
      return state;
    case '@auth/SIGNOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}
