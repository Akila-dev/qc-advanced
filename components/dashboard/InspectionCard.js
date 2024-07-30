import React from 'react';
import Image from 'next/image';
import { RiGlassesLine } from 'react-icons/ri';

import { icons } from '../../constants';

const InspectionCard = ({
	title,
	percentage,
	completed,
	total,
	toggled,
	onClick,
}) => {
	return (
		<div className="flex lg:flex-col justify-between items-center lg:items-start w-full lg:p-[14px] bg-[--card] border border-[--border] rounded-lg gap-4">
			<div className="hidden lg:flex items-center justify-between w-full">
				<RiGlassesLine className="text-[2rem] bg-[--tag] rounded-full p-[6px]" />
				<button className="p-2 bg-[--highlight-bg-2] rounded-md hover:shadow-xl transition duration-500">
					<Image src={icons.archive} alt="caret" className="w-[20px]" />
				</button>
			</div>
			<button
				onClick={onClick}
				className="flex justify-between items-center w-full p-[14px] lg:p-0 lg:py-2 bg-[--card] lg:bg-[--ta] rounded-lg gap-3 lg:hover:scale-95 transition duration-700"
			>
				<div className="flex-v-center">
					<Image
						src={icons.caret}
						alt="caret"
						className={`w-[10px] ${toggled ? '-rotate-90' : 'rotate-0'}`}
					/>
					<p className="black-text">{title}</p>
				</div>
				<p className="black-text">
					{completed}/{total} ({percentage}%)
				</p>
			</button>
		</div>
	);
};

export default InspectionCard;
