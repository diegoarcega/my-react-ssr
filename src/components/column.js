import React from 'react'
import ReactDOM from 'react-dom'

export class Column extends React.Component {
  render(){
  	return(
  		<div className="column">
			{this.props.children}
		</div>
  		)
  }
}


export default Column