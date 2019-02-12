import React from 'react'
import './style.scss'
import {withRouter} from "react-router-dom"

const ListComponent = (props) => {
  return (
    <>
      {
        props.list.map((item, index) => {
          return (
            <div
              className='list-component'
              key={index}
              onClick={() => props.history.push(`/catalog/${props.match.params.way}/` + item.name.toLowerCase())}
            >
              <img alt='goods_photo'/>
              <h3>{item.name}</h3>
            </div>
          )
        })
      }
    </>
  )
}

export default withRouter(ListComponent)