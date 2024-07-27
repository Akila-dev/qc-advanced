'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiEyeLine } from 'react-icons/ri';

import { images, icons } from '../../constants';
import { Tabs, ActionActivityCard, CommentTextBox } from '../../components';

const actionActivities = [
	{
		title: 'Coffee machine broken',
		createdBy: '',
		date: '28 may 2024 at 12:00 pm',
	},
	{
		title: 'Coffee machine repairs started',
		createdBy: '',
		date: '28 may 2024 at 12:00 pm',
	},
];

const ActionDetails = ({ close }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [comment, setComment] = useState('');

	return (
		<div className="h-full w-full py-5 px-4 lg:p-7 space-y-8">
			<div className="lg:mt-[-10px] mb-[-15px]">
				<Tabs
					tabs={['details', 'activities']}
					active={activeTab}
					onClick={setActiveTab}
				/>
			</div>
			{activeTab === 0 ? (
				<div className="space-y-8">
					<div className="w-full space-y-4">
						{/* Title */}
						<div className="input-block">
							<label>Title</label>
							<div className="icon-input">
								<Image
									src={icons.envelope}
									w={20}
									h={20}
									alt="mail"
									className="input-img"
								/>
								<label className="input">Equipment</label>
							</div>
						</div>
						{/* Description */}
						<div className="input-block">
							<label>Description</label>
							<div className="icon-input">
								<Image
									src={icons.envelope}
									w={20}
									h={20}
									alt="mail"
									className="input-img"
								/>
								<label className="input">Coffee Machine is broken</label>
							</div>
						</div>
						{/* Priority */}
						<div className="input-block">
							<label>Priority</label>
							<div className="icon-input">
								<label className="input !text-[--brand]">High</label>
								<Image
									src={icons.caret}
									w={20}
									h={20}
									alt="mail"
									className="input-img p-[3px]"
								/>
							</div>
						</div>
						{/* DueDate */}
						<div className="input-block">
							<label>DueDate</label>
							<div className="icon-input">
								<label className="input">28 May 2024, 10:00 pm</label>
								<Image
									src={icons.calendar}
									w={20}
									h={20}
									alt="mail"
									className="input-img"
								/>
							</div>
						</div>
						{/* Assignees */}
						<div className="input-block">
							<label>Assignees</label>
							<div className="icon-input">
								<label className="input">John</label>
								<Image
									src={icons.caret}
									w={20}
									h={20}
									alt="mail"
									className="input-img p-[3px]"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center text-center gap-1">
						<p className="font-medium">Inspection Of</p>
						<p className="black-text">Business 1 / 28 May, 2024</p>
						<p className="text-[--brand] font-semibold flex gap-1 items-center pt-2">
							<RiEyeLine className="text-lg" /> View Report
						</p>
					</div>

					{/* <div className="w-full lg:pb-[50px]">
				<button onClick={close} className="btn-1 block">
					create
				</button>
			</div> */}
				</div>
			) : (
				<div className="w-full space-y-4 pt-2">
					{actionActivities.map((activity, i) => (
						<ActionActivityCard
							key={i}
							title={activity.title}
							date={activity.date}
							createdBy={activity.createdBy}
						/>
					))}
					<div className="pb" />
					{/* ! Text Box */}
					<CommentTextBox
						comment={comment}
						setComment={setComment}
						send={() => console.log('make comment')}
					/>
				</div>
			)}
			<div className="popup-pb" />
		</div>
	);
};

export default ActionDetails;
