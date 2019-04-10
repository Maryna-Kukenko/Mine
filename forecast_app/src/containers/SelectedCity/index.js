import React, { Component } from 'react'
import './style.scss'
import { addElement } from '../../store/actions/cityList.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import store from '../../store'

import FindCityInput from '../../components/FindCityForm/FindCityInput'
import FindCityButton from '../../components/FindCityForm/FindCityButton'

class SelectedCity extends Component{
  state = {
    inputValue: ''
  }

  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  findCity = () => {
    fetch (
      'https://api.openweathermap.org/data/2.5/weather?q=' + this.state.inputValue + '&units=metric&APPID=be5d52c60924fe6eebc618a0906ee8bb',
      {method: 'GET'})
      .then(res => {
        return res.json()
      })
      .then( res => {
        console.log(res)
        this.props.addElement(res)
        this.setState({
          inputValue: ''
        })
      })
  }

  render() {
    return (
      <label className='selected-city' >
        <FindCityInput
        value = {this.state.inputValue}
        changeInputValue = {this.changeInputValue}
        />
        <FindCityButton
        findCity = {this.findCity}
        />
      </label>
    )
  }
}

const mapStateToProps = (state) =>({})

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addElement: addElement
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectedCity)