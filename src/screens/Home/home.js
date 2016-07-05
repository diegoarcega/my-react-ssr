import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions/index'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import CommunicationComment from 'material-ui/svg-icons/communication/comment'
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar'


class Home extends React.Component{
  componentWillMount() {
	  this.props.actions.initPosts()
    this.setState({
      sendForm: {},
      open: false
    })
	}

  handleSubmit(){
    this.props.actions.add(this.state.sendForm)
  }

  handleChange(event){
    this.state.sendForm[event.target.name] = event.target.value
  }

  handleOpen(){
    this.setState({
      open: true
    })
  }

  handleClose(){
    this.setState({
      open: false
    })
  }

	render(){
    const cardStyles = {
        card: { backgroundColor: '#fff', marginTop: '10px' },
        cardHeader : {
          avatar: {borderRadius: '25%'}
        },
        cardText: {
          color: '#5f5f5f'
        }
    }
    const sendForm = () => (
      <div>
        <TextField
         hintText="Hint Text"
         floatingLabelText="Name"
         name="name"
         value={this.state.sendForm.name}
         onChange={this.handleChange.bind(this)}
       /><br />
       <TextField
         hintText="Hint Text"
         floatingLabelText="Text"
         name="text"
         value={this.state.sendForm.text}
         onChange={this.handleChange.bind(this)}
       /><br />
       <TextField
         hintText="Hint Text"
         floatingLabelText="video"
         name="video"
         value={this.state.sendForm.videoUrl}
         onChange={this.handleChange.bind(this)}
       /><br />
       <RaisedButton label="Enviar" primary={true} onClick={this.handleSubmit.bind(this)}/>
     </div>
    )

		return(
			<div>
      <RaisedButton label="Add new video" primary={true} onClick={this.handleOpen.bind(this)} />
      <div className="mui-row">
        {this.props.posts.map((item, index)=>
          (<div key={index} className="mui-col-md-4">
              <Card style={cardStyles.card}>
                <CardHeader
                  title={item.name}
                  subtitle={item.date}
                  titleColor='#2196F3'
                  subtitleColor='#5f5f5f'
                  avatar={<Avatar style={cardStyles.cardHeader.avatar} src="http://lorempixel.com/100/100/nature/"/>}
                />
                <CardText style={cardStyles.cardText}>{item.text}</CardText>
                <CardMedia>
                  <iframe width="350" height="215" src={item.video || 'https://www.youtube.com/embed/G8KpPw303PY'} frameborder="0" allowfullscreen="1" style={{border:0}}></iframe>
                </CardMedia>
                <CardActions>
                  <span>{item.likes}</span>
                  <IconButton tooltip="Gostei" onClick={this.props.actions.increaseLikes.bind(this,item.id)}>
                    <ActionFavorite color={'#ddd'}/>
                  </IconButton>
                  <IconButton tooltip="Comentar">
                    <CommunicationComment color={'#ddd'}/>
                  </IconButton>
                </CardActions>
               </Card>
           </div>)
        )}
  			</div>

        <Dialog
          title="Add new video"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          >
          Give us your name, a text describing what the video is and the youtube video URL.
          { sendForm() }
        </Dialog>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
