'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiEyeLine } from 'react-icons/ri';

import { images, icons } from '../../constants';

const ActionDetails = ({ close }) => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		priority: '',
		dueDate: '',
		assignees: '',
	});

	const { title, description, priority, dueDate, assignees } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="h-full w-full py-5 px-4 lg:p-7 space-y-8">
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
						<label
							// type="mail"
							// name="title"
							// placeholder="mail@mail.com"
							// value={title}
							// onChange={handleChangeInput}
							className="input"
						>
							Equipment
						</label>
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
						<label
							// type="description"
							// name="description"
							// placeholder="description"
							// value={description}
							// onChange={handleChangeInput}
							className="input"
						>
							Coffee Machine is broken
						</label>
					</div>
				</div>
				{/* Priority */}
				<div className="input-block">
					<label>Priority</label>
					<div className="icon-input">
						<label
							// type="priority"
							// name="priority"
							// placeholder="priority"
							// value={priority}
							// onChange={handleChangeInput}
							className="input !text-[--brand]"
						>
							High
						</label>
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
						<label
							// type="dueDate"
							// name="dueDate"
							// placeholder="dueDate"
							// value={dueDate}
							// onChange={handleChangeInput}
							className="input"
						>
							28 May 2024, 10:00 pm
						</label>
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
						<label
							// type="assignees"
							// name="assignees"
							// placeholder="assignees"
							// value={assignees}
							// onChange={handleChangeInput}
							className="input"
						>
							John
						</label>
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
			<div className="popup-pb" />
		</div>
	);
};

export default ActionDetails;
