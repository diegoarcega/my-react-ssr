let initialData = [{
  id: 1,
  text: 'first initial state',
	completed: false
}]

let initialState = {}
typeof window === 'undefined' ?  initialState = initialData : initialState = window.__REDUX_STATE__

export default function todoReducer(todos = initialState, action) {
	switch(action.type){
		case 'FETCH_ALL_TODOS':
			return todos

		default:
			return todos
	}
}
