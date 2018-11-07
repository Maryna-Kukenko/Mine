import React, { Component } from 'react'

import './style.css'
import Star from './components/Star'
import HalfStar from './components/HalfStar'
import EmptyStar from './components/EmptyStar'

class Skills extends Component{
  render () {
    return (
      <div>
        <h1 className='skills-title'>Skills</h1>
        <div className='skills-table'>
          <div className='skills-stars'>
            <p className='skill'>HTML</p>
            <Star/><Star/><Star/><Star/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Css, SASS</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Git</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Node JS, npm</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Bootstrap</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>JS</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>JQuery</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>ES6</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>React</p>
            <Star/><Star/><Star/><HalfStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Testing</p>
            <Star/><Star/><EmptyStar/><EmptyStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>HTML5</p>
            <Star/><Star/><EmptyStar/><EmptyStar/><EmptyStar/>
          </div>
          <div className='skills-stars'>
            <p className='skill'>English</p>
            <Star/><Star/><Star/><Star/><EmptyStar/>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills