import { combineReducers } from 'redux'
import todos from './todos'
import posts from './posts'

export default combineReducers({
	todos,
	posts
})
