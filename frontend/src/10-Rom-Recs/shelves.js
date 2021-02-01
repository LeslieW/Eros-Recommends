import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';

function getLocalStorage() {
  let bookShelves = localStorage.getItem('bookShelves');
  if (bookShelves) {
    return (bookShelves = JSON.parse(bookShelves));
  } else {
    return [];
  }
};

function Shelves() {
  const [bookShelves, setBookShelves] = useState(getLocalStorage());

  const handleClick = (e, id) => {
    e.preventDefault();
    const filterById = (book) => book.id !== id;
    const savedBooks = JSON.stringify(bookShelves.filter(filterById));
    localStorage.setItem('bookShelves', savedBooks);
    setBookShelves(getLocalStorage());
  };

  if (bookShelves.length < 1 || bookShelves === undefined) {
    return (
      <>
        <section className='hero'>
          <h1>Shelves</h1>
          <h4>Good books deserve to be saved.</h4>
        </section>
        <section className='shelves'>
          <img
            src={process.env.PUBLIC_URL + `/images/shelves.svg`}
            className='shelves-img'
            alt='girl reading'
          />
          <p>
            Your shelves are empty!
            To save books to your shelves,
            click the save button when you see a book on the
            <a href="/">homepage</a>.
          </p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className='hero'>
          <h1>Shelves</h1>
          <h4>Good books deserve to be saved.</h4>
        </section>
        <section className='shelves'>
          {bookShelves.map((book) => {
            const {title, author, link, id} = book;
            return (
              <article className='list' key={id}>
                <div className='list-info'>
                  <a href={link}><h3>{title}</h3></a>
                  <h4>{author}</h4>
                </div>
                <button
                  className='btn'
                  type='button'
                  onClick={(e) => handleClick(e, id)}
                >
                  <FaTrashAlt/>
                </button>
              </article>
            );
          })}
        </section>
      </>
    );
  }
};

export default Shelves;
