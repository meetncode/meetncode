import { combineReducers } from 'redux'

import isAuthenticated from './isAuthenticated'

const rootReducer = combineReducers({
  isAuthenticated
})

export default rootReducer
