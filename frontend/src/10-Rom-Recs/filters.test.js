import React from 'react';
import {render, fireEvent, cleanup, wait} from '@testing-library/react';
import {api} from './api.js';
import Home from './home.js';

afterEach(cleanup);

const mockFetchIt = (api.fetchIt = jest.fn());

const TEST_BOOKS = [
  {id: 1,
    title: 'The Shadows Between Us',
    author: 'Tricia Levenseller',
    img: 'https://m.media-amazon.com/images/I/51NKQD10W2L.jpg',
    link: 'https://www.amazon.com/Shadows-Between-Us-Tricia-Levenseller-ebook/dp/B07P9LQBM1/ref=sr_1_2?crid=346A4F0NYTX6H&dchild=1&keywords=the+shadows+between+us&qid=1606768883&s=books&sprefix=The+Shadows%2Cstripbooks%2C206&sr=1-2',
    description: 'Summary...',
    category: 'Fantasy',
  },
  {
    id: 2,
    title: 'The Invisible Life of Addie LaRue',
    author: 'V. E. Schwab',
    img: 'https://m.media-amazon.com/images/I/51FVPBt51ZL.jpg',
    link: 'https://www.amazon.com/Invisible-Life-Addie-LaRue-ebook/dp/B084357H23/ref=sr_1_1?crid=1F2QKE4NO32SV&dchild=1&keywords=the+invisible+life+of+addie+larue+by+v.e.+schwab&qid=1605208117&sprefix=the+in%2Caps%2C250&sr=8-1',
    description: 'Summary...',
    category: 'Paranormal',
  },
];

test('updates checked state upon a filter click', async () => {
  // Mock call to backend to return 2 books in different categories

  const asyncMock = mockFetchIt.mockResolvedValueOnce(TEST_BOOKS);

  const {container, getByText} = render(<Home/>);

  await wait(asyncMock());

  const button = getByText('Tell me what to read');

  // Assert that book shown is not paranormal

  fireEvent.click(button);
  const all = container.querySelector('input[value=All]');
  const paranormal = container.querySelector('input[value=Paranormal]');
  expect(all.checked).toBe(true);
  expect(paranormal.checked).toBe(false);

  // Click on paranormal button
  fireEvent.click(paranormal);

  // Assert that book shown is paranormal
  const paranormalBook = container.querySelector('h3');
  expect(all.checked).toBe(false);
  expect(paranormal.checked).toBe(true);
  expect(paranormalBook.innerHTML).toBe('The Invisible Life of Addie LaRue');
});

test('renders a correct snapshot', async () => {
  const asyncMock = mockFetchIt.mockResolvedValueOnce(TEST_BOOKS);
  const {asFragment} = render(<Home />);
  await wait(asyncMock());
  expect(asFragment(<home />)).toMatchSnapshot();
});
