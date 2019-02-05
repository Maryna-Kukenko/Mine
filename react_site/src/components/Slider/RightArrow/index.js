import React from 'react'
import './style.scss'

const RightArrow = (props) => {
  return(
    <div className='prev_arrow' onClick={props.goToNextSlide}>
      <i className='fa fa-arrow-right fa-2x' />
    </div>
  )
}

export default RightArrow