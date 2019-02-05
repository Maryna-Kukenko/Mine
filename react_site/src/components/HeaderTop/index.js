import React, {Component} from "react";
import './style.scss'

import Logotype from './Logotype'
import Slogan from './Slogan'
import Basket from './Basket'
import WishList from './WishList'


class HeaderTop extends Component{
  render() {
    return (
      <div className='header_top'>
        <Logotype />
        <Slogan />
        <Basket />
        <WishList />
      </div>
    )
  }
}

export default HeaderTop