import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class TodoADD extends Component{


	render(){
		return(
				<div>
					<small className="text-muted">Here you add an item to the list</small>
					<div className="input-group">
			      <input type="text" className="form-control" placeholder="Add your item here"/>
			      <span className="input-group-btn">
			        <button className="btn btn-primary" type="button">Add Item!</button>
			      </span>
			    </div>
				</div>
			)
	}
}