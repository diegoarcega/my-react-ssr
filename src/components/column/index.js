import React from 'react'
import ReactDOM from 'react-dom'

import Styles from './style.css'

export class Column extends React.Component {
  render(){
  	return(
  		<div className={Styles.column}>
			{this.props.children}
		</div>
  		)
  }
}


export default Column