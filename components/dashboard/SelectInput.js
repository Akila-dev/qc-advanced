'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { icons } from '../../constants';
import { TitlePopupWrapper } from '../../wrappers';

const SelectInput = ({
	icon,
	label,
	options,
	valueName,
	setFormData,
	formData,
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const [selectedId, setSelectedId] = useState(0);
	const [selectedOption, setSelectedOption] = useState(options[selectedId]);

	const selectOption = (i) => {
		setSelectedId(i);
		setSelectedOption(options[i]);
		setFormData((prev) => ({
			...prev,
			[valueName]: selectedOption,
		}));
		setShowOptions(false);
	};

	return (
		<div className="input-block !space-y-0">
			<label>{label}</label>
			<button
				className="icon-input flex-v-center w-full !text-left"
				onClick={() => setShowOptions(true)}
			>
				<div className="flex-v-center w-full flex-1">
					<Image src={icon} w={20} h={20} alt="mail" className="input-img" />
					<p
						type="text"
						placeholder="Business Type"
						className="input truncate w-full max-w-[200px] black-text"
					>
						{selectedOption}
					</p>
				</div>
				<Image
					src={icons.caret}
					w={20}
					h={20}
					alt="mail"
					className="input-img p-1"
				/>
			</button>
			{showOptions && (
				<TitlePopupWrapper darkBg options close={() => setShowOptions(false)}>
					<div className="bg-[--card] border border-[--border] rounded-2xl flex flex-col w-full overflow-hidden">
						{options.map((option, i) => (
							<button
								key={i}
								className="options-btn group"
								onClick={() => selectOption(i)}
							>
								<span className="group-hover:scale-110 group-hover:text-[--brand] inline-block transition duration-700">
									{option}
								</span>
							</button>
						))}
					</div>
				</TitlePopupWrapper>
			)}
		</div>
	);
};

export default SelectInput;
