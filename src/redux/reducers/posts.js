const initialState = [
  {
    id: 0,
    name: 'Diego',
    date: '2016-05-11',
    text: 'blabldsadasdaaabla',
    video: 'https://www.youtube.com/embed/G8KpPw303PY',
    likes: 0
  },
  {
    id: 1,
    name: 'Carina',
    date: '2016-06-11',
    text: 'zaazadasdadad',
    video: 'https://www.youtube.com/embed/G8KpPw303PY',
    likes: 0
  }
]


export default function postsReducer(posts = initialState, action) {
  switch(action.type){
    case 'ADD_POST':
      action.post.date = Date.now()
      action.post.likes = 0
      return [
        ...posts,
        action.post
      ]
    case 'INCREASE_LIKES':
      return posts.map(p => {
        if (p.id === action.id) {
          return Object.assign({}, p, { likes : p.likes +1})
        }else{
          return p
        }
      })
		case 'FETCH_ALL_POSTS':
			return action.posts

		default:
			return posts
	}
}
