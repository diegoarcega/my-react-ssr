import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions/layout'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

import List from '../../components/crave/list'


class Crave extends Component{
	componentWillMount() {
	  this.props.actions.getLayout()
	}
	render(){
		return(
			<MuiThemeProvider muiTheme={getMuiTheme()}>
			  <div>
			  	{this.props.layout.length ? '':
			  		<div className="text-xs-center"><CircularProgress/></div>
			  	}
			  	{ this.props.layout.map((row, index) => (
			  			<List key={index} list={row}/>
			  	))
			  	}
			  </div>
		  </MuiThemeProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Crave)
