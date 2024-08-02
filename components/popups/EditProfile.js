'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { IconPopupWrapper } from '../../wrappers';
import { SelectInput } from '../../components';

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

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const saveProfile = () => {
		setSavedPopup(true);
	};

	return (
		<div className="flex flex-col items-center justify-center w-full gap-5">
			<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 py-0">
				{/* First Name */}
				<div className="input-block">
					<label>First Name</label>
					<div className="icon-input">
						<Image
							src={icons.user1}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/>
						<input
							type="text"
							name="fName"
							placeholder="First Name"
							value={fName}
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
				</div>
				{/* Last Name */}
				<div className="input-block">
					<label>Last Name</label>
					<div className="icon-input">
						<Image
							src={icons.user1}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/>
						<input
							type="text"
							name="lName"
							placeholder="Last Name"
							value={lName}
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
				</div>
				{/* Email */}
				<div className="input-block">
					<label>Email</label>
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
							name="email"
							placeholder="mail@mail.com"
							value={email}
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
				</div>
				{/* Phone Number */}
				<div className="input-block">
					<label>Phone Number</label>
					<div className="icon-input">
						<Image
							src={icons.mobile}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/>
						<input
							type="phone"
							name="phoneNumber"
							placeholder="XXXXX XXXXX"
							value={phoneNumber}
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
				</div>
				{/* Business Name */}
				<div className="input-block">
					<label>Business Name</label>
					<div className="icon-input">
						<Image
							src={icons.details}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/>
						<input
							type="text"
							name="businessName"
							placeholder="Business Name"
							value={businessName}
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
				</div>
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
				/>
				{/* Address */}
				<div className="input-block md:col-span-2">
					<label>Address</label>
					<div className="icon-input !items-start">
						<Image
							src={icons.location}
							w={20}
							h={20}
							alt="mail"
							className="input-img"
						/>
						<textarea placeholder="Address" className="textarea" />
					</div>
				</div>
			</div>
			<button
				type="button"
				onClick={() => saveProfile()}
				href="/auth/admin/verify-register"
				className="btn-1 mb-5 !max-w-[300px]"
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
