'use client';

import React from 'react';
import Image from 'next/image';

import { images } from '../constants';

export default function AppWrap({ children, icon, title, text, className }) {
	return (
		<div className={`auth-container flex flex-col items-center ${className}`}>
			<div className="bg-white w-[110px] md:w-[110px] h-[110px] md:h-[110px] rounded-full overflow-hidden flex items-center justify-center p-4 border-[5px] border-[--gray] mb-[-50px] z-10">
				<Image
					src={icon}
					alt="logo"
					w={50}
					h={50}
					className={`w-full h-full object-contain`}
				/>
			</div>

			<div className="bg-[--white] pt-[50px] w-full rounded-t-[--rounding] md:rounded-[--rounding] min-h-[40vh] h-full md:h-auto shadow shadow-white">
				<div className="flex flex-col items-center px-5 pt-3 pb-7 ">
					<h2>{title}</h2>
					<p>{text}</p>
					{children}
				</div>
			</div>
		</div>
	);
}
