import React from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const SettingsNavButton = ({ icon, label, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="flex items-center justify-between w-full gap-3 shadow-lg hover:bg-[--highlight-bg] group !shadow-[--highlight-bg] px-3 py-[10px] rounded-xl border border-[--highlight-bg-2]"
		>
			<div className="flex-v-center gap-2 flex-1">
				<div className="flex-center w-[30px] h-[30px] max-w-[30px] min-w-[30px] max-h-[30px] bg-[--highlight-bg] p-[6px] rounded-lg">
					<Image
						src={icon}
						alt={label}
						className="w-full h-full object-contain"
					/>
				</div>
				<p className="!text-[--black]">{label}</p>
			</div>
			<Image
				src={icons.caret}
				alt="open"
				className="w-[11px] h-auto max-w-[11px] min-w-[11px] -rotate-90"
			/>
		</button>
	);
};

export default SettingsNavButton;
