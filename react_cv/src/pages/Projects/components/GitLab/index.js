import React, {Component} from 'react'

import '../style.css'

class GitLab extends Component{
  render(){
    return (
      <div className='projects-git'>
        <h2 className='projects-place'>GitLab</h2>
        <p className='projects-descr'>
          In this Git-repository are my first works with HTML, Css, SCSS, Bootstrap, JS. To look them just push
          <a href={'http://gitlab.php-academy.org/Maryna.Kykenko/Innovations'} className='projects-here'>here.</a>
        </p>
      </div>
    )
  }
}

export default GitLab