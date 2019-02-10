import React, { Component } from 'react'
import Layout from './hoc/Layout'
import {Switch, Route} from 'react-router-dom'

import HomePage from './containers/HomePage'
import Catalog from './containers/Catalog'
import DeliveryAndPayment from './containers/DeliveryAndPayment'
import Contacts from './containers/Contacts'
import Reviews from './containers/Reviews'
import CategoryItemList from './components/CategotyItemList'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/catalog/:way' exact component={CategoryItemList}/>
          <Route path='/catalog' component={Catalog}/>
          <Route path='/delivery_and_payment' component={DeliveryAndPayment}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/reviews' component={Reviews}/>
          <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}> 404 not found </h1>}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
