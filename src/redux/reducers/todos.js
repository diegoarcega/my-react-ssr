import initialState from './initialState'

export default function todoReducer(todos = initialState.todos, action) {
	switch(action.type){
		case 'ADD_TODO':
			return [{
				id: todos.length,
				text: action.text
			}, ...todos]

		default:
			return todos
	}
}