import React from 'react'
import './style.scss'

const AddToBasketButton = (props) => {
  // const style = {
  //   background: `url(${props.bgPath}) 0% 0% / contain no-repeat lightgray`
  // }
  return (
    <button
      className='add-to-basket'
      style={props.style}
      onMouseDown={props.darkColor}
      onMouseUp={props.lightColor}
    >

    </button>
  )
}

export default AddToBasketButton