import React from 'react'
import './style.scss'

const Slide = ({image}) => {
  const styles = {
    backgroundImage: 'url({image})',
    width: '400px',
    height: '400px'
  }
  return (
    <div className='slide' style={styles}>
      {/*<img src={props.image} />*/}
    </div>
  )
}

export default Slide