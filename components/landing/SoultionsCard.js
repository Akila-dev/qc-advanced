import React from 'react';
import Image from 'next/image';

const SoultionsCard = ({ icon, title, desc }) => {
	return (
		<div className="w-full flex flex-col gap-3 bg-[--white] border border-[--outline] rounded-xl p-5 lg:p-7">
			<div className="py-3">
				<Image
					src={icon}
					alt="point"
					className="w-[40px] h-[40px] object-contain"
				/>
			</div>
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
};

export default SoultionsCard;
