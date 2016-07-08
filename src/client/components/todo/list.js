import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentUndo from 'material-ui/svg-icons/content/undo'
import IconButton from 'material-ui/IconButton'

export default class TodoList extends Component{
	onMarkDone(_item){
		this.props.markDone(_item)
	}

	onDelete(key){
		this.props.remove(key)
	}

	render(){
		let textStyles = {
			read: {
				textDecoration: 'line-through',
				color: '#4CAF50'
			},
			notread: { textDecoration: 'none'},
		}

		let listStyles = {
			backgroundColor: '#fff',
			borderTop: '1px solid #eee'
		}

		const todoControls = item => (
			<div>
				<IconButton
					touch={true}
					onClick={this.onMarkDone.bind(this, item)}
				>
					{item.completed ? <ContentUndo color={'silver'} /> : <ActionDone color={'silver'} /> }
				</IconButton>
				<IconButton
					touch={true}
					onClick={this.onDelete.bind(this, item['.key'])}
				>
					<ActionDelete color={'silver'} />
				</IconButton>
			</div>
		)

		const todoText = item => (
			<span style={item.completed ? textStyles.read : textStyles.notread }>
				{item.text}
			</span>
		)

		return(
				<div>
					<div className="mui--text-center">
						{!this.props.list.loaded ? <CircularProgress size={0.5}/> : ''}
						{!this.props.list.todos.length && this.props.list.loaded ? <p className="mui--text-dark-hint">The list is empty, add some items ;)</p> : ''}
	  			</div>

					<List>
     				{ this.props.list.loaded ? this.props.list.todos.map((item, index) =>(
							<ListItem
								disabled={true}
								key={index}
			          primaryText={todoText(item)}
								style={listStyles}
								rightIconButton={todoControls(item)}
			        />
							)): ''}
     			</List>

				</div>
			)
	}
}
