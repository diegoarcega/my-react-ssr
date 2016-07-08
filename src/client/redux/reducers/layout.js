export default function layoutReducer(layout = [], action) {

	switch(action.type){
		case 'SET_LAYOUT':
			return action.layout
		default:
			return layout
	}
}