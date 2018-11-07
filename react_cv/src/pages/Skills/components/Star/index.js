import React, {Component} from 'react'

import StarPicture from './star.png'

class Star extends Component{
  render(){
    return (
      <div className='one-star'>
        <img className='star-vie' src={StarPicture} width='20px' height='20px'/>
      </div>
    )
  }
}

export default Star