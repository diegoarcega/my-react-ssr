let initialData = [{
  id: 1,
  text: 'first initial state',
	completed: false
}]

let initialState = {}
typeof window === 'undefined' ?  initialState = initialData : initialState = window.__REDUX_STATE__.todos
// typeof window !== 'undefined' ?  console.log(window.__REDUX_STATE__) : ''

export default function todosReducer(todos = initialState, action) {
	switch(action.type){
		case 'FETCH_ALL_TODOS':
			return todos

		case 'ADD_TODO':
      let newTodos = [...todos, {
        id: 2,
        text: action.text,
        completed: false
      }]
			return newTodos

		case 'DELETE_TODO':
			return todos

    case 'MARKDONE_TODO':
			return todos

		default:
			return todos
	}
}
