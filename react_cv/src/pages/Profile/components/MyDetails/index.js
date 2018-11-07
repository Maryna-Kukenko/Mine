import React, {Component} from 'react'

import './style.css'

class MyDetails extends Component {
  render() {
    return (
      <div className='details'>
        <ul className='details-title'>
          <li className='details-info'> Some details</li>
          <li className='details-info'><b>Name:</b> Maryna Kukenko</li>
          <li className='details-info'><b>Age:</b> 25</li>
          <li className='details-info'><b>Location:</b> Ukraine, Kyiv</li>
        </ul>
        <ul className='contact-title'>
          <li className='contact-info'> How to contact me</li>
          <li className='contact-info'><b>My phone:</b> +38 (063) 023 70 17</li>
          <li className='contact-info'><b>My email:</b> tooshcanchik@gmail.com</li>
        </ul>
      </div>
    )
  }
}

export default MyDetails