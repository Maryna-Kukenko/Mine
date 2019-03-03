import React, {Component} from 'react'

class ItemClothVariations extends Component {

  state = {
    input: {
      opacity: 0,
      position: 'absolute',
      top: '-170px',
      width: '150px',
      height: '150px',
      background: `url(${this.props.img}) no-repeat`,
      backgroundSize: 'cover'
    }
  }

  showBigPhoto = ()=> {
    this.setState(prevState=>{
      return{
        input:{
        ...prevState.input,
        opacity: '1'
        }
      }
    })
  }

  hiddenBigPhoto = ()=>{
    this.setState(prevState=>{
      return{
        input:{
          ...prevState.input,
          opacity: 0
        }
      }
    })
  }

  render(){
    const classes = {
      position: 'relative',
      background: `url(${this.props.img}) no-repeat`,
      width: '50px',
      height: '50px',
      backgroundSize: 'cover',
      marginRight: '10px'
    }

    return (
      <label
        style={classes}
        onMouseOver={this.showBigPhoto}
        onMouseOut={this.hiddenBigPhoto}
      >
        <input
          type='radio'
          name='kindOfCloth'
          value={this.props.img}
        /><span style={this.state.input}> </span>
      </label>
    )
  }
}

export default ItemClothVariations