import React, {Component} from 'react'
import './style.scss'
import ItemClothVariations from './ItemClothVatiations'

class ItemCloth extends Component {
  showClothPrice = (e) => {
    this.props.updateClothPrice(e.target.value)
    console.log('show cloth price: ' + e.target.value)
  }
    render() {
      return (
      <form
        className='item-cloth'
      >
        <span className='select-cloth'>Выберите ткань:</span>
        {
          this.props.cloth.map((item, index) => {
            return (
              <ItemClothVariations
                key={index}
                img={item.img}
                price={item.price}
                showPrice={this.showClothPrice}
              />
            )
          })
        }
      </form>
    )
  }
}

export default ItemCloth