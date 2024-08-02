'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../constants';

export default function AppWrap({
	children,
	icon,
	title,
	text,
	className,
	logo,
	back,
	header,
	profile,
	profileImage,
	changeProfile,
}) {
	return (
		<div className={`auth-container flex flex-col items-center ${className}`}>
			{back && (
				<div className="md:hidden w-full md:w-[--sidebar] flex justify-between gap-5 items-center h-[15vh] fixed top-0 right-0 !text-[--white] px-4 lg:z-[1]">
					<button onClick={back} className="popup-button min-w-[35px]">
						<Image src={icons.arrowLeft} alt="close" />
					</button>
					<h2 className="text-[--white] lg:text-[--black] col-span-2 text-center">
						{header}
					</h2>
					<div className="flex justify-end min-w-[35px]"></div>
				</div>
			)}

			{/* ProfileImage or just Icon */}
			{profile ? (
				<div
					className={`bg-white w-[100px] md:w-[110px] h-[100px] md:h-[110px] rounded-full overflow-hidde flex items-center justify-center border-[5px] border-[--gray] mb-[-50px] md:mb-[-55px] z-10 relative`}
				>
					<Image
						src={profileImage}
						alt="logo"
						w={50}
						h={50}
						className={`w-full h-full object-cover rounded-full`}
					/>
					<button
						onClick={changeProfile}
						className="absolute bottom-0 right-0 rounded-full !w-[35px] h-[35px] bg-[--card] flex-center translate-x-[5px]"
					>
						<Image
							src={images.noting}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/>
					</button>
				</div>
			) : (
				<div
					className={`bg-white w-[100px] md:w-[110px] h-[100px] md:h-[110px] rounded-full overflow-hidden flex items-center justify-center ${
						logo ? 'p-3' : 'p-6'
					} border-[5px] border-[--gray] mb-[-50px] md:mb-[-55px] z-10`}
				>
					<Image
						src={icon}
						alt="logo"
						w={50}
						h={50}
						className={`w-full h-full object-contain`}
					/>
				</div>
			)}

			<div className="bg-[--white] pt-[50px] w-full rounded-t-[--rounding] md:rounded-[--rounding] min-h-[300px] h-full md:h-auto md:max-h-[80vh] shadow shadow-white overflow-auto">
				<div className="flex flex-col items-center px-5 pt-3 pb-7 ">
					<h2 className="max-w-[300px]">{title}</h2>
					<p className="px-5 text-center pt-1 max-w-[300px]">{text}</p>
					{children}
				</div>
			</div>
		</div>
	);
}
