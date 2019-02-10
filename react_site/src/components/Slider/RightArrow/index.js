import React from 'react'
import './style.scss'

const RightArrow = (props) => {
  return(
    <div className='next-arrow' onClick={props.goToNextSlide}>
      <i className='fa fa-arrow-right fa-2x' aria-hidden="true"/>
    </div>
  )
}

export default RightArrow