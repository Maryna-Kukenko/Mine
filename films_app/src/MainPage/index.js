import React, {Component} from 'react'
import './style.scss'

import SideBar from '../containers/SideBar/inedex'
import Content from '../containers/Content'

class MainPage extends Component {
  render() {
    return (
      <div className='main-page'>
        <SideBar />
        <Content />
      </div>
    )
  }
}

export default MainPage