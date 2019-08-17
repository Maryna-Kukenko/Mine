import React, {Component} from 'react'
import './style.scss'
import {connect} from 'react-redux'

import PostsTittle from "../../components/AllPosts/Title";
import fetchPosts from "../../api/fetchPosts";
import {addElement} from '../../store/actions/posts'
import {addComment} from '../../store/actions/comments'
import PostItem from "../../components/AllPosts/PostsItem";

class Posts extends Component{
  state = {
    postsList: [],
    commentsList:[]
  }

  componentDidMount() {
    fetchPosts().then(res => {
      res.forEach(item => {
        this.props.addElementToStore(item)
        if(item.comments) {
          item.comments.map(item => {
            this.props.addCommentsToStore(item)
          })
        }
      })
      this.setState({
        postsList: res
      })
    })
  }

  render() {
    return (
      <div className='posts'>
        <PostsTittle />
        {
          this.state.postsList.map((item, index) => {
            return (
              <PostItem
                id={item.id}
                key={item.id}
                title={item.title}
                text={item.body}
                author={item.creator}
                addingDate={item.date}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  postsList: state.list
})
const mapActionToProps = (dispatch) => ({
  addElementToStore: (value) => {dispatch(addElement(value))},
  addCommentsToStore: (value) => {dispatch(addComment(value))}
})

export default connect(
  mapStateToProps,
  mapActionToProps
) (Posts)