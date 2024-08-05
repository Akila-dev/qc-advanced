'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconBoxWrapper, IconPopupWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';
import { InputField } from '../../../../components';

export default function ResetPassword() {
	const [isDone, setIsDone] = useState(false);
	const [formData, setFormData] = useState({
		password: '',
		confirmPassword: '',
	});
	const { password, confirmPassword } = formData;

	const submitForm = () => {
		console.log(formData);
		setIsDone(true);
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
					<InputField
						label="New Password"
						icon={icons.lock}
						type="password"
						placeholder="New Password"
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
				<button onClick={() => submitForm()} className="btn-1">
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
