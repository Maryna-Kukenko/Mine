import React from 'react'
import './style.scss'

const ItemTitle = (props) => {
  return (
    <div className='item-title'>
      <h3 className='title'>{props.title}</h3>
      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nostrum quas, quisquam quos suscipit vel. </p>
    </div>
  )
}

export default ItemTitle