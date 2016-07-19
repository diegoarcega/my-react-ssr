

let actions = {

	fetchAllTodo(){
		return {
			type: 'FETCH_ALL_TODOS',
		}
	},

	markDone(todo){
		return () => {
			// ref.database().ref('todos/' + todo['.key']).set({
			// 	text: todo.text,
			// 	completed: !todo.completed
			// })
		}
	},

	removeTodo(id){
		return {
			type: 'DELETE_TODO',
			id
		}
	},

	initTodos(){
		return (dispatch, getState) => {
      dispatch(actions.fetchAllTodo())
			// ref.database().ref('todos').limitToLast(25).on('value',function (snapshot) {
			// 		let items = []
			//
			// 		snapshot.forEach(function (childSnapshot) {
			// 			let item = childSnapshot.val()
			// 			item['.key'] = childSnapshot.key
			// 			items.push(item)
			// 		}.bind(this))
			// 		// this will trigger all promises inside the ref.database().ref('todos')
			// 	  // whenever you push anything to the array, it trigger all other fetch event to update the data across the app
			// 		dispatch(actions.fetchAllTodo(items))
			// })

		}
	},

	add(text){
		return (dispatch, getState) => {
			// let newTodo = { text: text, completed: false }
			// ref.database().ref('todos').push(newTodo).then(function () {
			// 	// this will trigger all the promises inside the ref.database().ref('todos')
			// 	// whenever you push anything to the array, it trigger all other fetch event to update the data across the app
			// })

		}
	}
}

export default actions
