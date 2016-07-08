import { combineReducers } from 'redux'
import todos from './todos'
import layout from './layout'

export default combineReducers({
	todos: todos,
	layout: layout
})
