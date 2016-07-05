import Firebase from 'firebase/app'
import 'firebase/database'

// I let you hack my app ;P
let config = {
	apiKey: 'I4zVeHs1uQsjCn675EymEspHhL3J0QDzaGZnFpBp',
	databaseURL: 'https://react-3f043.firebaseio.com/',
}

let ref = Firebase.initializeApp(config)

let actions = {

	fetchAllPosts(posts){
		return {
			type: 'FETCH_ALL_POSTS',
			posts: posts,
		}
	},

	increaseLikes(id){
		return {
			type: 'INCREASE_LIKES',
			id
		}
	},

	initPosts(){
		return (dispatch, getState) => {
			dispatch(actions.fetchAllPosts(getState().posts))
			// dispatch(actions.add(getState().posts))
			// ref.database().ref('posts').limitToLast(25).on('value',function (snapshot) {
			// 		let items = []
			//
			// 		snapshot.forEach(function (childSnapshot) {
			// 			let item = childSnapshot.val()
			// 			item['.key'] = childSnapshot.key
			// 			items.push(item)
			// 		}.bind(this))
			// 		// this will trigger all promises inside the ref.database().ref('posts')
			// 	  // whenever you push anything to the array, it trigger all other fetch event to update the data across the app
			// 		dispatch(actions.fetchAllPosts(items))
			// })

		}
	},

	add(post){
		return {
			type: 'ADD_POST',
			post
		}
	},

	addTodo(newPost){
		return (dispatch, getState) => {
			ref.database().ref('posts').push(newPost).then(function () {
				// this will trigger all the promises inside the ref.database().ref('posts')
				// whenever you push anything to the array, it trigger all other fetch event to update the data across the app
			})

		}
	}
}

export default actions
