import React, {Component} from 'react'

import TodoADD from './add'
import TodoList from './list'

export default class Todo extends Component{

	render(){
		return(
				<div>
					<p></p>
					<div className="mui-row">
						<div className="mui-col-sm-12">
							<TodoADD/>
						</div>
					</div>
					<p></p>
					<div className="mui-row">
						<div className="mui-col-sm-12">
							<TodoList listItems={this.props.list}/>
						</div>
					</div>
				</div>
			)
	}
}
