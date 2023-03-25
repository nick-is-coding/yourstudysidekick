import React, { useEffect, useState } from 'react';

const Person = ({ characterInfo }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (characterInfo.image) {
      setImageSrc(characterInfo.image);
    }
  }, [characterInfo.image]);

  return (
    <div className='person-image'>
      <img src={imageSrc} alt={characterInfo.name} />
    </div>
  );
};

export default Person;
