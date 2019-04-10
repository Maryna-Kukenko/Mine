import React, {Component} from 'react'
import './style.scss'

import UploadFile from '../../components/UploadFile'

class SideBar extends Component {
  render() {
    return (
      <aside className='side-bar'>
        <UploadFile />
      </aside>
    )
  }
}

export default SideBar