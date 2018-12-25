import React from 'react';
import NewsList from './newsList.jsx'
const News = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        if (item !== undefined) {
          return <NewsList data={item} key={index} />
        }
      })
      }
    </div>
  )
}

export default News;
