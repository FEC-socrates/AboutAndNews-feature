import React from 'react';
import NewsList from './newsList.jsx'
const News = (props) => {
  console.log(props)
  return (
    <div>
      <NewsList data={props.data}/>
    </div>
  )
}

export default News;
