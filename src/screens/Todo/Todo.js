import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoList from '../../components/todo/list'
import TodoAdd from '../../components/todo/add'
import actions from '../../redux/actions'


class Todo extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-xs-12">
					<p></p>
					<TodoAdd addTodo={this.props.actions.addTodo} />
					<p></p>
					<TodoList
						remove={this.props.actions.removeTodo}
						markDone={this.props.actions.markDone}
						list={this.props.todos}
						/>
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