import React, {Component} from 'react'
import './style.scss'
import {connect} from "react-redux";
import PreviousCity from '../../components/PreviousCity'

class PreviousCities extends Component{
  render() {

    return (
      <ul className='previous-cities'>
        {
          this.props.value.map((item, index) => {
            return (
              <PreviousCity
                name={item}
                key={index}
              />
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) =>({
  cities: state.cities
});

export default connect(mapStateToProps)(PreviousCities)

