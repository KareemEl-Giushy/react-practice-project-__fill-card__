import React from 'react';
import './info.css';
const user = (props) =>{
  return (
    <div className='card'>
      <h2 className='l-capital'>{props.name}</h2>
      <div>User Information</div>
      <ul>
        <li>full name: {props.name}</li>
        <li>age: {props.age}</li>
        <li>hobbies: {props.hobby}</li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}
export default user;
