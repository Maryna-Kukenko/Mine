import React, { Component } from 'react'

import './style.css'
import GitLab from "./components/GitLab";
import GitHub from "./components/GitHub";

class Projects extends Component{
  render () {
    return (
      <div>
        <h1 className='projects-title'>Works</h1>
        <GitLab/>
        <GitHub/>
      </div>
    )
  }
}

export default Projects