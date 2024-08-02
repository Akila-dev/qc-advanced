'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconBoxWrapper, IconPopupWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';
import { SelectInput } from '../../../../components';

export default function Register() {
	const [formData, setFormData] = useState({
		fName: '',
		lName: '',
		email: '',
		phoneNumber: '',
		businessName: '',
		businessType: '',
		address: '',
		password: '',
		confirmPassword: '',
	});

	const {
		fName,
		lName,
		email,
		phoneNumber,
		businessName,
		businessType,
		address,
		password,
		confirmPassword,
	} = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<IconBoxWrapper
			icon={images.lockApproved}
			title="Create New Account"
			text="Enter your details below"
			className=""
			profile
			profileImage={images.profile}
			changeProfile={() => console.log('change profile image')}
		>
			<div className="flex flex-col items-center justify-center w-full md:min-w-[600px] lg:min-w-[650px] gap-5">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 py-5">
					<div className="hidden md:block h-[50px] bg-[--white] absolute top-[50px] left-0 w-full rounded-t-[--rounding]" />
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

					{/* Password */}
					<div className="input-block">
						<label>Password</label>
						<div className="icon-input">
							<Image
								src={icons.lock}
								w={20}
								h={20}
								alt="mail"
								className="input-img"
							/>
							<input
								type="password"
								name="password"
								placeholder="New Password"
								value={password}
								onChange={handleChangeInput}
								className="input"
							/>
						</div>
					</div>
					{/* Confirm Password */}
					<div className="input-block">
						<label>Confirm Password</label>
						<div className="icon-input">
							<Image
								src={icons.lock}
								w={20}
								h={20}
								alt="mail"
								className="input-img"
							/>
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={handleChangeInput}
								className="input"
							/>
						</div>
					</div>
				</div>
				{/* T & C */}
				<div className="flex md:items-center md:justify-center gap-2 w-full">
					<input
						type="checkbox"
						className="min-w-[17.5px] max-w-[17.5px] h-[17.5px] mt-1 md:mt-0"
					/>
					<p>
						I agree to <b>Privacy Policy</b> and <b>Terms & Conditions</b>
					</p>
				</div>
				{/* <button
					onClick={() => console.log(formData)}
					className="btn-1 mb-5 !max-w-[300px]"
				>
					update
				</button> */}
				<Link
					onClick={() => console.log(formData)}
					href="/auth/admin/verify-register"
					className="btn-1 mb-5 !max-w-[300px]"
				>
					update
				</Link>
				<div className="h-[20px] bg-[--white] absolute bottom-0 left-0 w-full rounded-b-[--rounding]" />
			</div>
		</IconBoxWrapper>
	);
}
