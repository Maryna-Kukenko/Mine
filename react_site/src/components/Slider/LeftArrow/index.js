import React from 'react'
import './style.scss'

const LeftArrow = (props) => {
  return(
    <div className='prev_arrow' onClick={props.goToPrevSlide}>
      <i className='fa fa-arrow-left fa-2x' />
    </div>
  )
}

export default LeftArrow