import React, {Component} from 'react'

import './../style.css'

class School extends Component {
  render() {
    return (
      <div className='education-info'>
        <h2 className='education-place'> School</h2>
        <div>
          <p className='specialization'>
            <b>Specialization:</b> Mathematics
          </p>
          <p className='study-time'>
            <b>Period of study:</b> September 2000 – June 2010
          </p>
        </div>
      </div>
    )
  }
}

export default School