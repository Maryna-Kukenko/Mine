import React from 'react';

const MainPostInfo = props => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{props.title}</h2>
      <p>{props.text}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{props.author}</span>
        <span>{props.addingDate}</span>
      </div>
    </div>
  );
};

export default MainPostInfo;
