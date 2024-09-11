'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { variants } from '@/constants';

const Button = ({ onClick, text, link, submitting, noBg, noClick, sm }) => {
	const variantsP = {
		initial: (i) => ({
			height: [5 + i * 0.5],
			// opacity: 0,
		}),
		animate: (i) => ({
			height: [5 + i * 0.5, 10 + i * 0.5],
			// opacity: [0, 1],
			transition: {
				// type: 'tween',
				duration: 1.5,
				delay: i * 0.1,
				type: 'spring',
				bounce: 0.75,
				repeat: Infinity,
				// repeaDelay: 1,
			},
		}),
	};

	return submitting ? (
		<div type="button" className={`btn-1 pointer-events-none text-center`}>
			<motion.div
				initial="initial"
				animate="animate"
				className="overflow-hidden text-[--white] flex-center !gap-2"
			>
				<span className={sm && 'hidden'}>Please Wait</span>
				<div className="flex-center !w-auto !gap-1">
					<motion.span
						variants={variantsP}
						custom={0}
						className="w-[1px] bg-[--white]"
					/>
					<motion.span
						variants={variantsP}
						custom={1}
						className="w-[1px] bg-[--white]"
					/>
					<motion.span
						variants={variantsP}
						custom={2}
						className="w-[1px] bg-[--white]"
					/>
				</div>
			</motion.div>
		</div>
	) : onClick ? (
		<motion.button
			whileTap="tap"
			whileHover="hover"
			variants={variants.buttonClick}
			className={noBg ? 'btn-2' : 'btn-1'}
			onClick={onClick}
		>
			{text}
		</motion.button>
	) : noClick ? (
		<motion.button
			whileTap="tap"
			whileHover="hover"
			variants={variants.buttonClick}
			className={noBg ? 'btn-2' : 'btn-1'}
		>
			{text}
		</motion.button>
	) : (
		<motion.div
			whileTap="tap"
			whileHover="hover"
			variants={variants.buttonClick}
			className={noBg ? 'btn-2' : 'btn-1'}
			// onClick={onClick}
		>
			<Link href={link}>{text}</Link>
		</motion.div>
	);
};

export default Button;
