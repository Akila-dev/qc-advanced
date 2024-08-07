'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { SidePopupWrapper } from '../../wrappers';
import {
	SelectInput,
	DateTimePicker,
	InputField,
	SubChecklist,
} from '../../components';

const MyChecklist = ({ close, list, setChecklist, checklistId }) => {
	const [checklistData, setChecklistData] = useState(list[checklistId]);
	const { checklist, assignee, subChecklist } = checklistData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setChecklistData({ ...checklistData, [name]: value });
	};

	// FORM FUNCTIONS
	const updateChecklist = () => {
		let newData = [...list];
		newData[checklistId] = { ...checklistData, selected: true };
		setChecklist(newData);
		close();
	};

	return (
		<SidePopupWrapper title={list[checklistId].checklist} close={close} noBg>
			<div className={'h-full w-full py-5 px-4 lg:p-7 space-y-8'}>
				<div className="w-full space-y-4">
					<div className="icon-input">
						<Image
							src={icons.category}
							w={20}
							h={20}
							alt="checklist"
							className="input-img"
						/>
						<input
							type="text"
							name="checklist"
							value={list[checklistId].checklist}
							placeholder="Name your checklist"
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
					{/* Assignee */}
					<SelectInput
						label="Assignee"
						placeholder="Choose Assignee"
						options={['Low', 'Medium', 'High']}
						valueName="assignee"
						setFormData={setChecklistData}
						formData={checklistData}
						darkBg
					/>
					<SubChecklist
						formData={checklistData}
						setFormData={setChecklistData}
						nameValue="subChecklist"
						edit
					/>
				</div>
				<div className="w-full">
					<button onClick={() => updateChecklist()} className="btn-1 block">
						done
					</button>
				</div>
				<div className="popup-pb" />
			</div>
		</SidePopupWrapper>
	);
};

export default MyChecklist;
