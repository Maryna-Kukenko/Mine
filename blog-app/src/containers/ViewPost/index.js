import React, {Component} from 'react'
import {connect} from 'react-redux'

import MainPostInfo from '../../components/OnePost/MainPostInfo'
import CommentEmpty from '../../components/OnePost/CommentEmpty'
import CommentFull from '../../components/OnePost/CommentFull'
import {addComment} from '../../store/actions/comments'


class ViewPost extends Component{
  state = {
    inputValue: '',
    newComment: ''
  };

  changeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  addComment = () => {
    this.props.addCommentsToStore({
      text: this.state.inputValue,
      postId: this.props.match.params.postId
    });
    this.setState({
      inputValue:'',
      newComment: this.state.inputValue
    })
  };

  render() {
    const ident = this.props.match.params.postId;
    return <div className='view-post'>
      {
        this.props.postsList.map((item, key) => {
          return <div key={key}>
            {
              ident == item.id ? <MainPostInfo
                title={item.title}
                text={item.body}
                author={item.creator}
                addingDate={item.date}/> : null
            }
          </div>
        })
      }
      <CommentEmpty
        value={this.state.inputValue}
        changedInputValue={this.changeInputValue}
        onClick={this.addComment}
      />
      <CommentFull
        text={this.state.newComment}/>
      {
        this.props.comments.map((item, key) => {
          return <div key={key}>
            {
              ident == item.postId ? <CommentFull
                text={item.body}
              /> : null
            }
          </div>
        })}
    </div>
  }
}

const mapStateToProps = (state) => ({
  postsList: state.list,
  comments:state.comments
});
const mapActionToProps = (dispatch) => ({
  addCommentsToStore: (value) => {dispatch(addComment(value))},
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(ViewPost)