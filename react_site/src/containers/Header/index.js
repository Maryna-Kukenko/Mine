import React, {Component} from 'react'
import './style.scss'

import HeaderTop from '../../components/HeaderTop'
import Navigation from '../../components/Navigation'


class Header extends Component{
  render() {
    return (
      <div className='header'>
        <HeaderTop />
        <Navigation />
      </div>
    )
  }
}

export default Header