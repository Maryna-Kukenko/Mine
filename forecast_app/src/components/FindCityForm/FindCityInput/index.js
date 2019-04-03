import React, {Component} from 'react'
import './style.scss'

class FindCityInput extends Component{
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.changeInputValue}
        className='find-city-input'
        type='text'
        placeholder='Choose the city'
      />
    )
  }
}

export default FindCityInput