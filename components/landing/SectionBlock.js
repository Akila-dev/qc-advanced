'use client';

import React from 'react';
import Link from 'next/link';
import {
	motion,
	useScroll,
	useTransform,
	cubicBezier,
	useMotionTemplate,
	circOut,
} from 'framer-motion';

import { slideInBottom2 } from '../../constants/variants';

// const buttonColors = ["#b62e32","card"]
const SectionBlock = ({
	tag,
	heading,
	text,
	buttons,
	wrapperClasses,
	// scrollYProgress,
}) => {
	// const min = 10;
	// const parallax4 = useTransform(scrollYProgress, [0.5, 1], [0, min], {
	// 	ease: circOut,
	// });
	// const parallax3 = useTransform(scrollYProgress, [0.5, 1], [0, min * 1.5], {
	// 	ease: circOut,
	// });
	// const parallax2 = useTransform(scrollYProgress, [0.5, 1], [0, min * 2], {
	// 	ease: circOut,
	// });
	// const parallax1 = useTransform(scrollYProgress, [0.5, 1], [0, min * 2], {
	// 	ease: circOut,
	// });

	return (
		<motion.div
			initial="initial"
			exit="exit"
			whileInView="animate"
			transition={{ staggerChildren: 0.2 }}
			className={`w-full flex flex-col gap-1 ${wrapperClasses}`}
		>
			<motion.p
				// style={{ translateY: parallax4 }}
				variants={slideInBottom2}
				className="text-[--brand] font-semibold"
			>
				{tag}
			</motion.p>
			<motion.h1
				// style={{ translateY: parallax3 }}
				variants={slideInBottom2}
				className="text-[--black] h1"
			>
				{heading}
			</motion.h1>
			<motion.p
				// style={{ translateY: parallax2 }}
				variants={slideInBottom2}
				className="py-2"
			>
				{text}
			</motion.p>
			{buttons && (
				<motion.div
					// style={{ translateY: parallax1 }}
					variants={slideInBottom2}
					className="space-x-2 pt-5"
				>
					{buttons.map((data, i) => (
						<Link
							key={i}
							href={data.link}
							className={`!rounded-[2rem] ${i === 0 ? 'btn-1-v2' : 'btn-2-v2'}`}
						>
							{data.text}
						</Link>
					))}
				</motion.div>
			)}
		</motion.div>
	);
};

export default SectionBlock;
