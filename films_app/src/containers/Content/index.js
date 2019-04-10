import React, {Component} from 'react'
import './style.scss'

import ContentItem from '../../components/ContentItem'

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <ul className='content-list'>
          <ContentItem />
        </ul>
      </div>
    )
  }
}

export default Content