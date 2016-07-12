import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


class Home extends React.Component{
	render(){
    let cardStyles = {
        width: '25%'
    }
		return(
			<div>
        <h1>Postagens</h1>
        <div className="mui-row">
            <div className="mui-col-sm-4">
                <Card>
                  <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="http://lorempixel.com/100/100/nature/"
                  />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardMedia>
                    <img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg" />
                  </CardMedia>
                  <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                  </CardActions>
                 </Card>
             </div>
             <div className="mui-col-sm-4">
                 <Card>
                   <CardHeader
                     title="URL Avatar"
                     subtitle="Subtitle"
                     avatar="http://lorempixel.com/100/100/nature/"
                   />
                   <CardText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                   </CardText>
                   <CardMedia>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Tortoiseshell_she-cat.JPG" />
                   </CardMedia>
                   <CardActions>
                     <FlatButton label="Action1" />
                     <FlatButton label="Action2" />
                   </CardActions>
                  </Card>
              </div>
              <div className="mui-col-sm-4">
                  <Card>
                    <CardHeader
                      title="URL Avatar"
                      subtitle="Subtitle"
                      avatar="http://lorempixel.com/100/100/nature/"
                    />
                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardMedia>
                      <img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg" />
                    </CardMedia>
                    <CardActions>
                      <FlatButton label="Action1" />
                      <FlatButton label="Action2" />
                    </CardActions>
                   </Card>
               </div>
           </div>
           <div className="mui-row">
               <div className="mui-col-sm-4">
                   <Card>
                     <CardHeader
                       title="URL Avatar"
                       subtitle="Subtitle"
                       avatar="http://lorempixel.com/100/100/nature/"
                     />
                     <CardText>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                     </CardText>
                     <CardMedia>
                       <img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg" />
                     </CardMedia>
                     <CardActions>
                       <FlatButton label="Action1" />
                       <FlatButton label="Action2" />
                     </CardActions>
                    </Card>
                </div>
            </div>
			</div>
			)
	}
}

export default Home
