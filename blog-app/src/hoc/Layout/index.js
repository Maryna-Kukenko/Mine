import React, { Component } from 'react'
import './style.scss'

class Layout extends Component {
  render() {
    const All = this.props
    return (
      <div className="layout">
        <main className="main">{All.children}</main>
      </div>
    )
  }
}

export default Layout
