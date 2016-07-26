import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import {List, ListItem} from 'material-ui/List'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentUndo from 'material-ui/svg-icons/content/undo'
import IconButton from 'material-ui/IconButton'

export default class TodoList extends Component{

	componentWillMount(){
		this.setState({
			list: this.props.list
		})
	}

	shouldComponentUpdate(nextProps){
		return this.state.list.todos !== nextProps.todos
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			list: nextProps.list
		})
	}

	onToggle(id){
		this.props.toggle(id)
	}

	onDelete(id){
		this.props.delete(id)
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
					onClick={this.onToggle.bind(this, item.id)}
				>
					{item.completed ? <ContentUndo color={'silver'} /> : <ActionDone color={'silver'} /> }
				</IconButton>
				<IconButton
					touch={true}
					onClick={this.onDelete.bind(this, item.id)}
				>
					<ActionDelete color={'silver'} />
				</IconButton>
			</div>
		)

		// const todoText = item => (
		// 	<span style={item.completed ? textStyles.read : textStyles.notread }>
		// 		{item.text} - {item.id}
		// 	</span>
		// )

		return(
				<div>
					<div className="mui--text-center">
						{!this.state.list.loaded ? <CircularProgress size={0.5}/> : ''}
						{!this.state.list.todos.length && this.state.list.loaded ? <p className="mui--text-dark-hint">The list is empty, add some items ;)</p> : ''}
	  			</div>

					<List>
     				{ this.state.list.loaded ? this.state.list.todos.map((item, index) =>(
							<ListItem
								disabled={true}
								key={index}
			          primaryText={item.text}
								style={listStyles}
								rightIconButton={todoControls(item)}
			        />
							)): ''}
     			</List>

				</div>
			)
	}
}
