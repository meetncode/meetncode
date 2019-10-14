import { combineReducers } from 'redux';

import reducer1 from './Reducer1';
import isAuthenticated from './isAuthenticated';

const rootReducer = combineReducers({
  reducer1,
  isAuthenticated
});

export default rootReducer;
