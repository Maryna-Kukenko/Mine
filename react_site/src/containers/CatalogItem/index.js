import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ItemTitle from '../../components/CatalogItem/ItemTitle'
import ItemSize from '../../components/CatalogItem/ItemSize'
import ItemCloth from '../../components/CatalogItem/ItemCloth'
import ItemTotalPrice from '../../components/CatalogItem/ItemTotalPrice'

class CatalogItem extends Component {

  state = {
    size: [],
    cloth: [],
    sizePrice: 0,
    clothPrice: 0,
    totalPrice: 0
  }

  componentWillMount() {
    data.map((item, index) => {
      return (
        this.props.match.params.way === item.name ?
          this.props.match.params.name === item.list.map((item) => {
            return (
              item.name === this.props.match.params.name ? this.setState({
                size: item.size,
                cloth: item.cloth
              }) : null
            )
          })
          : null
      )
    })
  }

  updateSizePrice = (price) => {
    this.setState({
      sizePrice: price
    })
  }

  updateClothPrice = (price) => {
    this.setState({
      clothPrice: price
    })
  }


  updateTotalPrice = () => {
    console.log( 'size v total' + this.state.sizePrice)
    this.setState({
      totalPrice: this.state.sizePrice
    })
   }

  // componentDidUpdate(previousProps) {
  //   if (previousProps.sizePrice !== this.state.sizePrice) {
  //     console.log('componentDidUpdate ' + this.state.sizePrice)
  //     this.updateTotalPrice()
  //   } else {
  //     console.log('this.props.size = ' + this.state.sizePrice)
  //   }
  // }



  render(){

    console.log('render size price ' + this.state.sizePrice)
    console.log('render cloth price: ' + this.state.clothPrice)
    console.log('render total price: ' + this.state.totalPrice)
    return (
      <div className='item-details'>
        <ItemTitle title={this.props.match.params.name}/>
        <ItemSize
          size={this.state.size}
          price={this.state.sizePrice}
          updateSizePrice={this.updateSizePrice}
          // updateTotalPrice={this.updateTotalPrice}
        />
        <ItemCloth
          cloth={this.state.cloth}
          price={this.state.clothPrice}
          updateClothPrice={this.updateClothPrice}
          // updateTotalPrice={this.updateTotalPrice}
        />
        <ItemTotalPrice
          price={this.state.totalPrice}
          // updateTotalPrice ={this.updateTotalPrice}
        />
      </div>
    )
  }
}

export default CatalogItem