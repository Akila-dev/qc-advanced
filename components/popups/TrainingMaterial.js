'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { DragDropFile } from '../../components';

const TrainingMaterial = ({ close, className, edit, editId }) => {
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
				{/* Upload Document */}
				<div className="input-block">
					<label>Upload Document</label>
					<DragDropFile />
				</div>
				{/* Description */}
				<div className="input-block">
					<label>Job Description</label>
					<textarea
						placeholder="Add job description here..."
						className="textarea"
					/>
				</div>
				{/* Business */}
				<div className="input-block">
					<label>Business Type</label>
					<div className="icon-input">
						<input
							type="text"
							name="business"
							placeholder="Select Business Type"
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
			</div>

			<div className="w-full">
				{edit ? (
					<button onClick={close} className="btn-1 block">
						save
					</button>
				) : (
					<button onClick={close} className="btn-1 block">
						create
					</button>
				)}
			</div>
			<div className="popup-pb" />
		</div>
	);
};

export default TrainingMaterial;
