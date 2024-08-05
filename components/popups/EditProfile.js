'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { IconPopupWrapper } from '../../wrappers';
import { SelectInput, InputField } from '../../components';

export default function EditProfile() {
	const [formData, setFormData] = useState({
		fName: '',
		lName: '',
		email: '',
		phoneNumber: '',
		businessName: '',
		businessType: '',
		address: '',
	});
	const [savedPopup, setSavedPopup] = useState(false);

	const {
		fName,
		lName,
		email,
		phoneNumber,
		businessName,
		businessType,
		address,
	} = formData;

	const submitForm = () => {
		console.log(formData);
		setSavedPopup(true);
	};

	return (
		<div className="flex flex-col items-center justify-center w-full gap-5">
			<div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-3 py-0">
				{/* First Name */}
				<InputField
					label="First Name"
					icon={icons.user1}
					type="text"
					placeholder="John"
					formData={formData}
					setFormData={setFormData}
					nameValue="fName"
				/>
				{/* Last Name */}
				<InputField
					label="Last Name"
					icon={icons.user1}
					type="text"
					placeholder="Doe"
					formData={formData}
					setFormData={setFormData}
					nameValue="lName"
				/>
				{/* Email */}
				<InputField
					label="Email"
					icon={icons.envelope}
					type="mail"
					placeholder="user@mail.com"
					formData={formData}
					setFormData={setFormData}
					nameValue="email"
				/>
				{/* Phone Number */}
				<InputField
					label="Phone Number"
					icon={icons.mobile}
					type="text"
					placeholder="00000 00000"
					formData={formData}
					setFormData={setFormData}
					nameValue="phoneNumber"
				/>
				{/* Business Name */}
				<InputField
					label="Business Name"
					icon={icons.details}
					type="text"
					placeholder="Business Name"
					formData={formData}
					setFormData={setFormData}
					nameValue="businessName"
					additionalClassName=""
				/>
				{/* Business Type */}
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
					darkBg
				/>
				{/* Address */}
				<InputField
					label="Address"
					icon={icons.location}
					type="textarea"
					placeholder="Enter your Address"
					formData={formData}
					setFormData={setFormData}
					nameValue="address"
					additionalClassName="xl:col-span-2"
				/>
			</div>
			<button
				type="button"
				onClick={() => submitForm()}
				className="btn-1 md:mb-5 !max-w-[300px]"
			>
				save
			</button>
			{savedPopup && (
				<IconPopupWrapper
					icon={images.congratulations}
					title="Profile Updated"
					text="Your profile has been updated successfully"
					smallIcon
				>
					<button onClick={() => setSavedPopup(false)} className="btn-1 mt-5">
						OK
					</button>
				</IconPopupWrapper>
			)}
		</div>
	);
}
