import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoAddList from '../../components/todo'

class Todo extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-sm-12">
					<TodoAddList/>
				</div>
			</div>
			)
	}
}


export default Todo