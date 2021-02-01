import React, {useState} from 'react';
import {FaSlidersH, FaRegWindowClose} from 'react-icons/fa';
import MobileFilters from './mobile-filters';

function Filters({filteredBooks,
  setFilteredBooks,
  allBooks,
  setAllBooks,
  showFilters,
  mobile,
  setShowFilters,
  bookRec,
  setBookRec}) {

  const [checked, setChecked] = useState('All');
  
  const handleSelection = (category) => {
    let filtered = allBooks;
    if (category === 'All') {
    } else {
      filtered = allBooks.filter((book) => book.category === category);
    }
    const random = Math.floor(Math.random() * filtered.length);
    setBookRec(random);
    setFilteredBooks(filtered);
    setChecked(category);
  };

  if (showFilters && mobile) {
    return (
      <div className='popup-overlay'>
        <div className='popup-categories'>
          <div className='popup-title'>
            <h3>Refine Results </h3>
            <h3>
              <FaRegWindowClose
                style={{verticalAlign: 'middle', cursor: 'pointer'}}
                onClick={() => {
                  setShowFilters(false);
                }}
              />
            </h3>
          </div>
          <form
            action=''
            className='popup-form'
          >
            <MobileFilters
              checked={checked}
              handleSelection={handleSelection}
              showFilters={showFilters}
              setShowFilters={setShowFilters}>
            </MobileFilters>
          </form>
        </div>
      </div>
    );
  }
  if (mobile || bookRec < 0) {
    return null;
  }
  return (
    <div className='categories'>
      <h4>Refine results  <FaSlidersH style={{verticalAlign: 'middle'}} /></h4>
      <form>
        <MobileFilters
          checked={checked}
          handleSelection={handleSelection}
          showFilters={showFilters}
          setShowFilters={setShowFilters}>
        </MobileFilters>
      </form>
    </div>
  );
};

export default Filters;
