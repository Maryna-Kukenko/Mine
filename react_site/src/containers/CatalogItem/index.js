import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ItemTitle from '../../components/CatalogItem/ItemTitle'
import ItemSize from '../../components/CatalogItem/ItemSize'
import ItemCloth from '../../components/CatalogItem/ItemCloth'

class CatalogItem extends Component{

  state = {
    size:[],
    cloth:[]
  }

  componentWillMount() {
    data.map((item, index) => {
      return (
        this.props.match.params.way === item.name?
          this.props.match.params.name === item.list.map((item)=>{
            return (
              item.name === this.props.match.params.name? this.setState({
                size:item.size,
                cloth:item.cloth
              }):null
            )
          })
          :null
      )
    })
  }

  render() {
    return (
      <div className='item-details'>
        <ItemTitle title={this.props.match.params.name}/>
        <ItemSize size={this.state.size}/>
        <ItemCloth cloth={this.state.cloth}/>
      </div>
    )
  }
}

export default CatalogItem