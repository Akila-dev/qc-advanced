'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { DragDropFile, SelectInput, InputField } from '../../components';

const AddBusiness = ({ close, className, edit, editId }) => {
	const [formData, setFormData] = useState({
		title: '',
		trainingImages: [''],
		description: '',
		businessType: '',
	});

	const { title, trainingImages, description, businessType } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const submitForm = (type) => {
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
					placeholder="Enter title"
					formData={formData}
					setFormData={setFormData}
					nameValue="title"
				/>
				{/* Upload Document */}
				<div className="input-block">
					<label>Upload Document</label>
					<DragDropFile
						formData={formData}
						setFormData={setFormData}
						valueName="trainingImages"
					/>
				</div>
				{/* Description */}
				<InputField
					label="Job Description"
					// icon={icons.location}
					type="textarea"
					placeholder="Add job description here..."
					formData={formData}
					setFormData={setFormData}
					nameValue="description"
				/>
				{/* Business */}
				<SelectInput
					icon={icons.details}
					label="Business Type"
					options={[
						'Full Service Restaurant',
						'Quick Service Restaurant',
						'Cafe/Coffee Shop',
						'Food Truck',
						'Pop-up Station',
					]}
					valueName="businessType"
					setFormData={setFormData}
					formData={formData}
				/>
			</div>

			<div className="w-full">
				{edit ? (
					<button onClick={() => submitForm('save')} className="btn-1 block">
						save
					</button>
				) : (
					<button onClick={() => submitForm('create')} className="btn-1 block">
						create
					</button>
				)}
			</div>
			<div className="pb" />
		</div>
	);
};

export default AddBusiness;
