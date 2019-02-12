import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ListComponent from "./ListComponent"

class CategoryItemList extends Component{

  render() {
    return (
      <div className='category-item-list'>
        {
          data.map((item, index) => {
            return (
              this.props.match.params.way === item.name?
              <ListComponent
                key={index}
                list={item.list}
              />
              :null
            )
          })
        }
      </div>
    )
  }
}

export default CategoryItemList