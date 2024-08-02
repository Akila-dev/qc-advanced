'use client';
import { useState } from 'react';
import Image from 'next/image';

import { images, icons } from '../../constants';

const DeleteAccount = () => {
	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	const { oldPassword, newPassword, confirmPassword } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<div>
			{/* Old Password */}
			<div className="input-block">
				<label>Old Password</label>
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
						name="oldPassword"
						placeholder="Old Password"
						value={oldPassword}
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
	);
};

export default DeleteAccount;
