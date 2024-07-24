import React from 'react';
import Image from 'next/image';

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
		<button
			onClick={onClick}
			className="flex justify-between items-center w-full p-3 bg-[--card] border-[--card-border] rounded-lg"
		>
			<div className="flex-v-center">
				<Image src={icons.caret} alt="caret" className="w-[10px]" />
				<p className="black-text">{title}</p>
			</div>
			<p className="black-text">
				{completed}/{total} ({percentage}%)
			</p>
		</button>
	);
};

export default InspectionCard;
