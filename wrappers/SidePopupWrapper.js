'use client';

import React from 'react';
import Image from 'next/image';
import { icons, images } from '../constants';

export default function SidePopupWrapper({
	children,
	close,
	title,
	other,
	otherIcon,
}) {
	return (
		<div className={`popup-container flex flex-col items-center lg:bg-white`}>
			{/* Background image */}
			<div className="w-full h-screen fixed top-0 left-0  md:hidden">
				<Image
					src={images.bg}
					alt="background"
					className="w-full h-full object-cover"
				/>{' '}
			</div>
			<div className="h-screen w-full">
				<div className="w-full grid grid-cols-4 items-center h-[15vh] lg:h-[100px] fixed top-0 right-0 lg:relative !text-[--white] lg:!text-[--black] px-4 border-b shadow-black shadow-xl">
					<button onClick={close} className="popup-button">
						<Image src={icons.arrowLeft} alt="close" />
					</button>
					<h2 className="text-[--white] lg:text-[--black] col-span-2 text-center">
						{title}
					</h2>
					<div>
						{other && (
							<button onClick={other} className="popup-button">
								{otherIcon}
							</button>
						)}
					</div>
				</div>
				<div className="popup-content-box relative z-10 bg-black">
					{children}
				</div>
			</div>
		</div>
	);
}
