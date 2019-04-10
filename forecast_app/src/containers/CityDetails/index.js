import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CityDetails extends Component{
  render() {
    if (this.props.cities.length === 0) {
      return (<p> Empty</p>)
    }
    const icon = `https://openweathermap.org/img/w/${this.props.cities[0].weather[0].icon}.png`
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes()
    return (
      <div>
        <img src={icon} alt='weather_sign'></img>
        <div>{this.props.cities[0].main.temp}C</div>
        <div>{time}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  cities: state.cities
})

export default connect(mapStateToProps)(CityDetails)