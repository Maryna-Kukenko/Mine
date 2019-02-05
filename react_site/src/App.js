import React, { Component } from 'react'
import Layout from './hoc/Layout'
import {Switch, Route} from 'react-router-dom'

import HomePage from './containers/HomePage'
import Catalog from './containers/Catalog'
import DeliveryAndPayment from './containers/DeliveryAndPayment'
import Contacts from './containers/Contacts'
import Reviews from './containers/Reviews'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/catalog' component={Catalog}/>
          <Route path='/delivery_and_payment' component={DeliveryAndPayment}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/reviews' component={Reviews}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
