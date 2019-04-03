import React, {Component} from 'react'
import './style.scss'

class FindCityButton extends Component{
  render() {
    return (
      <button
        onClick={this.props.findCity}
        className='find-city-button'
      >
        find
      </button>
    )
  }
}

export default FindCityButton