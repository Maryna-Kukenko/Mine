import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CityDetails extends Component{

  // findPicture = () => {
  //   const iconNumb = this.props.cities.filter( item => {
  //      if (item.name === this.props.value){
  //     return item.weather[0].icon
  //   }
  //   })
  // };


  render() {
    if (this.props.cities.length === 0) {
      return (<p> </p>)
    }
    // const x = this.props.cities.filter(item => item.name === this.props.value);

    // const icon = `https://openweathermap.org/img/w/${this.props.value}.png`;
    return (
      <div>
        {

        }
        <img src={`https://openweathermap.org/img/w/${this.props.icon}.png`} alt='weather_sign'></img>
        <div>{this.props.temp}C</div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  cities: state.cities
});

export default connect(mapStateToProps)(CityDetails)