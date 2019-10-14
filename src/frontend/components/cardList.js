import React from 'react';
import Card from './card.js';

const CardList = ({ todos }) => {
	const cardComponent = todos.map((todo, i) => {
		return (
			<Card
				key={i}
				title={todos[i].title}
				id={todos[i].id}
				userId={todos[i].userId}
				completed={todos[i].completed}
			/>
		);
	});
	return <div>{cardComponent}</div>;
};

export default CardList;
