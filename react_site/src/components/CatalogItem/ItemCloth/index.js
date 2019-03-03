import React from 'react'
import './style.scss'
import ItemClothVariations from './ItemClothVatiations'

const ItemCloth = (props) => {
  return (
    <form className='item-cloth'>
      <span className='select-cloth'>Выберите ткань:</span>
      {
        props.cloth.map((item, index) => {
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

export default ItemCloth