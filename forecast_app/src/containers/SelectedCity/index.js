import React, { Component } from 'react'
import './style.scss'

import FindCityInput from '../../components/FindCityForm/FindCityInput'
import FindCityButton from '../../components/FindCityForm/FindCityButton'

class SelectedCity extends Component{
  render() {
    return (
      <label className='selected-city' >
        <FindCityInput
        value = {this.props.value}
        changeInputValue = {this.props.changeInputValue}
        />
        <FindCityButton
        findCity = {this.props.findCity}
        />
      </label>
    )
  }
}

export  default  SelectedCity