import React from 'react';
import Card from './card.js';

const CardList = ({ todos }) => {
	return (
		<div>
			<Card />
		</div>
	);
};

export default CardList;

// {todos.map((todos, i) => {
// key={i}
// id={todos[0].id}
// title={todos[0].title}
// userId={todos[0].userId}
// completed={todos[0].completed}
