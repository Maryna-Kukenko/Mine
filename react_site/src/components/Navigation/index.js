import React, {Component} from 'react'
import './style.scss'
import {Link} from "react-router-dom"
import SearchFilter from "./SearchFilter";

const links = [
  {to: '/',  label: 'главная', exact: 'true'},
  {to: '/catalog', label: 'каталог', exact: 'false'},
  {to: '/delivery_and_payment', label: 'доставка и оплата', exact: 'false'},
  {to: '/contacts', label: 'контакты', exact: 'false'},
  {to: '/reviews', label: 'отзывы', exact: 'false'}
]

class Navigation extends Component{
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <Link
          to={link.to}
          exact={link.exact}
          >
            {link.label}
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className='navigation'>
        <ul>
          {this.renderLinks()}
            <SearchFilter />
        </ul>
      </nav>
    )
  }
}

export default Navigation