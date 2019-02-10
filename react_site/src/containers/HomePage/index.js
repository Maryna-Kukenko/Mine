import React, {Component} from 'react'
import './style.scss'

import Slider from "../../components/Slider"
import AboutUs from "../../components/AboutUs"

class HomePage extends Component{
  render(){
    return (
      <div className='home_page'>
        <Slider />
        <AboutUs />
      </div>
    )
  }
}

export default HomePage