'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IconBoxWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';
import { InputField } from '../../../../components';

export default function ForgotPassword() {
	const [formData, setFormData] = useState({
		email: '',
	});
	const { email } = formData;

	const router = useRouter();
	const submitForm = () => {
		console.log(formData);
		router.push('/auth/admin/verification');
	};
	return (
		<IconBoxWrapper
			icon={images.lockQuery}
			title="Forgot Password?"
			text="No worries, we will help you to reset your password."
			className=""
			back="/auth/admin/login"
		>
			<div className="flex flex-col items-center justify-center w-full max-w-[350px] gap-10">
				<div className="w-full space-y-0 pt-[15px]">
					{/* Email */}
					<InputField
						label="Email"
						icon={icons.envelope}
						type="mail"
						placeholder="mail@mail.com"
						formData={formData}
						setFormData={setFormData}
						nameValue="email"
					/>
				</div>
				<button onClick={() => submitForm()} className="btn-1">
					send
				</button>
			</div>
		</IconBoxWrapper>
	);
}
