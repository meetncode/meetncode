export const IS_LOGGED_IN = 'IS_LOGGED_IN';
export const LOGOUT = 'LOGOUT';

export function login(token) {
  localStorage.setItem('token', token);
  return {
    type: IS_LOGGED_IN
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
