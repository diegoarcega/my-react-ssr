let actions = {

	fetchAllTodo(){
		return {
			type: 'FETCH_ALL_TODOS'
		}
	},

	toggleItem(id){
		return {
			type: 'TOGGLE_TODO',
			id: id
		}
	},

	deleteItem(id){
		return {
			type: 'DELETE_TODO',
			id
		}
	},

	initTodos(){
		return (dispatch, getState) => {
      dispatch(actions.fetchAllTodo())
		}
	},

	add(text){
		return {
			type: 'ADD_TODO',
			text : text
		}
	}
}

export default actions
