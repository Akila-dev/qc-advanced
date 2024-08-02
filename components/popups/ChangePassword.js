'use client';
import { useState } from 'react';
import Image from 'next/image';

import { images, icons } from '../../constants';
import { IconPopupWrapper } from '../../wrappers';

const ChangePassword = () => {
	const [formData, setFormData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [passwordSavedPopup, setPasswordSavedPopup] = useState(false);

	const { currentPassword, newPassword, confirmPassword } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const savePassword = () => {
		setPasswordSavedPopup(true);
	};

	return (
		<div className="flex flex-col gap-5">
			{/* Current Password */}
			<div className="input-block">
				<label>Current Password</label>
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
						name="currentPassword"
						placeholder="Current Password"
						value={currentPassword}
						onChange={handleChangeInput}
						className="input"
					/>
				</div>
			</div>
			{/* New Password */}
			<div className="input-block">
				<label>New Password</label>
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
						name="newPassword"
						placeholder="New Password"
						value={newPassword}
						onChange={handleChangeInput}
						className="input"
					/>
				</div>
			</div>
			{/* Confirm Password */}
			<div className="input-block">
				<label>Confirm New Password</label>
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
			<div className="pt-5">
				<button
					type="button"
					onClick={() => savePassword()}
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
					<button
						onClick={() => setPasswordSavedPopup(false)}
						className="btn-1 mt-5"
					>
						OK
					</button>
				</IconPopupWrapper>
			)}
		</div>
	);
};

export default ChangePassword;
