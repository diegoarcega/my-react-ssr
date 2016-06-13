import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'

class Layout extends React.Component {
    render() {
        return(
        	<section>
	        	<Header/>
	        	<div className="container">
	        		{this.props.children}
	        	</div>
        	</section>
        	)
    }
}

export default Layout;
