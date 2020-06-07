export function signinRequest(email, password) {
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function signinSuccess(token, user) {
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload: {
      token,
      user,
    },
  };
}

export function signFailure() {
  return { type: '@auth/SIGN_FAILURE' };
}
