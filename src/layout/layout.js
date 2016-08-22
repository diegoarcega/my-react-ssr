import React from 'react'
import Header from './header'


const Layout = ({children}) => (
    <section>
      <Header/>
      <div className="mui-container">
        {children}
      </div>
    </section>
)

export default Layout
