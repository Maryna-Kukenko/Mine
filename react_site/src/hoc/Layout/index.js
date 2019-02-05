import React, {Component} from  'react'
import './style.scss'

import Header from '../../containers/Header'

class Layout extends Component{
  render() {
    return (
      <div className='layout'>
        <Header />
        <main>
         {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout