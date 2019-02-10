import React, {Component} from 'react'
import './style.scss'

import GoodsCategory from '../../components/GoodsCategory'

import photo1 from './../../img/spalnya.jpg'
import photo2 from './../../img/kuchnia.png'
import photo3 from './../../img/dlia-detiee1.jpg'
import photo4 from './../../img/mantilya.jpg'

class Catalog extends Component{
  state = {
    categories: [
      {name: 'Для сна', photo: photo1, way: 'for_sleep'},
      {name: 'Для кухни', photo: photo2, way: 'for_kitchen'},
      {name: 'Для детей', photo: photo3, way: 'for_children'},
      {name: 'Сезонное', photo: photo4, way: 'seasonal'}
    ]
  }

  render(){
    return (
      <div className='catalog'>
        {
          this.state.categories.map((item, index) => {
            return (
              <GoodsCategory
              key={index}
              name={item.name}
              image={item.photo}
              way={item.way}
              {...this.props}
              />
              )
            })
        }
      </div>
    )
  }
}

export default Catalog