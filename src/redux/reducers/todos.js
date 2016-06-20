
export default function todoReducer(todos = {}, action) {
	switch(action.type){
		case 'FETCH_ALL_TODOS':
			return action.todos

		default:
			return todos
	}
}