import { combineReducers } from 'redux'
import reducer1 from './Reducer1'

const rootReducer = combineReducers({
	reducer1: reducer1
}) 

export default rootReducer
