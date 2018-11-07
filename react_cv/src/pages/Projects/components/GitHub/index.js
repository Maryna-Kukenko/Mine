import React, {Component} from 'react'

import '../style.css'

class GitHub extends Component{
  render(){
    return (
      <div className='projects-git'>
        <h2 className='projects-place'>GitHub</h2>
        <p className='projects-descr'>
          In this Git-repository are my works with JS and React. To look them just push
          <a href={'https://github.com/Maryna-Kukenko/Mine'} className='projects-here'>here.</a>
        </p>
      </div>
    )
  }
}

export default GitHub