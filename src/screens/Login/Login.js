import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends React.Component{
    render(){
		return(
            <div className="mui--text-center">
                <div className="mui-row">
                    <div className="mui-col-xs-12">
                        <TextField
                            hintText="Type here your name"
                            floatingLabelText="E-mail"
                            />
                    </div>
                </div>
                <div className="mui-row">
                    <div className="mui-col-xs-12">
                        <TextField
                            hintText="Type here your password"
                            floatingLabelText="Password"
                            />
                    </div>
                </div>
                <div className="mui-row">
                    <div className="mui-col-xs-12">
                        <RaisedButton label="Login" fullWidth={true} primary={true} />
                    </div>
                </div>
            </div>
			)
	}
}

export default Login
