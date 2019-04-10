import React from 'react'
import './style.scss'

export default (props) => {
  return (
    <form
      className='filter'
    >
      <input
        // value={props.value}
        className='filter-info'
        type='search'
        placeholder='Search'
        onChange={props.changeFilterValue}
      />
      <input
        value=' '
        className='filter-send'
        type='submit'
        onClick={props.showFilms}
      />
    </form>
  )
}

// class Filter extends Component{
//   state = {
//     label:''
//   };
//
//   getInputValue = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       label: e.target.value
//    })
//   };
//
//   render() {
//     return(
//       <form
//       className='filter'
//     >
//       <input
//         className='filter-info'
//         type='search'
//         placeholder='Search'
//         onChange={(e) => this.getInputValue(e)}
//       />
//       <input
//         value=' '
//         className='filter-send'
//         type='submit'
//         onClick={()=> this.props.showFilms(this.state.label)}
//       />
//     </form>
//     )
//   }
// }
//
// export default Filter