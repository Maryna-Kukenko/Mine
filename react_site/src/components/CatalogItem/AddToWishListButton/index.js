import React from 'react'
import './style.scss'

const AddToWishListButton = (props) => {
const style = {
  background: `url(${props.bgPath}) 0% 0% / contain no-repeat`,
  transition:'background 0.3s'
}
  return (
    <button
      onClick={props.addToWishList}
      style={style}
      className='add-to-wishList'
    >
    </button>
  )
}

export default AddToWishListButton