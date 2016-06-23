import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CircularProgress from 'material-ui/CircularProgress'

export default class TodoList extends Component{
	onMarkDone(_item){
		this.props.markDone(_item)
	}

	onDelete(key){
		this.props.remove(key)
	}

	render(){
		let styles = {
			read: { textDecoration: 'line-through'},
			notread: { textDecoration: 'none'},
		}
		return(
				<MuiThemeProvider muiTheme={getMuiTheme()}>
					<div>
					<div className="text-xs-center">
	  				<small className="text-muted"></small>
	  				{!this.props.list.loaded ? <CircularProgress/> : ''}
	  			</div>
					<ul className="list-group">
						{ this.props.list.loaded ? this.props.list.todos.map((item, index) =>(
							<li className="list-group-item" key={index}>
								<span style={item.completed ? styles.read : styles.notread }>
									{item.text}
								</span>
								<span>
									<div className="btn-group btn-group-sm pull-xs-right" role="group">
											<button type="button" onClick={ this.onMarkDone.bind(this, item) } className="btn btn-secondary">Mark as {item.completed ? `not done`: `done`}</button>
										  <button type="button" onClick={ this.onDelete.bind(this, item['.key']) }className="btn btn-secondary">Delete</button>
									</div>
								</span>
							</li>
						)): ''}
					</ul>
					</div>
				</MuiThemeProvider>
			)
	}
}
