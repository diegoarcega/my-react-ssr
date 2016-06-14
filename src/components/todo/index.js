import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import TodoADD from './add'
import TodoList from './list'

export default class Todo extends Component{


	render(){
		return(
				<div>
					<p></p>
					<div className="row">
						<div className="col-sm-12">
							<TodoADD/>
						</div>
					</div>
					<p></p>
					<div className="row">
						<div className="col-sm-12">
							<TodoList/>
						</div>
					</div>
				</div>
			)
	}
}