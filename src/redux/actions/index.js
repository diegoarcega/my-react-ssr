import Firebase from 'firebase/app'
import 'firebase/database'

// I let you hack my app ;P
let config = {
	apiKey: 'I4zVeHs1uQsjCn675EymEspHhL3J0QDzaGZnFpBp',
	databaseURL: 'https://react-3f043.firebaseio.com/',
}

let ref = Firebase.initializeApp(config)

let actions = {

	fetchAllTodo(todos){
		return {
			type: 'FETCH_ALL_TODOS',
			todos: todos,
		}
	},

	markDone(todo){
		return () => {
			ref.database().ref('todos/' + todo['.key']).set({
				text: todo.text,
				completed: !todo.completed
			})
		}
	},

	removeTodo(key){
		return () => {
			ref.database().ref('todos/' + key).remove()
		}
	},

	initTodos(){
		return (dispatch, getState) => {
			ref.database().ref('todos').limitToLast(25).on('value',function (snapshot) {
					let items = []

					snapshot.forEach(function (childSnapshot) {
						let item = childSnapshot.val()
						item['.key'] = childSnapshot.key
						items.push(item)
					}.bind(this))
					// this will trigger all the promises inside the ref.database().ref('todos')
				  // whenever you push anything to the array, it trigger all other fetch event to update the data across the app
					dispatch(actions.fetchAllTodo(items))
			})

		}
	},

	add(text){
		return (dispatch, getState) => {
			let newTodo = { text: text, completed: false }
			ref.database().ref('todos').push(newTodo).then(function () {
				// this will trigger all the promises inside the ref.database().ref('todos')
				// whenever you push anything to the array, it trigger all other fetch event to update the data across the app
			})

		}
	}
}

export default actions
