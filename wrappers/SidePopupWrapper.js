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
		<div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-[--transparent-bg] backdrop-blur-sm">
			<div className={`popup-container flex flex-col items-center lg:bg-white`}>
				{/* Background image */}
				<div className="w-full h-screen fixed top-0 left-0  md:hidden">
					<Image
						src={images.bg}
						alt="background"
						className="w-full h-full object-cover"
					/>{' '}
				</div>
				<div className="h-screen w-full relative">
					<div className="popup-content-box relative z-10 lg:z-[1]">
						{children}
					</div>
					<div className="w-full md:w-[--sidebar] flex justify-between gap-5 items-center h-[15vh] md:h-[80px] fixed top-0 right-0 !text-[--white] lg:!text-[--black] px-4 lg:z-[1] lg:shadow md:bg-[--white]">
						<button onClick={close} className="popup-button min-w-[35px]">
							<Image src={icons.arrowLeft} alt="close" />
						</button>
						<h2 className="text-[--white] lg:text-[--black] col-span-2 text-center">
							{title}
						</h2>
						<div className="flex justify-end min-w-[35px]">
							{otherIcon && (
								<button onClick={other} className="popup-button">
									<Image src={otherIcon} alt="close" />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
