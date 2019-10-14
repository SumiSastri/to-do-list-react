import React from 'react';
const Card = ({ title, userId, completed, id }) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{userId}</p>
			<p>{id}</p>
			<p>{completed}</p>
		</div>
	);
};

export default Card;
