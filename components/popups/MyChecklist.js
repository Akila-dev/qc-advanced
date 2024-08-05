'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { SelectInput, DateTimePicker, InputField } from '../../components';

const MyChecklist = ({ close, className, mini, admin }) => {
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
		<div
			className={
				className ? className : 'h-full w-full py-5 px-4 lg:p-7 space-y-8'
			}
		>
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
					darkBg={mini}
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
					darkBg={mini}
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
							darkBg={mini}
						/>
						{/* Status */}
						<SelectInput
							// icon={icons.details}
							label="Status"
							options={['In Progress', 'Completed']}
							valueName="status"
							setFormData={setFormData}
							formData={formData}
							darkBg={mini}
						/>
					</>
				)}
			</div>

			{mini ? (
				<div className="w-full grid grid-cols-2 gap-4 lg:gap-5">
					<button onClick={close} className="btn-2">
						close
					</button>
					<button onClick={() => submitForm()} className="btn-1">
						create
					</button>
				</div>
			) : (
				<div className="w-full">
					<button onClick={() => submitForm()} className="btn-1 block">
						create
					</button>
				</div>
			)}
			<div className={mini ? '' : 'popup-pb'} />
		</div>
	);
};

export default MyChecklist;
