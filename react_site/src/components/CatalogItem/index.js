import React, {Component} from 'react'

class CatalogItem extends Component{
  render() {
    return (
      <div>
        <h1>HI, it's category {this.props.match.params.way}</h1>
      </div>
    )
  }
}

export default CatalogItem