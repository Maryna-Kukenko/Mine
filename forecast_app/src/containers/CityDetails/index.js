import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CityDetails extends Component{
  render() {
    if (this.props.cities.length === 0) {
      return (<p> Empty</p>)
    }
    return (
      <div>
        Something is here
        {/*<p> {console.log(this.props.cities.name)}</p>*/}
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  cities: state.cities
})

export default connect(mapStateToProps)(CityDetails)