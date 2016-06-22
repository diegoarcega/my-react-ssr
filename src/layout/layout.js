import React from 'react'
import Header from './header'


const Layout = ({children}) => (
  <section>
    <Header/>
    <div className="container">
      {children}
    </div>
  </section>
)

export default Layout;
