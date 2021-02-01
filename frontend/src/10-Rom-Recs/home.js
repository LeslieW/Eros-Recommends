import React, {useState, useEffect} from 'react';
import Rec from './rec';
import {api} from './api';
import Filters from './filters';
import Eros from './eros';
import {FaSlidersH} from 'react-icons/fa';

function Home() {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [bookRec, setBookRec] = useState(-1);
  const [showFilters, setShowFilters] = useState(false);
  const [mobile, setMobile] = useState(false);

  function fetchAllBooks() {
    api.fetchIt('http://localhost:8000/users').then((bookList) => {
      setAllBooks(bookList);
      setFilteredBooks(bookList);
    });
  }

  useEffect(() => {
    fetchAllBooks();
  }, []);

  useEffect(() => {
    mobileFilters();
  });

  const mobileFilters = () => {
window.innerWidth < 800 ? setMobile(true) : setMobile(false);
  };
  window.addEventListener('resize', mobileFilters);

  const handleSubmit = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * filteredBooks.length);
    setBookRec(random);
  };

  const handleFilters = (e) => {
    e.preventDefault();
    setShowFilters(true);
  };

  return (
    <>
      <section className="hero">
        <h1>Eros Recommends</h1>
        <h4>{`Romance novels you'll love at first click.`}</h4>
      </section>
      <section className="rec-interaction">
        <div className='hero-btns'>
          <button className='btn filter-btn' onClick={handleFilters}>
            <FaSlidersH style={{verticalAlign: 'middle'}}/>
          </button>
          <button
            type='submit'
            className='btn random-btn'
            onClick={handleSubmit}
          >
            Tell me what to read
          </button>
        </div>
        <article className='book-results'>
          <Filters
            setBookRec={setBookRec}
            allBooks={allBooks}
            filteredBooks={filteredBooks}
            setFilteredBooks={setFilteredBooks}
            setAllBooks={setAllBooks}
            setShowFilters={setShowFilters}
            mobile={mobile}
            showFilters={showFilters}
            bookRec={bookRec}>
          </Filters>
          <Rec bookRec={bookRec} filteredBooks={filteredBooks}></Rec>
        </article>
      </section>
      <Eros bookRec={bookRec}></Eros>
    </>
  );
};

export default Home;
