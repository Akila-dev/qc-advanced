import React from 'react';

const ActionActivityCard = ({ title, createdBy, date }) => {
	return (
		<button className="bg-[--card] rounded-lg p-5 space-y-2 w-full text-start">
			<h3 className="">{title}</h3>
			<div className="flex flex-col items-end gap-1">
				<p>{createdBy ? createdBy : 'You'} created the action </p>
				<p>{date}</p>
			</div>
		</button>
	);
};

export default ActionActivityCard;
