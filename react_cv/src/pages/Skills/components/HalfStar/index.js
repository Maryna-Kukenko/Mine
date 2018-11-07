import React, {Component} from 'react'

import StarHalfPicture from './half.png'

class HalfStar extends Component{
  render(){
    return (
      <div className='one-star'>
        <img className='star-vie' src={StarHalfPicture} width='20px' height='20px'/>
      </div>
    )
  }
}

export default HalfStar