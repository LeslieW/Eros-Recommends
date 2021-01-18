import React, { useState, useEffect } from 'react';
const getLocalStorage = () => {
	let bookShelves = localStorage.getItem('bookShelves');
	if (bookShelves) {
		return (bookShelves = JSON.parse(localStorage.getItem('bookShelves')));
	} else {
		return [];
	}
};

function Rec({ bookRec, filteredBooks }) {
	const [readMore, setReadMore] = useState(false);
	const [bookShelves, setBookShelves] = useState(getLocalStorage());
	const handleSubmit = (e) => {
		e.preventDefault();
		const { id, title, author, img, link, description } = filteredBooks[bookRec];
		const checkIfSaved = bookShelves.find(({title}) => title === filteredBooks[bookRec].title);
		if (checkIfSaved) {
			window.alert('Book already saved to Shelves.')
		} else {
				window.alert('Success! Book saved to Shelves.');
				const savedBook = { id, title, author, img, link, description };
				setBookShelves([...bookShelves, savedBook]);
		}
	};

	useEffect(() => {
		localStorage.setItem('bookShelves', JSON.stringify(bookShelves));
	}, [bookShelves]);

	if (bookRec === -1 || filteredBooks.length === 0) {
		return null; 
	}
	const { id, title, author, img, link, description, category } = filteredBooks[bookRec];
	return (
			<div className='book'>
			<img src={img} alt="book cover"/>
			<article className='book-details'>
				<a href={link}>
					<h3>{title}</h3>
				</a>
				<h4>By {author}</h4>
				<p>
					{readMore ? description : `${description.substring(0, 200)}...`}
					<button className='link-btn' onClick={() => setReadMore(!readMore)}>
					{readMore ? 'show less' : 'read more'}
					</button>
				</p>
				<div className='rec-buttons'>
					<button className='btn save-btn' onClick={handleSubmit}>Save</button>
					<a href={link}><button className='btn amazon-btn'>Buy</button></a>
				</div>
			</article>
			</div>
	  )
}

export default Rec;