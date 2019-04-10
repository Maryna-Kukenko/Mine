import React, {Component} from 'react'
import './style.scss'

import UploadFile from '../../components/UploadFile'
import Filter from '../../components/Filter'


class SideBar extends Component {
  render() {
    return (
      <aside className='side-bar'>
        <UploadFile
          addFile = {this.props.addFile}
        />
        <Filter
          value = {this.props.value}
          changeFilterValue = {this.props.changeFilterValue}
          showFilms = {this.props.showFilms}
        />
      </aside>
    )
  }
}

export default SideBar