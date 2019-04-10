import React from 'react'
import './style.scss'

export default () => {
  return (
    <form className='upload-form'>
      <input type='file'/>
      <input type="submit" value="ADD file" />
    </form>
  )
}