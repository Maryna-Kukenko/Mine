import React from 'react'
import './style.scss'

export default (props) => {
  return (
    <li className='content-item'>
      <a className='content-item-name' href='?'>{props.title}</a>
      <button
        type='button'
        className='delete-item'
        onClick = {() => props.deleteFilm(props.id)}
      > </button>
    </li>
  )
}