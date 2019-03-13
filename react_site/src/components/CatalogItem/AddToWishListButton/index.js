import React from 'react'
import './style.scss'

const AddToWishListButton = (props) => {
const style = {
  background: `url(${props.bgPath})`
}
  return (
    <button
      className='add-to-wishList'
      onClick={props.addToWishList}
      style={style}
      toggle={props.toggle}
    >
      {console.log(props.bgPath)}
      {console.log(props.toggle)}
    </button>
  )
}

export default AddToWishListButton