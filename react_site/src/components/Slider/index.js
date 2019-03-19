import React, {Component} from 'react'
import './style.scss'

import logo1 from './../../img/baby1.jpg'
import logo2 from './../../img/baby2.jpg'
import logo3 from './../../img/baby3.jpg'
import logo4 from './../../img/baby4.jpg'
import {Carousel, CarouselItem} from "react-bootstrap"


class Slider extends Component{

  state = {
    images:[
      logo1,
      logo2,
      logo3,
      logo4
    ],
  }

  render() {
    console.log(this.state.images)
    return (
      <div className='slider'>
        <Carousel>
          {this.state.images.length !== 0?
            this.state.images.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img
                    width={'400px'}
                    height={'400px'}
                    src={item}
                    alt="slider_photo"
                  />
                </CarouselItem>
              )
            }):
            null
          }
        </Carousel>
      </div>
    )
  }
}

export default Slider
