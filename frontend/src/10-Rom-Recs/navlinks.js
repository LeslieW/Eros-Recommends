import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/lists',
    text: 'lists',
  },
  {
    id: 3,
    url: '/shelves',
    text: 'shelves',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: 'https://www.youtube.com',
    icon: <FaYoutube />,
  },
];
