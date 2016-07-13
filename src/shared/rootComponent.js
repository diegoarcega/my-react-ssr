import React, { Component } from 'react'

class RootComponent extends Component {
  render(){
    return(
      <html>
      	<head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
          <link href="//cdn.muicss.com/mui-0.6.5/css/mui.min.css" rel="stylesheet" type="text/css" />
      		<title>Universal app</title>
      	</head>

      	<body>
          <script defer src="assets/app.js"></script>
      	</body>
      </html>
    )
  }
}

export default RootComponent
