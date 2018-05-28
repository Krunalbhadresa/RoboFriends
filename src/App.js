import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

const App = ({id, name, email}) => {
	return(
		<div className = "tc">
			<h1 className="tc"> Robo Friends </h1>
			<SearchBox/>
			<CardList robots={robots}/>
		</div>

	);
}

export default App;