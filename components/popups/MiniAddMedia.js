import React from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const MiniAddMedia = () => {
	return (
		<div className="grid grid-cols-2 gap-3 lg:gap-4">
			<button className="w-full bg-[--card] rounded-xl flex-center flex-col p-3 !gap-1 min-h-[100px]">
				<Image src={icons.camera} alt="camera" />
				<p className="text-[--black] !font-medium">Camera</p>
			</button>
			<button className="w-full bg-[--card] rounded-xl flex-center flex-col p-3 !gap-1 min-h-[100px]">
				<Image src={icons.gallery} alt="gallery" />
				<p className="text-[--black] !font-medium">Gallery</p>
			</button>
		</div>
	);
};

export default MiniAddMedia;
