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
	sidebar,
}) => {
	return (
		<div
			className={`slide-animated-children flex justify-between items-center w-full bg-[--card] border border-[--border] rounded-lg gap-4 ${
				sidebar ? '' : 'lg:flex-col lg:items-start lg:p-[14px]'
			}`}
		>
			<div
				className={`hidden items-center justify-between w-full ${
					sidebar ? '' : 'lg:flex'
				}`}
			>
				<RiGlassesLine className="text-[2rem] bg-[--tag] rounded-full p-[6px]" />
				<button className="p-2 bg-[--highlight-bg-2] rounded-md hover:shadow-xl transition duration-500">
					<Image src={icons.archive} alt="caret" className="w-[20px]" />
				</button>
			</div>
			<button
				onClick={onClick}
				className={`flex justify-between items-center w-full p-[14px]   bg-[--card] rounded-lg gap-3 transition duration-700 ${
					sidebar ? '' : 'lg:p-0 lg:py-2 lg:hover:scale-95'
				}`}
			>
				<div className="flex-v-center">
					<Image src={icons.caret} alt="caret" className={`w-[10px]`} />
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
