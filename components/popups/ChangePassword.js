'use client';
import { useState } from 'react';
import Image from 'next/image';

import { images, icons } from '../../constants';
import { IconPopupWrapper } from '../../wrappers';
import { InputField } from '../../components';

const ChangePassword = ({ close }) => {
	const [formData, setFormData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [passwordSavedPopup, setPasswordSavedPopup] = useState(false);

	const { currentPassword, newPassword, confirmPassword } = formData;

	const submitForm = () => {
		setPasswordSavedPopup(true);
		console.log(formData);
	};

	return (
		<div className="flex flex-col gap-3">
			{/* Current Password */}
			<InputField
				label="Current Password"
				icon={icons.lock}
				type="password"
				placeholder="Current Password"
				formData={formData}
				setFormData={setFormData}
				nameValue="currentPassword"
			/>
			{/* New Password */}
			<InputField
				label="New Password"
				icon={icons.lock}
				type="password"
				placeholder="New Password"
				formData={formData}
				setFormData={setFormData}
				nameValue="newPassword"
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
			{passwordSavedPopup && (
				<IconPopupWrapper
					icon={images.lockApproved}
					title="Password Changed"
					text="Your password has been changed successfully"
					smallIcon
				>
					<button onClick={close} className="btn-1 mt-5">
						OK
					</button>
				</IconPopupWrapper>
			)}
		</div>
	);
};

export default ChangePassword;
