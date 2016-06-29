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
		let formStyles = {
			form: {
				textAlign:'right'
			},
			input : {
				minWidth: '50%'
			}
		}
		return(
				<div>
						<form onSubmit={ this.onSubmitItem.bind(this) }  style={formStyles.form} className="mui-form--inline">

								<div className="mui-textfield" style={formStyles.input}>
						      <input type="text"
									 	ref="addInput"
						      	onChange={ this.handleChange.bind(this) }
						      	value={this.state.inputText} required
										placeholder="Add a new item here"
										/>
								</div>

								<button className="mui-btn mui-btn--primary" type="submit">Add Item</button>

					  </form>

				</div>
			)
	}
}
