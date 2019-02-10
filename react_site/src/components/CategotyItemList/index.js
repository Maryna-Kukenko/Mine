import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ListComponent from "./ListComponent";

class CategoryItemList extends Component{
  componentWillMount() {
    console.log(data.name)
  }

  render() {
    return (
      <div className='category-item-list'>
        {
          data.map((item, index) => {
            if(this.props.match.params.way === item.name){
              return (
              <ListComponent
                key={index}
                list={item.list}
              />
              )
            }
          })
        }
      </div>
    )
  }
}

export default CategoryItemList