import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TodoList from '../../components/todo/list'
import TodoAdd from '../../components/todo/add'
import actions from '../../redux/actions'


class Todo extends Component{
	componentWillMount() {
	  this.props.actions.initTodos()
	  this.setState({
	  	listRequest: {
	  		todos: [],
	  		loaded: false
	  	}
	  })
	}

  shouldComponentUpdate(nextProps, nextState){
    return this.state.listRequest.todos !== nextProps.todos
  }

	componentWillUpdate(nextProps, nextState) {
		this.state.listRequest.todos = nextProps.todos.reverse()
		this.state.listRequest.loaded = true
	}

	render(){
		return(
			<div className="mui-row">
				<div className="mui-col-xs-12">
					<p></p>
          <p className="mui--text-dark-secondary">This is a Firebase todo list</p>
					<TodoAdd addTodo={this.props.actions.add} />
					<p></p>
					<TodoList
						remove={this.props.actions.removeTodo}
						markDone={this.props.actions.markDone}
						list={this.state.listRequest}
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
