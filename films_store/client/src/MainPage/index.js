import React, {Component} from 'react'
import './style.scss'

import SideBar from '../containers/SideBar'
import Content from '../containers/Content'

class MainPage extends Component {
  state = {
    filmsList: [],
    filterValue:''
  };

  showFilms = () => {
    fetch('/api/items')
      .then(res => res.json())
      .then(
        res => this.setState({
          filmsList: res
        })
      )
      .catch(err => err)
  };

  changeFilterValue = (e) => {
    this.setState({
      filterValue: e.target.value
    })
  };

  showFilteredFilms = (e) => {
    e.preventDefault();

    fetch(`/api/items/search/` + this.state.filterValue)
      .then(res => res.json())
      .then(
        res => this.setState({
          filmsList: res
        })
      )
      .catch(err => console.log('film not found ' + err))
  };

  componentWillMount() {
    this.showFilms()
  }

  createStoreItem = (data) => {
    const title = data.title;
    const release_year = data.release_year;
    const stars = data.stars;
    const format = data.format;

    const formData = {
      title: title,
      release_year: release_year,
      stars: stars,
      format: format
    };

    if(!this.state.filmsList.some(item => {
      return item.title === formData.title
    })){
       return fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => console.log(res.json()))
        .catch(err => console.log(err));
    } else {
      return alert('Film ' + formData.title + ' already here')
    }
  };

  addFilmToStore = (e) => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsText(files[0]);

    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);

      if (Array.isArray(data)) {
        return (
          data.map(item => this.createStoreItem(item))
        )
      } else {
        this.createStoreItem(data);
      }
    }
  };

  deleteFilmFromStore = (film) => {
    fetch(`/api/items/${film}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Number'
      }
    })
      .then(res => console.log(res.json()))
      .catch(err => console.log(err));
    setTimeout( () =>
      document.location.reload(), 200);
  };

  render() {
    return (
      <div className='main-page'>
        <SideBar
          value = {this.state.filterValue}
          changeFilterValue ={this.changeFilterValue}
          addFile = {this.addFilmToStore}
          showFilms = {this.showFilteredFilms}
        />
        <Content
          value = {this.state.filmsList}
          deleteFilm = {this.deleteFilmFromStore}
        />
      </div>
    )
  }
}

export default MainPage