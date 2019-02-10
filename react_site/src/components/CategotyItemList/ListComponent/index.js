import React from 'react'
import './style.scss'

const ListComponent = (props) => {
  return (
    <>
      {
        props.list.map((item, index) => {
          return (
            <div
              className='list-component'
              key={index}
            >
              <img />
              <h3>{item}</h3>
            </div>
          )
        })
      }
    </>
  )
}

export default ListComponent