import React from 'react';

export const api = {
	fetchIt: (url) => {
		return fetch(url)
		.then(res => res.json());
	}
}
