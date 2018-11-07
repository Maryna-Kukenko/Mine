import React, {Component} from 'react'

import './../style.css'

class Courses extends Component {
  render() {
    return (
      <div className='education-info'>
        <h2 className='education-place'> Deutsche IT Schule</h2>
        <div>
          <p className='specialization'>
            <b>Specialization:</b> Front-End Developer
          </p>
          <p className='study-time'>
            <b>Period of study:</b> July 2018- Now
          </p>
        </div>
      </div>
    )
  }
}

export default Courses