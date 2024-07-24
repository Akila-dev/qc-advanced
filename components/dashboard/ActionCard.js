import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

import { icons } from '../../constants';

const ActionCard = ({ title, time, assignee, tag, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="w-full p-4 lg:p-5 bg-[--card] border-[--card-border] rounded-lg text-left space-y-[0.3rem] lg:space-y-2 hover:shadow-md "
		>
			<h3 className="flex gap-5 justify-between">
				{title}{' '}
				{/* <span className="hidden lg:block p-2 rounded-full bg-[--highlight-bg-2]">
					<MdArrowOutward />
				</span> */}
			</h3>
			<p>{time}</p>
			<div className="flex justify-between">
				<p>Assigned to {assignee}</p>
				<span className="bg-[--tag] text-[--text] px-3 py-[6px] rounded-md mt-[-5px] text-xs lg:text-sm">
					{tag}
				</span>
			</div>
		</button>
	);
};

export default ActionCard;
