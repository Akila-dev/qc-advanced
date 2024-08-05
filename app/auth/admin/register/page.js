'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IconBoxWrapper, IconPopupWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';
import { SelectInput, InputField, Checkbox } from '../../../../components';

export default function Register() {
	const [acceptedTO, setAcceptedTO] = useState(false);
	const [formData, setFormData] = useState({
		profileImg: '',
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
		profileImg,
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

	const router = useRouter();
	const submitForm = () => {
		console.log(formData);
		router.push('/auth/admin/verify-register');
	};

	return (
		<IconBoxWrapper
			title="Create New Account"
			text="Enter your details below"
			className=""
			profile
			formData={formData}
			setFormData={setFormData}
			valueName="profileImg"
		>
			<div className="flex flex-col items-center justify-center w-full md:min-w-[600px] lg:min-w-[650px] gap-5">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 py-5">
					<div className="hidden md:block h-[50px] bg-[--white] absolute top-[50px] left-0 w-full rounded-t-[--rounding]" />
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
						additionalClassName="md:col-span-2"
					/>

					{/* Password */}
					<InputField
						label="Password"
						icon={icons.lock}
						type="password"
						placeholder="Enter Password"
						formData={formData}
						setFormData={setFormData}
						nameValue="password"
					/>
					{/* Confirm Password */}
					<InputField
						label="Confirm Password"
						icon={icons.lock}
						type="password"
						placeholder="Confirm Password"
						formData={formData}
						setFormData={setFormData}
						nameValue="confirmPassword"
					/>
				</div>
				{/* T & C */}
				<div className="flex md:items-center md:justify-center gap-2 w-full">
					<Checkbox toggle={setAcceptedTO} toggled={acceptedTO} />
					<p>
						I agree to <b>Privacy Policy</b> and <b>Terms & Conditions</b>
					</p>
				</div>
				<button
					onClick={() => submitForm()}
					className={`btn-1 mb-5 !max-w-[300px] ${
						acceptedTO
							? 'opacity-100 pointer-events-auto'
							: 'opacity-70 pointer-events-none'
					}`}
				>
					register
				</button>
				<div className="h-[20px] bg-[--white] absolute bottom-0 left-0 w-full rounded-b-[--rounding]" />
			</div>
		</IconBoxWrapper>
	);
}
