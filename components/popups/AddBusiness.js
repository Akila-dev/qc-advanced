'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import {
	DragDropFile,
	SelectInput,
	InputField,
	MiniAddMedia,
} from '../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../wrappers';

const AddBusiness = ({ close, nextPopup }) => {
	const [showAddMedia, setShowAddMedia] = useState(false);
	const [formData, setFormData] = useState({
		businessImage: '',
		businessName: '',
		businessEmail: '',
		businessLocation: '',
	});

	const { businessImage, businessName, businessEmail, businessLocation } =
		formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const submitForm = (type) => {
		// Should add this to redux or zustnd
		console.log(formData);
		nextPopup();
	};

	return (
		<SidePopupWrapper title="Add Business" close={close}>
			<div className={'h-full w-full py-5 px-4 lg:p-7 space-y-8'}>
				<div className="w-full space-y-4">
					{/* Upload Document */}
					<div className="input-block">
						<label>Business Image</label>
						<button
							onClick={() => setShowAddMedia(true)}
							className="flex-center !gap-1 flex-col border-2 border-dashed  border-[--border] rounded-lg p-6 lg:p-8"
						>
							<Image
								src={icons.gallery}
								alt="Business image"
								className="min-w-[25px] max-w-[25px] h-[25px] object-contain"
							/>
							<p className="black-text">Upload image of your business</p>
						</button>
					</div>
					{/* Business Name */}
					<InputField
						label="Business Name"
						icon={icons.user1}
						type="text"
						placeholder="Enter Business Name"
						formData={formData}
						setFormData={setFormData}
						nameValue="businessName"
					/>
					{/* Business Email */}
					<InputField
						label="Business Email"
						icon={icons.envelope}
						type="text"
						placeholder="Enter Business Email"
						formData={formData}
						setFormData={setFormData}
						nameValue="businessEmail"
					/>
					{/* Business location */}
					<InputField
						label="Business Location"
						icon={icons.envelope}
						type="text"
						placeholder="Enter Business Location"
						formData={formData}
						setFormData={setFormData}
						nameValue="businessLocation"
					/>
				</div>

				<div className="w-full">
					<button onClick={() => submitForm()} className="btn-1 block">
						add
					</button>
				</div>
				<div className="popup-pb" />
			</div>

			{showAddMedia && (
				<TitlePopupWrapper
					title="Upload Photo"
					close={() => setShowAddMedia(false)}
				>
					<MiniAddMedia
						close={() => setShowAddMedia(false)}
						single
						formData={formData}
						setFormData={setFormData}
						valueName="businessImage"
					/>
				</TitlePopupWrapper>
			)}
		</SidePopupWrapper>
	);
};

export default AddBusiness;
