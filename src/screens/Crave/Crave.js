import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CraveLayout  from 'crave_foods_test'
import List from '../../components/crave/list'

class Crave extends Component{
	componentWillMount() {
		this.layoutItems = CraveLayout.getLayout()
	}
	render(){
		return(
		  <div>
		  	{ this.layoutItems.map((row, index) => (
		  			<List key={index} list={row}/>
		  	))
		  	}
		  </div>
			)
	}
}

export default Crave