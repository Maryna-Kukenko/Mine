import React, {Component} from  'react'
import './style.scss'
import Header from './../../components/Header'
import SelectedCity from '../../containers/SelectedCity'
import CityDetails from '../../containers/CityDetails'

class Layout extends Component{
  render() {
    return (
      <div className='layout'>
        <Header />
        <main className='main'>
          <SelectedCity />
          <CityDetails />
          {/*{this.props.children}*/}
        </main>
      </div>
    )
  }
}

export default Layout