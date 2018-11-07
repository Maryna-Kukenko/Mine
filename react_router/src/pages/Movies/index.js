import React, {Component} from 'react'

import fetchMovies from '../../api/fetchMovies'
import './style.css'


class Movies extends Component {
  state = {
    listMovies: [],
    poster: `https://image.tmdb.org/t/p/original`
  }

  componentDidMount() {
    fetchMovies().then(res => {
        console.log(res)
        this.setState({
          listMovies: res.results
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h2 className='movie_title'> MOVIES</h2>
        <div className='all_movies'>
          {
            this.state.listMovies.map((item, index) => (
            <div
              key={index}
              className='each_movie'
            >
              <img className='movie_img' src={`${this.state.poster}${item['poster_path']}`}/>
              {item.title}
            </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Movies