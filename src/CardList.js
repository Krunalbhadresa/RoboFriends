import React from 'react';
import Card from './Card';
import { robots } from './robots.js';

const CardList = ({id, name, email}) => {
	const cardArray = robots.map((user, i) => {
		return (
			<Card 
			key={i} 
			image={robots[i].image} 
			id={robots[i].id} 
			name={robots[i].name} 
			breed={robots[i].breed} 
			email={robots[i].email} 
			/>
		);
	})
	return (
		<div>
		{ cardArray }
		</div>
	);
}

export default CardList;