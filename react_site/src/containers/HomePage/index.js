import React, {Component} from 'react'
import './style.scss'

import Slider from "../../components/Slider"

class HomePage extends Component{
  render(){
    return (
      <div className='home_page'>
        <Slider />
      </div>
    )
  }
}

export default HomePage