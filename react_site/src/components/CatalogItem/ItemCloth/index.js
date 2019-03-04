import React, {Component} from 'react'
import './style.scss'
import ItemClothVariations from './ItemClothVatiations'

class ItemCloth extends Component {
    render() {
      return (
      <form className='item-cloth'>
        <span className='select-cloth'>Выберите ткань:</span>
        {
          this.props.cloth.map((item, index) => {
            return (
              <ItemClothVariations
                key={index}
                img={item.img}
              />
            )
          })
        }
      </form>
    )
  }
}

export default ItemCloth