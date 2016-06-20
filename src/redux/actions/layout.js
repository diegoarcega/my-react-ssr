import Axios from 'axios'
import CraveLayout  from 'crave_foods_test'

let actions = {
	setLayout(newLayout){
		return {
			type: 'SET_LAYOUT',
			layout: newLayout
		}
	},
	getLayout(){
		return (dispatch, getState) => {
			Axios.get('https://react-3f043.firebaseio.com/box.json').then(result => {
				let layout = CraveLayout.getLayout(result.data)
				dispatch(actions.setLayout(layout))
			})
		}
	}
}
export default actions