import React from 'react';
import {LIST_DATA} from './list-data';

function Lists() {
  const handleClick = (e) => {
    e.preventDefault();
    window.alert('No list at this time.');
  };

  return (
    <>
      <section className='hero'>
        <h1>Lovely Lists</h1>
        <h4>Browse book lists curated by yours truly.</h4>
      </section>
      <section className='lists'>
        {LIST_DATA.map((list) => {
          const {title, subtitle, id} = list;
          return (
            <article className='list' key={id}>
              <div className='list-info'>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
              <button
                className='btn'
                type='button'
                onClick={(e) => handleClick(e)}
              >
                View List
              </button>
            </article>
          );
        })}
      </section>
    </>

  );
};

export default Lists;
