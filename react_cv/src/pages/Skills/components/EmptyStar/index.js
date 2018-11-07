import React, {Component} from 'react'

import Empty from './empty.png'

class EmptyStar extends Component{
  render(){
    return (
      <div className='one-star'>
        <img className='star-vie' src={Empty} width='20px' height='20px'/>
      </div>
    )
  }
}

export default EmptyStar