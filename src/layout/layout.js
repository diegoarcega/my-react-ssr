import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import customized from './material-ui/customTheme'

import Header from './header'

injectTapEventPlugin()

const Layout = ({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(customized)}>
    <section>
      <Header/>
      <div className="mui-container">
        {children}
      </div>
    </section>
  </MuiThemeProvider>
)

export default Layout
