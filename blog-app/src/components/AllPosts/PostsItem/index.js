import React, { Component } from 'react'
import './style.scss'
import { withRouter } from 'react-router-dom'

class PostItem extends Component {
  render() {
    return (
      <div
        className="post-item"
        onClick={() =>
          this.props.history.push(`/View_Post/posts/${this.props.id}`)
        }
        onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
      >
        <h3 className="item-title">{this.props.title}</h3>
        <p className="item-text">{this.props.text}</p>
        <div className="item-details">
          <span className="item-author">{this.props.author}</span>
          <span className="item-date">{this.props.addingDate}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(PostItem)
