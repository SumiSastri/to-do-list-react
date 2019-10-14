import React from 'react';

const Card = ({ title, userId, id, completed }) => {
	return (
		<div className="dib pa1 ma1 ba bg-light-blue">
			<ul>
				<li>{title}</li>
				<li>{userId}</li>
				<li>{id}</li>
				<li>{completed}</li>
			</ul>
		</div>
	);
};

export default Card;
