'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { SidePopupWrapper } from '../../wrappers';
import { images, icons } from '../../constants';
import { AddChecklist, MyChecklist, InputCheckbox } from '../../components';
import { checklistData } from '../../dummyData/checkListData';

export default function SelectChecklist({ back, close }) {
	const [checklist, setChecklist] = useState([...checklistData]);
	const [showAddChecklist, setShowAddChecklist] = useState(false);
	const [showMyChecklist, setShowMyChecklist] = useState(false);
	const [checklistId, setChecklistId] = useState(0);
	const [formData, setFormData] = useState(checklist);

	const editChecklist = (i) => {
		setChecklistId(i);
		setShowMyChecklist(true);
	};

	const submitForm = () => {
		console.log(formData);
		close();
	};

	return (
		<>
			<SidePopupWrapper
				title="Select Checklist"
				close={back}
				noBg
				otherIcon={icons.plus2}
				otherFunc={() => setShowAddChecklist(true)}
			>
				<div className={'h-full w-full py-5 px-4 lg:p-7 space-y-8'}>
					<div className={'space-y-3'}>
						{checklist.map(({ checklist, selected }, i) => (
							<InputCheckbox
								key={i}
								text={checklist}
								toggled={selected}
								toggle={() =>
									setChecklist((prev) => {
										let newVal = prev;
										newVal[i].selected = !newVal[i].selected;
										setFormData(newVal);
										return newVal;
									})
								}
								editChecklist={() => editChecklist(i)}
							/>
						))}
					</div>
					<button className="btn-1" onClick={() => submitForm()}>
						save
					</button>
					<div className="popup-pb" />
				</div>
			</SidePopupWrapper>
			{showAddChecklist && (
				<AddChecklist
					close={() => setShowAddChecklist(false)}
					list={checklist}
					setChecklist={setChecklist}
				/>
			)}
			{showMyChecklist && (
				<MyChecklist
					close={() => setShowMyChecklist(false)}
					list={checklist}
					setChecklist={setChecklist}
					checklistId={checklistId}
				/>
			)}
		</>
	);
}
