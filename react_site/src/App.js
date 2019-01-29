import React, { Component } from 'react'
import './App.scss'
import {Switch, Route, Link} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Catalog from './pages/Catalog'
import DeliveryAndPayment from './pages/DeliveryAndPayment'
import Contacts from './pages/Contacts'
import Reviews from './pages/Reviews'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <nav className='navigation'>
            <Link className='link' to='/'>главная</Link>
            <Link className='link' to='/catalog'>каталог</Link>
            <Link className='link' to='/delivery_and_payment'>доставка и оплата</Link>
            <Link className='link' to='/contacts'>контакты</Link>
            <Link className='link' to='/reviews'>отзывы</Link>
          </nav>
        </header>
        <main className='App-main'>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/catalog' component={Catalog}/>
            <Route exact path='/delivery_and_payment' component={DeliveryAndPayment}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/reviews' component={Reviews}/>
          </Switch>
        </main>
        <footer className='App-footer'>

        </footer>

      </div>
    );
  }
}

export default App;
