import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';

const Empty = ({ text }) => {
	return (
		<div className="flex-center flex-col h-[60vw] md:h-[300px] w-full !gap-0">
			<Image
				src={images.empty}
				alt="Empty"
				className="w-[45vw] h-[45vw] md:w-[150px] md:h-[150px] object-contain"
			/>
			<p>{text}</p>
		</div>
	);
};

export default Empty;
