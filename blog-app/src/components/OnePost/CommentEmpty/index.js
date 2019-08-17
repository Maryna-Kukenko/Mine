import React from 'react';
import './style.scss';

const CommentEmpty = props => {
  return (
    <div>
      <p className='comment-title'>Comments</p>
      <input
        value={props.value}
        onChange={props.changedInputValue}
        className='comment-form'
        name='comment'
        type='text'
        placeholder='Enter your comment about this post'
      />
      <button
        className='comment-add'
        onClick={e => props.onClick(e.target.value)}
      >
        Add new
      </button>
    </div>
  );
};

export default CommentEmpty;
