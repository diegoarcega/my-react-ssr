let initialData = [{
  id: 1,
  text: 'initial state, first task',
	completed: false
}]

let initialState = {}
typeof window === 'undefined' ?  initialState = initialData : initialState = window.__REDUX_STATE__.todos

export default function todosReducer(todos = initialState, action) {
	switch(action.type){
		case 'FETCH_ALL_TODOS':
			return todos

		case 'ADD_TODO':
			return [...todos, {
        id: todos.length + 1,
        text: action.text,
        completed: false
      }]

		case 'DELETE_TODO':
			return todos.filter(t => t.id !== action.id)

    case 'TOGGLE_TODO':
			return todos.map(t => {
					if(t.id === action.id) return Object.assign({}, t, {completed: !t.completed})
					else return t
			})

		default:
			return todos
	}
}
