import React, {Component} from 'react'
import './style.scss'

class ItemTotalPrice extends Component {
  render() {
    return (
      <div className='item-total-price'>
        <span>Общая стоимость </span>
        <span>{+this.props.sizePrice + +this.props.clothPrice}</span>
      </div>
    )
  }
}

export default ItemTotalPrice