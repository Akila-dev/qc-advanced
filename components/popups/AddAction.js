'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';

const AddAction = ({ close, className, mini, admin }) => {
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
						{/* <Image
							src={icons.envelope}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/> */}
						<input
							type="text"
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
						{/* <Image
							src={icons.envelope}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/> */}
						<input
							type="text"
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
							type="text"
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
							className="input-img p-[4px]"
						/>
					</div>
				</div>
				{/* DueDate */}
				<div className="input-block">
					<label>DueDate</label>
					<div className="icon-input">
						<input
							type="text"
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
							className="input-img  p-[4px]"
						/>
					</div>
				</div>
				{/* Assignees */}
				<div className="input-block">
					<label>Assignees</label>
					<div className="icon-input">
						<input
							type="text"
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
							className="input-img p-[4px]"
						/>
					</div>
				</div>
				{admin && <>{/* Business */}
				<div className="input-block">
					<label>Business</label>
					<div className="icon-input">
						<input
							type="text"
							name="business"
							placeholder="Choose Business"
							value={business}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
						<Image
							src={icons.caret}
							w={20}
							h={20}
							alt="mail"
							className="input-img p-[4px]"
						/>
					</div>
				</div>
				{/* Status */}
				<div className="input-block">
					<label>Status</label>
					<div className="icon-input">
						<input
							type="text"
							name="status"
							placeholder="in progress"
							value={status}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
						<Image
							src={icons.caret}
							w={20}
							h={20}
							alt="mail"
							className="input-img p-[4px]"
						/>
					</div>
				</div></>}
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
