import React from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const TrainingCard = ({ title, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="bg-[--card] rounded-lg p-5 space-y-2 w-full text-start"
		>
			<div className="flex-center !justify-start">
				<Image
					src={icons.docs}
					w={20}
					h={20}
					alt="mail"
					className="input-img scale-125"
				/>
				<h3 className="">{title}</h3>
			</div>
			<p>{text}</p>
		</button>
	);
};

export default TrainingCard;
