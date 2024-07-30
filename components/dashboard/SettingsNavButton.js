import React from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const SettingsNavButton = ({ icon, label, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center justify-between w-full gap-3 shadow-lg hover:bg-[--highlight-bg] group !shadow-[--highlight-bg] p-3 rounded-xl border border-[--highlight-bg-2]"
		>
			<div className="flex-v-center gap-2 flex-1">
				<div className="flex-center w-[30px] h-[30px] max-w-[30px] min-w-[30px] max-h-[30px] bg-[--highlight-bg] p-[7px] rounded-lg">
					<Image
						src={icon}
						alt={label}
						className="w-full h-full object-contain"
					/>
				</div>
				<p className="group-hover:!text-[--white">{label}</p>
			</div>
			<Image
				src={icons.caret}
				alt="open"
				className="w-[12px] h-auto max-w-[12px] min-w-[12px] -rotate-90"
			/>
		</button>
	);
};

export default SettingsNavButton;
