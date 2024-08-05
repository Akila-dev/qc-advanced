'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../constants';
import { EditProfileImage } from '../components';

export default function AppWrap({
	children,
	icon,
	title,
	title2,
	text,
	className,
	logo,
	back,
	header,
	profile,
	formData,
	setFormData,
	valueName,
	skip,
}) {
	return (
		<div className={`auth-container flex flex-col items-center ${className}`}>
			{back && (
				<div className="w-full flex justify-between gap-5 items-center h-[15vh] fixed top-0 right-0 !text-[--white] px-4 lg:z-[1] lg:pl-10">
					<Link
						href={back}
						className="popup-button min-w-[35px] lg:min-w-[45px] lg:!min-h-[45px]"
					>
						<Image src={icons.arrowLeft} alt="close" />
					</Link>
					<h2 className="text-[--white] lg:text-[--black] col-span-2 text-center">
						{header}
					</h2>
					<div className="flex justify-end min-w-[35px] lg:min-w-[45px]"></div>
				</div>
			)}
			{skip && (
				<div className="w-full flex justify-between gap-5 items-center h-[15vh] fixed top-0 right-0 !text-[--white] px-4 lg:z-[1] lg:px-10">
					<div className="flex justify-end min-w-[35px] lg:min-w-[45px]"></div>
					<h2 className="text-[--white] lg:text-[--black] col-span-2 text-center">
						{header}
					</h2>
					<Link
						href={skip}
						className="popup-button min-w-[35px] lg:min-w-[45px] lg:!min-h-[45px]"
					>
						<Image src={icons.logout} alt="close" />
					</Link>
				</div>
			)}

			{/* ProfileImage or just Icon */}
			{profile ? (
				<EditProfileImage
					formData={formData}
					setFormData={setFormData}
					valueName={valueName}
				/>
			) : (
				<div
					className={`bg-white w-[100px] md:w-[110px] h-[100px] md:h-[110px] rounded-full overflow-hidden flex items-center justify-center ${
						logo ? 'p-3' : 'p-6'
					} border-[5px] border-[--gray] mb-[-50px] md:mb-[-55px] z-10`}
				>
					<Image
						src={icon}
						alt="logo"
						w={100}
						h={100}
						className={`w-full h-full object-contain`}
					/>
				</div>
			)}

			<div className="bg-[--white] pt-[50px] w-full rounded-t-[--rounding] md:rounded-[--rounding] min-h-[300px] h-full md:h-auto md:max-h-[80vh] shadow shadow-white overflow-auto">
				<div className="flex flex-col items-center px-5 pt-3 pb-7 ">
					<h2 className="max-w-[300px]">{title}</h2>
					{title2 ? (
						<h2 className="max-w-[300px]">{title2}</h2>
					) : (
						<p className="px-5 text-center pt-1 max-w-[300px]">{text}</p>
					)}
					{children}
				</div>
			</div>
		</div>
	);
}
