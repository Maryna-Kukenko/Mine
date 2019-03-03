import React, {Component} from  'react'
import './style.scss'

import Header from '../../containers/Header'
import Footer from "../../containers/Footer"

class Layout extends Component{
  render() {
    return (
      <div className='layout'>
        <Header />
        <main className='main'>
         {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout