import React, {Component} from 'react'

import './../style.css'

class University extends Component {
  render() {
    return (
      <div className='education-info'>
        <h2 className='education-place'> University</h2>
        <div>
          <p className='specialization'>
            <b>Specialization:</b> Hotel and restaurant business
          </p>
          <p className='study-time'>
            <b>Period of study:</b> September 2010 – June 2015
          </p>
        </div>
      </div>
    )
  }
}

export default University