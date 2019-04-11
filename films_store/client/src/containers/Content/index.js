import React, {Component} from 'react'
import './style.scss'

import ContentItem from '../../components/ContentItem'

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <ul className='content-list'>
          {this.props.value.map((item, index) => {
            return(
              <ContentItem
                key = {index}
                title = {item.title}
                release_year = {item.release_year}
                format = {item.format}
                stars = {item.stars}
                id = {item._id}
                deleteFilm = {this.props.deleteFilm}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Content