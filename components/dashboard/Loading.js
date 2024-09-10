'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { images, variants } from '@/constants';

const Loading = ({ type }) => {
	return type === 'fetching' ? (
		<div className="w-full h-screen bg-transparent text-[--black] flex-center">
			<p className="black-text p-5 bg-[--white]">Loading...</p>
		</div>
	) : type === 'dashboard' ? (
		<div className="w-full h-screen bg-[--white] text-[--black] flex-center">
			Loading...
		</div>
	) : (
		<motion.div
			// animate={{
			// 	backgroundColor: ['var(--card)'],
			// }}
			// transition={{
			// 	type: 'tween',
			// 	ease: 'easeInOut',
			// 	duration: 4,
			// 	repeat: Infinity,
			// 	// repeatType: 'mirror',
			// }}
			className="w-full h-screen bg-[--card] text-[--black] flex-center"
		>
			<motion.div
				animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
				transition={{
					type: 'tween',
					ease: 'easeInOut',
					duration: 4,
					repeat: Infinity,
					// repeatType: 'mirror',
				}}
				className="p-[5vw] pt-[10vw] md:p-7 md:pt-12 rounded-full bg-white overflow-hidden w-[50vw] h-[50vw] md:w-[200px] md:h-[200px]"
			>
				<Image
					src={images.logoFull}
					alt="QC Advanced Loading"
					width={200}
					height={200}
					className="w-full h-full object-contain"
				/>
			</motion.div>
			{/* <div className="absolute bottom-0 left-0">
				<h2>100</h2>
			</div> */}
			{/* <p>Loading</p> */}
		</motion.div>
	);
};

export default Loading;
