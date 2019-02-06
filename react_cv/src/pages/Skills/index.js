import React, { Component } from 'react'

import './style.css'


class Skills extends Component{
  render () {
    return (
      <div>
        <h1 className='skills-title'>Skills</h1>
        <div className='skills-table'>
          <div className='skills-stars'>
            <p className='skill'>HTML</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Css, SASS</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Git</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Node JS, npm</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Bootstrap</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>JS</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>JQuery</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>ES6</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>React</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>Testing</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>HTML5</p>
          </div>
          <div className='skills-stars'>
            <p className='skill'>English</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills