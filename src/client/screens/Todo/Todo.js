import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CircularProgress from 'material-ui/CircularProgress'
import {List, ListItem} from 'material-ui/List'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentUndo from 'material-ui/svg-icons/content/undo'
import IconButton from 'material-ui/IconButton'

import TodoAdd from '../../components/todo/add'
import actions from '../../redux/actions'


class Todo extends Component{
	componentWillMount() {
	  this.props.actions.initTodos()
	  this.setState({
	  	listRequest: {
	  		todos: this.props.todos,
	  		loaded: false
	  	}
	  })
	}

	render(){
		const textStyles = {
			read: {
				textDecoration: 'line-through',
				color: '#4CAF50'
			},
			notread: { textDecoration: 'none'},
		}

		const listStyles = {
			backgroundColor: '#fff',
			borderTop: '1px solid #eee'
		}

		const todoControls = item => (
			<div>
				<IconButton
					touch={true}
					onClick={()=>this.props.actions.toggleItem(item.id)}
				>
					{item.completed ? <ContentUndo color={'silver'} /> : <ActionDone color={'silver'} /> }
				</IconButton>
				<IconButton
					touch={true}
					onClick={()=>this.props.actions.deleteItem(item.id)}
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
			<div className="mui-row">
				<div className="mui-col-xs-12">
					<p></p>
          <p className="mui--text-dark-secondary">This is a mongodb todo list</p>
					<TodoAdd addTodo={this.props.actions.add} />
					<p></p>
					{/*<div className="mui--text-center">
						{!this.state.listRequest.loaded ? <CircularProgress size={0.5}/> : ''}
						{!this.state.listRequest.todos.length && this.state.listRequest.loaded ? <p className="mui--text-dark-hint">The list is empty, add some items ;)</p> : ''}
					</div>*/}
					<List>
						{  this.props.todos.map((item, index) =>(
							<ListItem
								disabled={true}
								key={index}
								primaryText={todoText(item)}
								style={listStyles}
								rightIconButton={todoControls(item)}
							/>
							))}
					</List>
				</div>
			</div>
			)
	}
}



function mapStateToProps (state) {
	return state
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
