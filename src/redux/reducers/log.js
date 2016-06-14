const initialState = {
	text : 'I am the initial state'
}

const log = function (state = initialState, action) {
	let newState = { ...state}
	return newState
}

export default log


