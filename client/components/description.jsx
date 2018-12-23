import React from 'react';
import DescriptionInfoList from './descriptionInfoList.jsx';

const Description = (props) => {
  return (
    <div>
      <div>
        {props.data.description}
      </div>
      <section>
        <DescriptionInfoList data={props.data}/>
      </section>
    </div>
  )
}

export default Description;
