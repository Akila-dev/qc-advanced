'use client';

import { useRef, useEffect } from 'react';

export default function TitlePopupWrapper({
	children,
	title,
	close,
	darkBg,
	options,
}) {
	const ref = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				close();
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 right-0 bottom-0 h-full w-full  ${
				darkBg
					? 'bg-[--transparent-bg]'
					: 'bg-[--transparent-bg] lg:bg-[#0000000a]'
			} backdrop-blur-sm !z-10 flex items-center justify-center p-5 lg:p-7`}
		>
			{options ? (
				<div ref={ref} className={`w-full max-w-[350px] space-y-4`}>
					<div className="max-h-[500px] overflow-auto">{children}</div>
				</div>
			) : (
				<div
					ref={ref}
					className={`bg-white w-full py-4 lg:py-5 rounded-[--rounding] max-w-[375px] space-y-4`}
				>
					<div className="px-4 lg:px-5">
						<h1 className="border-b border-[--border] text-center !text-[--black] pb-4">
							{title}
						</h1>
					</div>
					<div className="px-4 lg:px-5 max-h-[70vh] overflow-auto">
						{children}
					</div>
				</div>
			)}
		</div>
	);
}
