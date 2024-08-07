/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { icons, images } from '../constants';

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

	return (
		<div
			className={`fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-${
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
					<div className="w-full md:w-[--sidebar] flex justify-between gap-5 items-center h-[15vh] md:h-[80px] fixed top-0 right-0 !text-[--white] md:!text-[--black] px-4 md:z-[1] md:shadow md:bg-[--white]">
						<button onClick={close} className="popup-button min-w-[35px]">
							<Image src={icons.arrowLeft} alt="close" />
						</button>
						<h1 className="text-[--white] md:!text-[--black] md:!text-xl col-span-2 text-center">
							{title}
						</h1>
						<div className="flex justify-end min-w-[35px]">
							{otherIcon && (
								<button onClick={otherFunc} className="popup-button">
									<Image src={otherIcon} alt="close" />
								</button>
							)}
						</div>
					</div>
					<div className="popup-content-box relative z-10 md:z-[0]">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
