import React from 'react';
import Categories from './categories';

const MobileFilters = ({checked, handleSelection, setShowFilters, showFilters}) => {

		return (
		<>
			<label className='container' htmlFor= 'All'>All
					<input type="radio" id='All' name='categories' value='All' checked={checked === 'All'} onClick={() => handleSelection('All')} onChange={() => {}} />
					<span className='checkmark'></span>
				</label><br/>
			{Categories.map((category, index) => {
				return (
					<React.Fragment key={index} >
					<label className='container' htmlFor={category}>{category}
						<input type="radio" id={category} name='categories' value={category} checked={checked === category} onClick={() => handleSelection(category)} onChange={() => {}} />
						<span className='checkmark'></span>
					</label><br/>
					</React.Fragment>
					)
			})}
		</>
	);

}

export default MobileFilters;

