import React, {Component} from 'react'

import './style.css'
import School from './components/School'
import University from './components/University'
import Courses from './components/Courses'

class Education extends Component {
  render() {
    return (
      <div className='main-education'>
        <h1 className='education-title'>Education</h1>
        <School/>
        <University/>
        <Courses/>
      </div>
    )
  }
}

export default Education