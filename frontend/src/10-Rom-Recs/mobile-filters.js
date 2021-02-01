import React from 'react';
import CATEGORIES from './categories';

function MobileFilters({checked,
  handleSelection,
  setShowFilters,
  showFilters}) {
  return (
    <>
      <label className='container' htmlFor= 'All'>All
        <input
          type="radio"
          id='All'
          name='categories'
          value='All'
          checked={checked === 'All'}
          onChange={() => handleSelection('All')}
        />
        <span className='checkmark'></span>
      </label><br/>
      {CATEGORIES.map((category, index) => {
        return (
          <React.Fragment key={index} >
            <label className='container' htmlFor={category}>{category}
              <input
                type="radio"
                id={category}
                name='categories'
                value={category}
                checked={checked === category}
                onChange={() => handleSelection(category)}
              />
              <span className='checkmark'></span>
            </label><br/>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MobileFilters;

