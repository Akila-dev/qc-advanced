import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

import { icons } from '../../constants';

const BusinessCard = ({ img, name, email, location, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="w-full p-3 lg:p-4 bg-[--white] rounded-lg text-left shadow-lg shadow-[--outline] border border-[--outline] flex-v-center over"
		>
			<div>
				<Image
					src={img}
					alt={name}
					className="min-w-[80px] max-w-[80px] h-[80px] object-cover rounded-lg md:min-w-[90px] md:max-w-[90px] md:h-[90px]"
				/>
			</div>
			<div className="flex flex-col gap-[5px] w-full flex-1 relative overflow-hidden">
				<h2 className="md:text-base">{name}</h2>
				<p className="flex-v-center !gap-1 truncate">
					<Image
						src={icons.envelope}
						className="w-[16px] min-w-[16px] max-w-[16px]"
					/>{' '}
					<span className="truncate">
						{email}mmmmmmmmmmmmmmmm
						{/* {email.length > 12 ? email.slice(0, 12) + '...' : email} */}
					</span>
				</p>
				<p className="flex-v-center !gap-1">
					<Image
						src={icons.location}
						className="w-[16px] min-w-[16px] max-w-[16px]"
					/>{' '}
					{location}
				</p>
			</div>
		</button>
	);
};

export default BusinessCard;
