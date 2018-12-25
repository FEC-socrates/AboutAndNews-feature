import React from 'react';

const NewsList = (props) => {


  var handleClick = (e) => {

  }

console.log(props)
  return (
    <div onClick={handleClick}>
      <div>
        <img src={props.data.pictureUrl} width="200" height="135"/>
      </div>
      <div>
        <div>{props.data.name}</div>
        <div>{props.data.title}</div>
        <div>{props.data.description}</div>
        <div>{props.data.views}</div>
      </div>
    </div>
  )
}

export default NewsList;
