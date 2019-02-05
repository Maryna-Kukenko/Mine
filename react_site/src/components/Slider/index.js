import React, {Component} from 'react'
import './style.scss'

import Slide from "./Slide"
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";




class Slider extends Component{

  state = {
    images:[
      './../../img/basket.jpg',
      './../../img/find.png',
      './../../img/logo-design.png',
    ],
    currentIndex: 0
  }

  goToPrevSlide = () =>{
    this.setState({
      currentIndex: this.currentIndex + 1
    })
  }

  goToNextSlide = () =>{

  }
  render() {
    return (
      <div className='slider'>

        {this.state.images.map((image, index) => (
          <Slide  key={index} image={image}/>
        ))}

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    )
  }
}

export default Slider
