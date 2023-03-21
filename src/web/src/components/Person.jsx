import React from 'react';

const Person = ({ imageSrc }) => {
  return (
    <div className='person-image'>
      <img src={imageSrc} alt="#"/>
    </div>
  );
};


export default Person;

