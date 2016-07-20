let initialData = [{
  id: 1,
  text: 'first initial state',
	completed: false
}]

let initialState = {}
typeof window === 'undefined' ?  initialState = initialData : initialState = window.__REDUX_STATE__.posts

export default function postsReducer(posts = initialState, action) {
  console.log(posts)
	switch(action.type){
		case 'FETCH_ALL_TODOS':
			return posts

		case 'ADD_TODO':
			return posts

		case 'DELETE_TODO':
			return posts

    case 'MARKDONE_TODO':
			return posts

		default:
			return posts
	}
}
