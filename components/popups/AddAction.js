'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';

const AddAction = ({ close, className, mini }) => {
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
		<div
			className={
				className ? className : 'h-full w-full py-5 px-4 lg:p-7 space-y-8'
			}
		>
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
						<input
							type="mail"
							name="title"
							placeholder="title"
							value={title}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
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
						<input
							type="description"
							name="description"
							placeholder="description"
							value={description}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
					</div>
				</div>
				{/* Priority */}
				<div className="input-block">
					<label>Priority</label>
					<div className="icon-input">
						<input
							type="priority"
							name="priority"
							placeholder="priority"
							value={priority}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
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
						<input
							type="dueDate"
							name="dueDate"
							placeholder="dueDate"
							value={dueDate}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
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
						<input
							type="assignees"
							name="assignees"
							placeholder="assignees"
							value={assignees}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
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

			{mini ? (
				<div className="w-full grid grid-cols-2 gap-4 lg:gap-5">
					<button onClick={close} className="btn-2">
						create
					</button>
					<button onClick={close} className="btn-1">
						create
					</button>
				</div>
			) : (
				<div className="w-full">
					<button onClick={close} className="btn-1 block">
						create
					</button>
				</div>
			)}
			<div className={mini ? '' : 'popup-pb'} />
		</div>
	);
};

export default AddAction;
