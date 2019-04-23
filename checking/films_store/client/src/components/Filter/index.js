import React from 'react'
import './style.scss'

export default (props) => {
  return (
    <form className='filter'>
      <input
        className='filter-info'
        type='search'
        placeholder='Search'
        onChange={props.changeFilterValue}
      />
      <input
        value=' '
        className='filter-send'
        type='submit'
        onClick={props.showFilms}
      />
    </form>
  )
}