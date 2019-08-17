import React, {Component} from 'react'
import './style.scss'

class Layout extends Component{
  render() {
    return (
      <div className='layout'>
        <main className='main'>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout