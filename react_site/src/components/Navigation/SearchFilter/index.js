import React, {Component} from 'react'
import './style.scss'

class SearchFilter extends Component{
  render() {
    return (
      <>
        <input
          type='search'
          placeholder='Search'
        />
      </>
    )

  }
}

export default SearchFilter