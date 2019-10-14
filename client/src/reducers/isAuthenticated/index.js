import { IS_LOGGED_IN, LOGOUT } from '../../actions/isAuthenticated';
import checkAuthentication from './checkAuthentication';

const initialState = checkAuthentication();

const isAuthenticated = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return (state = true);
    case LOGOUT:
      return (state = false);
    default:
      return state;
  }
};

export default isAuthenticated;
