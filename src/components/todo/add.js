import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class TodoAdd extends Component{

	constructor(props, context){
		super(props, context)
		this.state = {
			inputText: ''
		}
	}

	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}

	onSubmitItem(event){
		event.preventDefault()
		this.props.addTodo(this.state.inputText)
		this.state.inputText = ''
	}

	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.addInput).focus()
	}

	render(){
		return(
				<div>
					<small className="text-muted">Here you add an item to the list</small>
					<form onSubmit={ this.onSubmitItem.bind(this) }>
						<div className="input-group">
				      <input type="text" ref="addInput" className="form-control"
				      	onChange={ this.handleChange.bind(this) }
				      	value={this.state.inputText} placeholder="Add your item here"/>
				      <span className="input-group-btn">
				        <button className="btn btn-primary" type="submit">Add Item</button>
				      </span>
			    	</div>
				  </form>
				</div>
			)
	}
}