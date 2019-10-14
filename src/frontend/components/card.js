import React from 'react';

const Card = ({ title, userId, id, completed }) => {
	return (
		<div className="dib pa5 ma1 tc ba bw1 bg-light-blue">
			<h2>{title}</h2>
			<p>{userId}</p>
			<p>{id}</p>
			<p>completed</p>
		</div>
	);
};

export default Card;
