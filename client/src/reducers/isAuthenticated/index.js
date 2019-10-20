import { LOGIN, LOGOUT } from '../../actions/isAuthenticated'
import checkAuthentication from './checkAuthentication'

const initialState = checkAuthentication()

const isAuthenticated = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = true)
    case LOGOUT:
      return (state = false)
    default:
      return state
  }
}

export default isAuthenticated
