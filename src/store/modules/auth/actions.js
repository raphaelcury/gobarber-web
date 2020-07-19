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

export function signupRequest(name, email, password) {
  return {
    type: '@auth/SIGNUP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signupSuccess(user) {
  return {
    type: '@auth/SIGNUP_SUCCESS',
    payload: {
      user,
    },
  };
}

export function signFailure() {
  return { type: '@auth/SIGN_FAILURE' };
}

export function signOut() {
  return { type: '@auth/SIGNOUT' };
}
