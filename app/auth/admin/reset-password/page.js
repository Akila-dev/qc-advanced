'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconBoxWrapper, IconPopupWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';

export default function ResetPassword() {
	const [formData, setFormData] = useState({
		password: '',
		confirmPassword: '',
	});
	const [isDone, setIsDone] = useState(false);

	const { password, confirmPassword } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<IconBoxWrapper
			icon={images.lockApproved}
			title="Reset Password"
			text="Your new password must be different from previously used password."
			className=""
			back="/auth/admin/forgot-password"
		>
			<div className="flex flex-col items-center justify-center w-full max-w-[350px] gap-5">
				<div className="w-full space-y-3 py-[15px]">
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
				<button onClick={() => setIsDone(true)} className="btn-1">
					update
				</button>
			</div>
			{isDone && (
				<IconPopupWrapper
					icon={images.checkmark}
					title="All Done"
					text="Your password has been reset"
					smallIcon
				>
					<Link href="/auth/admin/login" className="btn-1 mt-8">
						OK
					</Link>
				</IconPopupWrapper>
			)}
		</IconBoxWrapper>
	);
}
