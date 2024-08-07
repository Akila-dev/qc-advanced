'use client';
import { useState } from 'react';
import Image from 'next/image';

import { images, icons } from '../../constants';
import { IconPopupWrapper } from '../../wrappers';
import { InputField } from '../../components';

const AddInvitee = ({ close }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [inviteSent, setInviteSent] = useState(false);

	const { currentPassword, newPassword, confirmPassword } = formData;

	const submitForm = () => {
		setInviteSent(true);
		console.log(formData);
	};

	return (
		<div className="flex flex-col gap-3">
			{/* Name */}
			<InputField
				label="Name"
				icon={icons.lock}
				type="text"
				placeholder="Enter your name"
				formData={formData}
				setFormData={setFormData}
				nameValue="name"
			/>
			{/* Email */}
			<InputField
				label="Email"
				icon={icons.lock}
				type="email"
				placeholder="Enter User Email"
				formData={formData}
				setFormData={setFormData}
				nameValue="email"
			/>
			{/* New Password */}
			<InputField
				label="Password"
				icon={icons.lock}
				type="password"
				placeholder="Password"
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
			<div className="pt-5">
				<button
					type="button"
					onClick={() => submitForm()}
					className="btn-1 !max-w-[300px]"
				>
					save
				</button>
			</div>
			{inviteSent && (
				<IconPopupWrapper
					icon={images.checkmark}
					title="Invite Sent"
					text="Your Assignee would receive an invite email shortly"
					smallIcon
					className="!bg-transparent"
				>
					<button onClick={close} className="btn-1 mt-5">
						OK
					</button>
				</IconPopupWrapper>
			)}
		</div>
	);
};

export default AddInvitee;
