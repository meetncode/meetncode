export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(token) {
  localStorage.setItem('token', token)
  return {
    type: LOGIN
  }
}

export function logout() {
  localStorage.clear()
  return {
    type: LOGOUT
  }
}
