import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class TodoList extends Component{

	render(){
		return(
				<div>
  				<small className="text-muted">Items already into the list</small>
					<ul className="list-group">
						<li className="list-group-item">I am the first item in this list</li>
					</ul>
				</div>
			)
	}
}