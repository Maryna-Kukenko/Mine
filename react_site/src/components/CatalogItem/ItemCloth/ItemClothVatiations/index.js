import React from 'react'

const ItemClothVariations = (props) => {
  let clothView = {
    width: '50px',
    height: '50px',
    background: `url(${props.img}) no-repeat`,
    backgroundSize: 'cover',
    marginLeft: '10px'
  }
  return (
    <label>
      <div style={clothView}>
        <input
          type='radio'
          name='kindOfCloth'
          value={props.img}
        />
      </div>
        {console.log(props.img)}
    </label>
  )
}

export default ItemClothVariations