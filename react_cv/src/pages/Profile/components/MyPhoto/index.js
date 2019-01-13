import React, {Component} from 'react'

import './style.css'
import Photo from './myPhoto.JPG'

class MyPhoto extends Component {
  render() {
    return (
      <div className='my-picture'>
        <img className='picture' src={Photo} alt='My_Photo'/>
      </div>
    )
  }
}

export default MyPhoto