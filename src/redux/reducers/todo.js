import initialState from './initialState'

export default function todoReducer(state = initialState, action) {

	switch(action.type){
		case 'ADD_TODO':
			return Object.assign({},{
				todos:[
				...state.todos,
				{
					text: action.text
				}]
			})

		default:
			return state
	}
}