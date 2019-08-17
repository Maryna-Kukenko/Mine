import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';

const PostItem = props => {
  return (
    <div
      className='post-item'
      onClick={() => props.history.push(`/View_Post/posts/${props.id}`)}
    >
      <h3 className='item-title'>{props.title}</h3>
      <p className='item-text'>{props.text}</p>
      <div className='item-details'>
        <span className='item-author'>{props.author}</span>
        <span className='item-date'>{props.addingDate}</span>
      </div>
    </div>
  );
};

export default withRouter(PostItem);
