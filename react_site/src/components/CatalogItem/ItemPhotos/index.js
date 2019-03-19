import React, {Component} from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'
import './style.scss'

class ItemPhotos extends Component {
  render() {
    return (
      <div className='item-photos'>
        <Carousel>
          {this.props.photos.length !== 0?
            this.props.photos.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img
                    width={'400px'}
                    height={'400px'}
                    src={`${item}`}
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

export default ItemPhotos