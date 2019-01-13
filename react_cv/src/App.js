import React, {Component} from 'react';
import './App.css';
import Photo from './smallPhoto.JPG';
import {Switch, Route, Link} from 'react-router-dom';

import Profile from './pages/Profile'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header, total">
          <img className='my-photo' src={Photo} alt='my_photo'/>
        </header>
        <nav className='App-body, total'>
          <Link className='each-link' to='/'>Profile</Link>
          <Link className='each-link' to='/education'>Education</Link>
          <Link className='each-link' to='/experience'>Experience</Link>
          <Link className='each-link' to='/projects'>Works</Link>
          <Link className='each-link' to='/skills'>Skills</Link>
        </nav>
        <footer className='App-footer'>
          <a className='social-site' href='https://www.facebook.com/marina.perevazko'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKUwfIdjd2o9IqN5i1RUd0QIFyNCuKWmwBkase4Sl8KAJ7l8WRA'
              width='30px' height='30px'/>
          </a>
          <a className='social-site' href='https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D0%BA%D1%83%D0%BA%D0%B5%D0%BD%D0%BA%D0%BE-326522166/'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFebofncokLQOz6LEkclDFG1hrEA4_q2Y5nsHCVxFKgztRYaP'
              width='30px' height='30px'/>
          </a>
          <a className='social-site' href='https://github.com/Maryna-Kukenko'>
            <img
              src='https://www.adweek.com/wp-content/uploads/sites/8/2014/04/github.png'
              width='35px' height='35px'/>
          </a>
        </footer>
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={Profile}/>
            <Route path='/education' component={Education}/>
            <Route path='/experience' component={Experience}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/skills' component={Skills}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
