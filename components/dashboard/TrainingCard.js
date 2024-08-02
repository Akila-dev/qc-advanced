import React from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const TrainingCard = ({ title, text, onClick, admin, edit, remove }) => {
	return admin ? (
		<button className="bg-[--card] rounded-lg p-5 space-y-2 w-full text-start cursor-default">
			<div className="flex-v-center justify-between">
				<div className="flex-center !justify-start">
					<Image
						src={icons.docs}
						w={20}
						h={20}
						alt="mail"
						className="input-img scale-125"
					/>
					<h3
						className={admin ? 'hover:text-[--text] cursor-pointer' : ''}
						onClick={onClick}
					>
						{title}
					</h3>
				</div>
				{admin && (
					<div className="flex-v-center !gap-[6px]">
						<Image
							src={icons.edit}
							w={20}
							h={20}
							alt="mail"
							className="input-img scale-110 cursor-pointer"
							onClick={edit}
						/>
						<Image
							src={icons.deleteRed}
							w={20}
							h={20}
							alt="mail"
							className="input-img scale-110 cursor-pointer"
							onClick={remove}
						/>
					</div>
				)}
			</div>
			<p>{text}</p>
		</button>
	) : (
		<button
			onClick={onClick}
			className="bg-[--card] rounded-lg p-5 space-y-2 w-full text-start"
		>
			<div className="flex-center !justify-start">
				<Image
					src={icons.docs}
					w={20}
					h={20}
					alt="mail"
					className="input-img scale-125"
				/>
				<h3 className="">{title}</h3>
			</div>
			<p>{text}</p>
		</button>
	);
};

export default TrainingCard;
