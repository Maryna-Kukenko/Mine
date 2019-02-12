import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ItemTitle from '../../components/CatalogItem/ItemTitle'
import ItemSize from '../../components/CatalogItem/ItemSize'

class CatalogItem extends Component{

  state = {
    size:[]
  }

  componentWillMount() {
    data.map((item, index) => {
      return (
        this.props.match.params.way === item.name?
          this.props.match.params.name === item.list.map((item)=>{
            return (
              item.name === this.props.match.params.name? this.setState({
                size:item.size
              }):null
            )
          })
          :null
      )
    })
  }

  render() {
    return (
      <div >
        <ItemTitle title={this.props.match.params.name}/>
        <ItemSize size={this.state.size}/>
      </div>
    )
  }
}

export default CatalogItem