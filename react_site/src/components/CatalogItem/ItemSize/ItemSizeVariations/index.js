import React from 'react'

const ItemSizeVariations = (props) => {
  return (
    <>
      <option style={{'fontSize':'15pxy'}} value={props.price}>{props.size}</option>
    </>
  )
}

export default ItemSizeVariations