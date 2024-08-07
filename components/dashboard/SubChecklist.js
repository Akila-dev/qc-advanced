/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const SubChecklistBlock = ({ id, subChecklist, setSubChecklist, remove }) => {
	const [radioValue, setRadioValue] = useState(subChecklist[id].mediaType);
	const [questionValue, setQuestionValue] = useState(subChecklist[id].question);

	// Handle change question
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setQuestionValue(value);
		let newData = [...subChecklist];
		newData[id].question = value;
		// console.log(value);
		setSubChecklist(newData);
	};

	// handle media type change
	useEffect(() => {
		let newVal = [...subChecklist];
		newVal[id].mediaType = radioValue;
		// console.log(radioValue);
		setSubChecklist(newVal);
	}, [radioValue, id]);

	return (
		<div className="p-3 bg-[--card] rounded-lg">
			<div className="flex-v-center py-2 border-b border-[--border]">
				<input
					type="text"
					name="question"
					placeholder="Add question"
					// value={
					// 	subChecklist[id].question.length > 0
					// 		? subChecklist[id].question
					// 		: ''
					// }
					value={questionValue}
					onChange={handleChangeInput}
					className="input"
				/>
				<Image
					src={icons.deleteRed}
					onClick={remove}
					alt="Business image"
					className="min-w-[18px] max-w-[18px] h-auto object-contain cursor-pointer md:min-w-[20px] md:max-w-[20px]"
				/>
			</div>
			<div className="bg-[--highlight-bg-2] flex justify-between p-2 rounded-lg mt-2">
				{['camera', 'gallery', 'both'].map((option, i) => (
					<button
						key={i}
						onClick={() => setRadioValue(i)}
						className="flex-v-center !gap-2"
					>
						<div
							className={`w-[13px] h-[13px] max-w-[13px] min-w-[13px] border  p-[2px] rounded-full flex-center ${
								radioValue === i
									? 'border-[--brand] bg-transparent'
									: 'bg-[--gray] border-[--gray]'
							}`}
						>
							<span
								className={`${
									radioValue === i ? 'bg-[--brand]' : 'bg-[--gray]'
								} rounded-full w-full h-full`}
							/>
						</div>
						<p className="black-text">{option}</p>
					</button>
				))}
			</div>
		</div>
	);
};

const SubChecklist = ({ formData, setFormData, nameValue, edit }) => {
	const [subChecklist, setSubChecklist] = useState(
		edit
			? formData.subChecklist
			: [
					{
						question: '',
						mediaType: 0,
					},
			  ]
	);

	// console.log(subChecklist);

	const addSubChecklist = () => {
		setSubChecklist((prev) => [
			...prev,
			{
				question: '',
				mediaType: 0,
			},
		]);
	};

	const deleteSubChecklist = (i) => {
		let newData = [...subChecklist];
		let removed = newData.splice(i, 1);
		setSubChecklist((prev) => [...newData]);
		console.log(newData);
	};

	useEffect(() => {
		let newData = [...subChecklist];
		setFormData({ ...formData, [nameValue]: newData });
	}, [subChecklist]);

	return (
		<div className="w-full flex flex-col gap-3">
			<div className="flex-v-center !w-full">
				<label className="flex-1">Sub Checklist</label>
				<button
					onClick={() => addSubChecklist()}
					className="min-w-[30px] max-w-[30px] h-[30px] rounded-full bg-[--brand] flex-center md:min-w-[40px] md:max-w-[40px] md:h-[40px]"
				>
					<Image
						src={icons.plus}
						alt="Business image"
						className="w-[15px] h-[15px] object-contain"
					/>
				</button>
			</div>
			{subChecklist.map((item, i) => (
				<SubChecklistBlock
					key={i}
					id={i}
					subChecklist={subChecklist}
					setSubChecklist={setSubChecklist}
					remove={() => deleteSubChecklist(i)}
				/>
			))}
		</div>
	);
};

export default SubChecklist;
