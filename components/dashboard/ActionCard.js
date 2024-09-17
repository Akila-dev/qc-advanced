import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

import { icons } from '../../constants';

const ActionCard = ({
	title,
	time,
	assignee,
	tag,
	onClick,
	admin,
	businessName,
	businessId,
}) => {
	return (
		<button
			onClick={onClick}
			className="w-full p-4 lg:p-5 bg-[--card] border-[--card-border] rounded-lg text-left space-y-[0.3rem] lg:space-y-2 hover:shadow-md "
		>
			<h3 className="flex gap-2 w-full truncate">
				<span className="truncate">{title}</span> |{' '}
				{admin && businessName && (
					<span className="truncate">{businessName}</span>
				)}
			</h3>
			<p>{time}</p>
			<div className="flex justify-between w-full">
				<p className="w-full truncate flex-1">Assigned to {assignee}</p>
				<span className="bg-[--tag] text-[--text] px-3 py-[6px] rounded-md mt-[-5px] text-xs lg:text-sm">
					{tag}
				</span>
			</div>
		</button>
	);
};

export default ActionCard;
