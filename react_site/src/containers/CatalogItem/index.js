import React, {Component} from 'react'
import './style.scss'
import data from './../../api/catalog'
import ItemTitle from '../../components/CatalogItem/ItemTitle'
import ItemSize from '../../components/CatalogItem/ItemSize'
import ItemCloth from '../../components/CatalogItem/ItemCloth'
import ItemTotalPrice from '../../components/CatalogItem/ItemTotalPrice'
import AddToWishListButton from '../../components/CatalogItem/AddToWishListButton'
import AddToBasketButton from '../../components/CatalogItem/AddToBasketButton'
import ItemPhotos from '../../components/CatalogItem/ItemPhotos'

class CatalogItem extends Component {

  state = {
    size: [],
    cloth: [],
    photos:[],
    sizePrice: 0,
    clothPrice: 0,
    totalPrice: 0,
    wishList:{
      wishListBackground: '/images/wish-list.jpg',
      toggle: false
    },
    basket: {
      basketBackground: '/images/add-to-basket.png',
      basketColor: 'lightgray',
      // toggle: false
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
                cloth: item.cloth,
                photos: item.photos
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
   this.state.wishList.toggle === false?
      this.setState( {
        wishList:{
          wishListBackground: '/images/full_heart.jpg',
          toggle: true
        }
      }):
      this.setState({
        wishList:{
          wishListBackground: '/images/wish-list.jpg',
          toggle: false
        }
      })
    }

  changeBgColorToDark = () => {
    this.setState(prevState => {
      return {
        basket: {
          ...prevState.basket,
          basketColor: 'gray'
        }
      }
    })
  }

  changeBgColorToLight = () => {
    this.setState(prevState => {
      return {
        basket: {
          ...prevState.basket,
          basketColor: 'lightgray'
        }
      }
    })
  }
  render(){
    const style = {
      background: `url(${this.state.basket.basketBackground}) 0% 0% / contain no-repeat ${this.state.basket.basketColor}`,
      transition:'backgroundColor 0.2s'
    }
    return (
      <div className='item-details'>
        <ItemTitle title={this.props.match.params.name}/>
        <ItemTotalPrice
          sizePrice={this.state.sizePrice}
          clothPrice={this.state.clothPrice}
        />
        <ItemSize
          size={this.state.size}
          price={this.state.sizePrice}
          updateSizePrice={this.updateSizePrice}
        />
        <ItemPhotos
          photos={this.state.photos}
        />
        <AddToWishListButton
          addToWishList={this.addToWishList}
          bgPath={this.state.wishList.wishListBackground}
          toggle = {this.state.wishList.toggle}
        />
        <AddToBasketButton
          // addToBasket={this.addToBasket}
          // bgPath={this.state.basket.basketBackground}
          darkColor={this.changeBgColorToDark}
          lightColor={this.changeBgColorToLight}
          style={style}
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