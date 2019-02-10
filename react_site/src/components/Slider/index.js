import React, {Component} from 'react'
import './style.scss'

import Slide from "./Slide"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"

import logo1 from './../../img/basket.jpg'
import logo2 from './../../img/find.png'
import logo3 from './../../img/logo-design.jpg'


class Slider extends Component{

  state = {
    images:[
      logo1,
      logo2,
      logo3
    ],
    currentIndex: 0,
    translateValue: 0
  }

  goToPrevSlide = () =>{
    if(this.state.currentIndex === 0)
      return

      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
  }


  goToNextSlide = () =>{
    //  In case when we are at the and of the images array, we want to reset currentIndex and translateValue, so we return to the 1st image in array

    // if(this.state.currentIndex === this.state.images.length - 1){
    //   return this.setState({
    //     currentIndex: 0,
    //     translateValue: 0
    //   })
    // }

    if(this.state.currentIndex === this.state.images.length - 1)
      return

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }))
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className='slider'>
        <div className='slider-wrapper'
        style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          {
            this.state.images.map((image, index) => (
            <Slide  key={index} image={image}/>
            ))
          }
        </div>
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
