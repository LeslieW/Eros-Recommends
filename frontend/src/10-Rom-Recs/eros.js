import React from 'react';

function Eros({bookRec}) {
  //if a random bookrec selection doesn't exist (button not clicked) return placeholder
  if (bookRec !== -1) return null;
  return (
    <>
      <img
        className='eros'
        src={process.env.PUBLIC_URL + '/images/Eros_Hero.svg'}
        alt='Eros'
      />
    </>
  );
};

export default Eros;
