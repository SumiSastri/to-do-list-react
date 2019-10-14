import React from 'react';
import Card from './card.js';

const CardList = ({ todos }) => {
	return (
		<div>
			{todos.map((todos, i) => {
				return (
					<Card
						key={i}
						id={todos[i].id}
						title={todos[i].title}
						userId={todos[i].userId}
						completed={todos[i].completed}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
