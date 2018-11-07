import React, {Component} from 'react'

import fetchArticles from '../../api/fetchArticles'
import './style.css'

class Articles extends Component {
  state = {
    listArticles: []
  }

  componentDidMount() {
    fetchArticles().then(res => {
        console.log(res)
        this.setState({
          listArticles: res.results
        })
      }
    )
  }

  render() {
    return (
      <div className='all'>
        <h2 className='article_title'>Articles page</h2>
        <div className='all_articles'>
          {
            this.state.listArticles.map((item, index) => (
              <div
                key={index}
                className='each_article'
              >
                <img src={item['title_images']['400']} className='article_img'/>
                {item.title}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Articles