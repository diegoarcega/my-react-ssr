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
                  avatar="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg"
                />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardMedia>
                  <img src="http://bigcatrescue.org/wp-content/uploads/wp_photo_seller/14/watermark_TigerPhoto_JV007.jpg" />
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
                    avatar="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg"
                  />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardMedia>
                    <img src="http://bigcatrescue.org/wp-content/uploads/wp_photo_seller/14/watermark_TigerPhoto_JV007.jpg" />
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
                     avatar="https://pbs.twimg.com/profile_images/664169149002874880/z1fmxo00.jpg"
                   />
                   <CardText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                   </CardText>
                   <CardMedia>
                     <img src="http://bigcatrescue.org/wp-content/uploads/wp_photo_seller/14/watermark_TigerPhoto_JV007.jpg" />
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
