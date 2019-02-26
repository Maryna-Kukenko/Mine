import React from 'react'
import {withRouter} from 'react-router-dom'
import './style.scss'

const GoodsCategory = (props) =>{
  return (
    <div
      className='goods-category'
      onClick={() => props.history.push('/catalog/' + props.way.toLowerCase())}
    >
      <img
        src={props.image}
        style={{width:350, height:250}}
        alt='category_img'
      />
      <h3>{props.name}</h3>
    </div>
  )
}

export default withRouter(GoodsCategory)