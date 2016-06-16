import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class TodoList extends Component{

	onMarkDone(id){
		this.props.markDone(id)
	}

	onDelete(id){
		this.props.remove(id)
	}

	render(){
		let styles = {
			read: { textDecoration: 'line-through'},
			notread: { textDecoration: 'none'},
		}
		return(
				<div>
  				<small className="text-muted">
  					{this.props.list.length > 0 ? 'Items already in the list': 'Add items in the field above'}
  				</small>
					<ul className="list-group">
						{this.props.list.map((item, index) =>(
							<li className="list-group-item" key={index}>
								<span style={item.completed ? styles.read : styles.notread }>{item.text} {item.id}</span>
								<span>
									<div className="btn-group btn-group-sm pull-xs-right" role="group">
											<button type="button" onClick={ this.onMarkDone.bind(this, item.id) } className="btn btn-secondary">Mark as {item.completed ? `not done`: `done`}</button>
										  <button type="button" onClick={ this.onDelete.bind(this, item.id) }className="btn btn-secondary">Delete</button>
									</div>
								</span>
							</li>
						))}
					</ul>
				</div>
			)
	}
}

