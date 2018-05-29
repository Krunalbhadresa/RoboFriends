import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className = 'tc pa3' >
			<input 
				className = 'pa2 ba b--gray br3 bw2'
				type = 'search'
				placeholder = 'Search Robots'
				onChange = {searchChange}
			/>
		</div>
		);
}

export default SearchBox;