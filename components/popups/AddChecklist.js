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

const AddChecklist = ({ close, list, setChecklist }) => {
	const [checklistData, setChecklistData] = useState({
		checklist: '',
		assignee: '',
		subChecklist: [],
	});

	const { checklist, assignee, subChecklist } = checklistData;

	// FORM FUNCTIONS
	const addChecklist = () => {
		let newData = [...list];
		newData.push({ ...checklistData, selected: true });
		setChecklist(newData);
		close();
	};

	return (
		<SidePopupWrapper title="Add Checklist" close={close} noBg>
			<div className={'h-full w-full py-5 px-4 lg:p-7 space-y-8'}>
				<div className="w-full space-y-4">
					{/* Checklist */}
					<InputField
						icon={icons.category}
						label="Checklist"
						type="text"
						placeholder="Name your checklist"
						formData={checklistData}
						setFormData={setChecklistData}
						nameValue="checklist"
					/>
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
					/>
				</div>
				<div className="w-full">
					<button onClick={() => addChecklist()} className="btn-1 block">
						add
					</button>
				</div>
				<div className="popup-pb" />
			</div>
		</SidePopupWrapper>
	);
};

export default AddChecklist;
