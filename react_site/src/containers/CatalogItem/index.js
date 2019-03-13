import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ItemTitle from '../../components/CatalogItem/ItemTitle'
import ItemSize from '../../components/CatalogItem/ItemSize'
import ItemCloth from '../../components/CatalogItem/ItemCloth'
import ItemTotalPrice from '../../components/CatalogItem/ItemTotalPrice'
import AddToWishListButton from '../../components/CatalogItem/AddToWishListButton'
import AddToBasketButton from '../../components/CatalogItem/AddToBasketButton'
// import fullHeard from './../../img/full_heart.jpg'
// import emptyHeard from './../../img/full_heart.jpg'

class CatalogItem extends Component {

  state = {
    size: [],
    cloth: [],
    sizePrice: 0,
    clothPrice: 0,
    totalPrice: 0,
    basket:{
      basketBackground: './../../img/full_heart.jpg',
      toggle: false
    }
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

  addToWishList = () =>{
    if (this.state.basket.toggle === false){
      this.setState({
        basket:{
          basketBackground: './../../img/full_heart.jpg',
          toggle: true
        }
      })
    }else{
      this.setState({
        basket:{
          basketBackground: './../../img/full_heart.jpg',
          toggle: false
        }
      })
    }

  }

  render(){
    console.log('render size price ' + this.state.sizePrice)
    console.log('render cloth price: ' + this.state.clothPrice)
    console.log('render total price: ' + this.state.totalPrice)
    console.log(this.state.basket.toggle)
    return (
      <div className='item-details'>
        <ItemTitle title={this.props.match.params.name}/>
        <ItemTotalPrice
          sizePrice={this.state.sizePrice}
          clothPrice={this.state.clothPrice}
        />
        <AddToWishListButton
          addToWishList={this.addToWishList}
          bgPath={this.state.basket.basketBackground}
          toggle = {this.state.basket.toggle}
        />
        <AddToBasketButton />
        <ItemSize
          size={this.state.size}
          price={this.state.sizePrice}
          updateSizePrice={this.updateSizePrice}
        />
        <ItemCloth
          cloth={this.state.cloth}
          price={this.state.clothPrice}
          updateClothPrice={this.updateClothPrice}
        />
      </div>
    )
  }
}

export default CatalogItem