import React, {Component} from 'react'
import './style.scss'
import {connect} from "react-redux";
import PreviousCity from '../../components/PreviousCity'

class PreviousCities extends Component{
  render() {
    console.log(this.props.cities)
    return (
      <ul className='previous-cities'>
        {
          this.props.cities.map((item, index) => {
            if (this.props.cities.length <= 5){
              return (
                <PreviousCity
                  name = {item.name}
                  key = {index}
                />
              )
            } else {

            }

          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) =>({
  cities: state.cities
})

export default connect(mapStateToProps)(PreviousCities)

