import initialState from './initialState'

function generateId (todos) {
	return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, 0) + 1
}

export default function todoReducer(todos = initialState.todos, action) {
	switch(action.type){

		case 'ADD_TODO':
			return [{
				id: generateId(todos),
				text: action.text,
				completed: false
			}, ...todos]

		case 'REMOVE_TODO':
			return [...todos.filter( todo => todo.id !== action.id )]

		case 'MARKDONE_TODO':
			return todos.map( todo => {
				return todo.id === action.id ? Object.assign( {}, todo, { completed: !todo.completed }) : todo
			})

		default:
			return todos
	}
}