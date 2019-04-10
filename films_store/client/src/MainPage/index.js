import React, {Component} from 'react'
import './style.scss'

import SideBar from '../containers/SideBar/inedex'
import Content from '../containers/Content'

class MainPage extends Component {
  state = {
    filmsList: []
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

  componentWillMount() {
    this.showFilms()
  }

  addFilmToStore = (e) => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsText(files[0]);

    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      if (Array.isArray(data)) {
        return (
          data.map(item => {
            const title = item.title;
            const release_year = item.release_year;
            const stars = item.stars;
            const format = item.format;

            const formData = {
              title: title,
              release_year: release_year,
              stars: stars,
              format: format
            };

            return fetch('/api/items', {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => console.log(res.json()))
              .catch(err => console.log(err))
          })
        )
      } else {
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

        return (
          fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res => console.log(res.json()))
            .catch(err=>console.log(err))
        )}
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
        addFile = {this.addFilmToStore}
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