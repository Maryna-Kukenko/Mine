import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Articles from './pages/Articles'
import Movies from "./pages/Movies"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className='link_color' to='/'>HOME PAGE</Link>
          <Link className='link_color' to='/articles'>ARTICLES</Link>
          <Link className='link_color' to='/movies'>MOVIES</Link>
        </header>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/articles' component={Articles}/>
          <Route path='/movies' component={Movies}/>
        </Switch>
      </div>
    );
  }
}

export default App;
