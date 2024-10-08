/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useAnimate, usePresence, stagger, motion } from 'framer-motion';
import { icons, images, variants } from '../constants';

export default function SidePopupWrapper({
	children,
	close,
	title,
	otherIcon,
	otherFunc,
	noBg,
}) {
	useEffect(() => {
		const onBackButtonEvent = (e) => {
			e.preventDefault();
			close();
		};
		window.addEventListener('popstate', onBackButtonEvent);
		return () => {
			window.removeEventListener('popstate', onBackButtonEvent);
		};
	}, []);

	// ANIMATION
	const [scope, animate] = useAnimate();
	const [isPresent, safeToRemove] = usePresence();
	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				animate(
					'.slide-animated-children',
					{
						opacity: [0, 1],
						x: [50, 0],
					},
					{ delay: stagger(0.05), type: 'spring', duration: 1, bounce: 0.5 }
				);
				animate(
					'.popup-animated-children',
					{
						opacity: [0, 1],
						scale: [1.1, 1],
					},
					{ delay: stagger(0.05), type: 'spring', duration: 1, bounce: 0.5 }
				);
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				animate(
					'.slide-animated-children',
					{
						opacity: [1, 0],
						x: [0, 50],
					},
					{ delay: stagger(0.015), type: 'spring', duration: 0.5, bounce: 0.3 }
				);
				animate(
					'.popup-animated-children',
					{
						opacity: [1, 0],
						x: [1, 1.1],
					},
					{ delay: stagger(0.015), type: 'spring', duration: 0.5, bounce: 0.3 }
				);
				safeToRemove();
			};

			exitAnimation();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPresent]);

	return (
		<div
			ref={scope}
			className={`fixed top-0 left-0 right-0 bottom-0 h-full w-full z-10 bg-${
				!noBg && '[--transparent-bg] backdrop-blur-sm'
			}`}
		>
			<div
				className={`popup-container relative top-0 flex flex-col items-center md:bg-white`}
			>
				{/* Background image */}
				<div className="w-full h-screen fixed top-0 left-0  md:hidden">
					<Image
						src={images.bg}
						alt="background"
						className="w-full h-full object-cover"
					/>{' '}
				</div>
				<div className="h-full w-full">
					<div className="popup-content-box relative">{children}</div>
					<div className="w-full md:w-[--sidebar] flex justify-between gap-5 items-center h-[15vh] md:h-[80px] fixed top-0 right-0 !text-[--white] md:!text-[--black] px-4 md:z-[1] md:shadow md:bg-[--white]">
						<motion.button
							whileTap="tap"
							whileHover="hover"
							variants={variants.buttonClick}
							onClick={close}
							className="popup-animated-children popup-button min-w-[35px]"
						>
							<Image src={icons.arrowLeft} alt="close" />
						</motion.button>
						<h1 className="popup-animated-children text-[--white] md:!text-[--black] md:!text-xl col-span-2 text-center">
							{title}
						</h1>
						<div className="flex justify-end min-w-[35px]">
							{otherIcon && (
								<motion.button
									whileTap="tap"
									whileHover="hover"
									variants={variants.buttonClick}
									onClick={otherFunc}
									className="popup-animated-children popup-button"
								>
									<Image src={otherIcon} alt="close" />
								</motion.button>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="popup-animated-children slide-animated-children absolute hidden" />
		</div>
	);
}
