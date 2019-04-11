import React from 'react'
import './style.scss'

export default (props) => {
  return (
   <form className='upload-form'>
      <input
        type='file'
        accept='.json'
        onChange={(e) =>props.addFile(e)}
        multiple
      />
      <input
        type='submit'
        value='ADD FILE'
      />
    </form>
  )
}