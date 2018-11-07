import React, {Component} from 'react'

import './style.css'

import IT from './components/IT'
import ServiceIndustry from './components/ServiceIndustry'

class Experience extends Component {
  render() {
    return (
      <div className='main-experience'>
        <h1 className='experience-title'>Experience</h1>
        <IT/>
        <ServiceIndustry/>
      </div>
    )
  }
}

export default Experience