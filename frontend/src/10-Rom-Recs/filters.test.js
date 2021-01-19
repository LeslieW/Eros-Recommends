import React from 'react';
import {render, fireEvent, cleanup, wait } from '@testing-library/react';
import Filters from './filters.js';
import App from './app.js';
import { api } from './api.js';
import Home from './home.js';
import Rec from './rec.js';
import ReactDom from 'react-dom';

afterEach(cleanup);

const mockFetchIt = (api.fetchIt = jest.fn());

const TEST_BOOKS = [
	{ id: 1,
		title: 'The Shadows Between Us',
		author: 'Tricia Levenseller',
		img: 'https://m.media-amazon.com/images/I/51NKQD10W2L.jpg',
		link: 'https://www.amazon.com/Shadows-Between-Us-Tricia-Levenseller-ebook/dp/B07P9LQBM1/ref=sr_1_2?crid=346A4F0NYTX6H&dchild=1&keywords=the+shadows+between+us&qid=1606768883&s=books&sprefix=The+Shadows%2Cstripbooks%2C206&sr=1-2',
		description: 'Alessandra is tired of being overlooked, but she has a plan to gain power: 1) Woo the Shadow King. 2) Marry him. 3) Kill him and take his kingdom for herself. No one knows the extent of the freshly crowned Shadow King’s power. Some say he can command the shadows that swirl around him to do his bidding. Others say they speak to him, whispering the thoughts of his enemies. Regardless, Alessandra knows what she deserves, and she’s going to do everything within her power to get it.But Alessandra’s not the only one trying to kill the king. As attempts on his life are made, she finds herself trying to keep him alive long enough for him to make her his queen—all while struggling not to lose her heart. After all, who better for a Shadow King than a cunning, villainous queen?',
		category: 'Fantasy'
	},
	{
		id: 2,
		title: 'The Invisible Life of Addie LaRue',
		author: 'V. E. Schwab',
		img: 'https://m.media-amazon.com/images/I/51FVPBt51ZL.jpg',
		link: 'https://www.amazon.com/Invisible-Life-Addie-LaRue-ebook/dp/B084357H23/ref=sr_1_1?crid=1F2QKE4NO32SV&dchild=1&keywords=the+invisible+life+of+addie+larue+by+v.e.+schwab&qid=1605208117&sprefix=the+in%2Caps%2C250&sr=8-1',
		description: 'France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents, across history and art, as a young woman learns how far she will go to leave her mark on the world. But everything changes when, after nearly 300 years, Addie stumbles across a young man in a hidden bookstore and he remembers her name.',
		category: 'Paranormal'
	}
];

test('updates checked state upon a filter click', async () => {
	// TODO: Mock call to backend to return 1 non-fantasy and 1 fantasy book
	
	const asyncMock = mockFetchIt.mockResolvedValueOnce(TEST_BOOKS);
	 
	const { container, getByText } = render(<Home/>);
	
  await wait(asyncMock());

	const button = getByText('Tell me what to read');

	// TODO: Assert that book shown in non-fantasy
	
	fireEvent.click(button);
	const all = container.querySelector('input[value=All]');
	const paranormal = container.querySelector('input[value=Paranormal]');
	expect(all.checked).toBe(true);
	expect(paranormal.checked).toBe(false);

	// TODO: Click on paranormal button
	fireEvent.click(paranormal);

	// TODO: Assert that book shown in fantasy
	const paranormalBook = container.querySelector('h3');
	expect(all.checked).toBe(false);
	expect(paranormal.checked).toBe(true);
	expect(paranormalBook.innerHTML).toBe('The Invisible Life of Addie LaRue');
})

test('renders a correct snapshot', async () => {
	const asyncMock = mockFetchIt.mockResolvedValueOnce(TEST_BOOKS);
  const { asFragment } = render(<Home />)
  await wait(asyncMock());
  expect(asFragment(<home />)).toMatchSnapshot();
});
