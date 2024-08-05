'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiEyeLine } from 'react-icons/ri';

import { images, icons } from '../../constants';
import {
	Tabs,
	ActionActivityCard,
	CommentTextBox,
	SelectInput,
	DateTimePicker,
	InputField,
} from '../../components';

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

const ActionDetails = ({ close, admin }) => {
	// TAB VARIABLES
	const [activeTab, setActiveTab] = useState(0);
	// COMMENT VARIABLES
	const [comment, setComment] = useState('');
	// FORM VARIABLES
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		priority: '',
		dueDate: '',
		assignees: '',
		business: '',
		status: '',
	});
	const { title, description, priority, dueDate, assignees, business, status } =
		formData;

	// FORM FUNCTIONS
	const submitForm = () => {
		console.log(formData);
	};

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
						<InputField
							label="Title"
							type="text"
							placeholder="Add Title"
							formData={formData}
							setFormData={setFormData}
							nameValue="title"
						/>
						{/* Description */}
						<InputField
							label="Description"
							type="text"
							placeholder="Add Description"
							formData={formData}
							setFormData={setFormData}
							nameValue="description"
						/>
						{/* Priority */}
						<SelectInput
							// icon={icons.details}
							label="Priority"
							options={['Low', 'Medium', 'High']}
							colors={['#177EC1', '#2d2d2b', '#b62e32']}
							valueName="priority"
							setFormData={setFormData}
							formData={formData}
						/>
						{/* DueDate */}
						<DateTimePicker
							label="Due Date"
							valueName="dueDate"
							setFormData={setFormData}
							formData={formData}
						/>
						{/* Assignees */}
						<SelectInput
							// icon={icons.details}
							label="Assignees"
							placeholder="Choose Assignees"
							options={['Sigmandom', 'Rhemadom']}
							valueName="assignees"
							setFormData={setFormData}
							formData={formData}
						/>
						{admin && (
							<>
								{/* Business */}
								<SelectInput
									// icon={icons.details}
									label="Business"
									placeholder="Choose Business"
									options={['Sigmandom', 'Rhemadom']}
									valueName="business"
									setFormData={setFormData}
									formData={formData}
								/>
								{/* Status */}
								<SelectInput
									// icon={icons.details}
									label="Status"
									options={['In Progress', 'Completed']}
									valueName="status"
									setFormData={setFormData}
									formData={formData}
								/>
							</>
						)}
					</div>
					<div className="w-full">
						<button
							type="button"
							onClick={() => submitForm()}
							className="btn-1 block"
						>
							UPDATE
						</button>
					</div>

					<div className="flex flex-col items-center text-center gap-1">
						<p className="font-medium">Inspection Of</p>
						<p className="black-text">Business 1 / 28 May, 2024</p>
						<p className="text-[--brand] font-semibold flex gap-1 items-center pt-2">
							<RiEyeLine className="text-lg" /> View Report
						</p>
					</div>
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
