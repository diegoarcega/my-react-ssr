const initialState = {
	text : 'I am the initial state'
}

export default function loge(state = initialState, action){
	const newState = { ...state }

	console.log(newState)
	
	return newState
}


