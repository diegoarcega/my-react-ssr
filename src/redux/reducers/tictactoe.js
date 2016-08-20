let initialData = []

let initialState = {}
typeof window === 'undefined' ?  initialState = initialData : initialState = window.__REDUX_STATE__.tictactoe

export default function tictactoeReducer(tictactoe = initialState, action) {
	switch(action.type){
		default:
			return tictactoe
	}
}
