let actions = {
	addTodo(text){
		return {
			type: 'ADD_TODO',
			text: text,
			completed: false
		}
	},
	markDone(id){
		return {
			type: 'MARKDONE_TODO',
			id: id
		}
	},
	removeTodo(id){
		return {
			type: 'REMOVE_TODO',
			id: id
		}
	}
}
export default actions