import React, {Component} from 'react'
import './style.scss'
import logo from './../../img/logo-design.png'

class Logotype extends Component{
  render() {
    return (
      <React.Fragment>
        <img
          src={logo}
          alt='logo-image'
          className='logo'
        />
      </React.Fragment>
    )
  }
}

export default Logotype