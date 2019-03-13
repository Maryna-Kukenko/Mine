import React, {Component} from 'react'
import './style.scss'

class ItemClothVariations extends Component {
  state = {
    bigPhoto: {
      opacity: 0,
      position: 'absolute',
      top: '-330px',
      width: '330px',
      height: '330px',
      background: `url(${this.props.img}) no-repeat`,
      backgroundSize: 'cover',
      boxShadow: '1px 1px 7px 1px grey'
    }
  }

  showBigPhoto = ()=> {
    this.setState(prevState=>{
      return{
        bigPhoto:{
        ...prevState.bigPhoto,
        opacity: '1'
        }
      }
    })
  }

  hiddenBigPhoto = ()=>{
    this.setState(prevState=>{
      return{
        bigPhoto:{
          ...prevState.bigPhoto,
          opacity: 0
        }
      }
    })
  }

  render(){
    const labelStyle = {
      position: 'relative',
      background: `url(${this.props.img}) no-repeat`,
      width: '100px',
      height: '100px',
      backgroundSize: 'cover',
      marginRight: '10px',
      boxShadow: '1px 1px 7px 1px grey'
    }

    return (
      <>
        <span style={this.state.bigPhoto}> </span>
      <label
        style={labelStyle}
        onMouseOver={this.showBigPhoto}
        onMouseOut={this.hiddenBigPhoto}
      >
        <input
          type='radio'
          name='kindOfCloth'
          value={this.props.price}
          price={this.props.img}
          className='checkedCloth'
          onClick={this.props.showPrice}
        />
      </label>
      </>
    )
  }
}

export default ItemClothVariations