import React from 'react';

const Eros = ({bookRec}) => {
	if (bookRec === -1) {
		return (
			<>
				<img className='eros' src={process.env.PUBLIC_URL + `/images/eros_hero.svg`} alt="Eros"/>
			</>
		)
	} else {
		return null;
	}
}
export default Eros;