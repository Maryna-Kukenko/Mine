import React, {Component} from 'react'
import './style.scss'

import UploadFile from '../../components/UploadFile'

class SideBar extends Component {


  render() {
    return (
      <aside className='side-bar'>
        <UploadFile
          addFile = {this.props.addFile}
        />
      </aside>
    )
  }
}

export default SideBar