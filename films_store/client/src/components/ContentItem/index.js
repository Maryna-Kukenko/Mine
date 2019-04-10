import React, {Component} from 'react'
import './style.scss'

class ContentItem extends Component{
  state = {
    detailsStyle: {
      display: 'none',
      width: '200px',
      height: '100px',
      fontSize: '14px',
      margin: '0 auto'
    }
  };

  makeDetailsInvisible = () => {
    this.setState(prevState=>{
      return{
        detailsStyle:{
          ...prevState.detailsStyle,
          display: 'none'
        }
      }
    })
  };

  makeDetailsVisible = () => {
    this.setState(prevState=>{
      return{
        detailsStyle:{
          ...prevState.detailsStyle,
          display: 'block'
        }
      }
    })
  };
  render (){
    const style = this.state.detailsStyle;
    return (
      <li className='content-item'>
        <a
          className='content-item-name'
          href='?'
          onMouseOver={this.makeDetailsVisible}
          onMouseOut={this.makeDetailsInvisible}
        >{this.props.title}</a>
        <button
          type='button'
          className='delete-item'
          onClick = {() => this.props.deleteFilm(this.props.id)}
        > </button>
        <div style={style}>
          <p className='item-details'><span>Release year: </span>{this.props.release_year}</p>
          <p className='item-details'><span>Format: </span>{this.props.format}</p>
          <p className='item-details'><span>Stars: </span>{this.props.stars.join(', ')}</p>
        </div>
      </li>
    )
  }
}

export default ContentItem
