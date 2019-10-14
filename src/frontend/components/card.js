import React from 'react';

const Card = ({ title, userId, id, completed }) => {
	return (
		<div className="bg-light-blue dib pa1 ma1 grow bg-animate transition: background-color .15s ease-in-out ba">
			<ul className="bg-light-blue ">
				<li>{title}</li>
				<li>{userId}</li>
				<li>{id}</li>
				<li className="bg-yellow pa1">{completed ? 'done' : 'to-do'}</li>
			</ul>
		</div>
	);
};

export default Card;
