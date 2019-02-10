import React from 'react'
import './style.scss'

const LeftArrow = (props) => {
  return(
    <div className='prev-arrow' onClick={props.goToPrevSlide}>
      <i className='fa fa-arrow-left fa-2x' aria-hidden="true"/>
    </div>
  )
}

export default LeftArrow