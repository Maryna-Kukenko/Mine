import React, {Component} from  'react'
import './style.scss'
import Header from './../../components/Header'
import SelectedCity from '../../containers/SelectedCity'
import CityDetails from '../../containers/CityDetails'
import PreviousCities from '../../containers/PreviousCities'
import {connect} from "react-redux";
import {addElement} from "../../store/actions/cityList";
import { bindActionCreators } from 'redux'

class Layout extends Component{
  state = {
    cityName: '',
    previousCities: [],
    icon: '',
    temp: ''
  };

  changeCityName = (e) => {
    this.setState({
      cityName: e.target.value
    })
  };

  showTheWeather = () => {
    if(!this.props.cities.some(item => item.name.toLowerCase() === this.state.cityName.toLowerCase())){
      fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&units=metric&APPID=be5d52c60924fe6eebc618a0906ee8bb')
        .then(res => {
          if (res.ok){
            return res.json()
          }
          throw Error ('You made mistake in the city name')
        })
        .then( res => {
          console.log(res);

          this.props.addElement(res);

          this.setState(prevState => ({
            cityName: '',
            previousCities: [
              this.state.cityName,
              ...prevState.previousCities
            ],
            temp: this.props.cities[0].main.temp,
            icon: this.props.cities[0].weather[0].icon
          }))
        })
        .catch(err => alert(err))
    } else {
      this.state.previousCities.map( item => {
        if (item.toLowerCase() === this.state.cityName.toLowerCase()) {
          const position = this.state.previousCities.indexOf(item);
          this.state.previousCities.splice(position, 1);
        }
      });

      this.props.cities.map( item => {
        if (item.name.toLowerCase() === this.state.cityName.toLowerCase()) {
          return this.setState(prevState => ({
            cityName: '',
            previousCities: [
              this.state.cityName,
              ...prevState.previousCities
            ],
            icon: item.weather[0].icon,
            temp: item.main.temp
          }))
        }
      })
    }
  };
  render() {
    this.state.previousCities.length = 5;
    return (
      <div className='layout'>
        <Header />
        <main className='main'>
          <SelectedCity
          value = {this.state.cityName}
          changeInputValue = {this.changeCityName}
          findCity = {this.showTheWeather}
          />
          <PreviousCities
          value = {this.state.previousCities}
          />
          <CityDetails
          temp = {this.state.temp}
          icon = {this.state.icon}
          />
          {/*{this.props.children}*/}
        </main>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  cities: state.cities
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addElement: addElement
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Layout)