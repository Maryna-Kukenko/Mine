import React, {Component} from 'react'
import './style.scss'
import ItemSizeVariations from './ItemSizeVariations'

class ItemSize extends Component{
  showSizePrice = (e) => {
    this.props.updateSizePrice(e.target.value)
 }

  render() {
    return (
      <div className='item-size'>
        Выберите рaзмер изделия:
        <select onChange ={this.showSizePrice}>
          <option></option>
          {
            this.props.size.map((item, index) => {
              return (
                <ItemSizeVariations
                  key={index}
                  size={item.proportions}
                  price={item.price}
                />
              )
            })
          }
        </select>
      </div>
    )
  }
}

export default ItemSize