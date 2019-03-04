import React from 'react'
import './style.scss'
import ItemSizeVariations from './ItemSizeVariations'

const ItemSize = (props) => {
  return (
    <div className='item-size'>
      Выберите рaзмер изделия:
      <select >
        {
          props.size.map((item, index) => {
            return (
              <ItemSizeVariations
                key={index}
                size={item.proportions}
              />
            )
          })
        }
      </select>
    </div>
  )
}

export default ItemSize