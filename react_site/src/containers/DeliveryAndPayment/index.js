import React, {Component} from 'react'
import './style.scss'
import Payment from '../../components/Payment'
import Delivery from '../../components/Delivery'

class DeliveryAndPayment extends Component{
  render(){
    return (
      <div className='delivery-payment'>
       <Payment />
       <Delivery />
      </div>
    )
  }
}

export default DeliveryAndPayment