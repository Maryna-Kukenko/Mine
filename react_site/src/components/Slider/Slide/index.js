import React from 'react'
import './style.scss'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 600,
    height: 400
  }
  return <div className='slide' style={styles}/>
}

export default Slide