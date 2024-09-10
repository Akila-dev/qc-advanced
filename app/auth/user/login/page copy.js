'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IconBoxWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';
import { InputField } from '../../../../components';

export default function LogIn() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;

	const router = useRouter();
	const submitForm = () => {
		console.log(formData);
		router.push('/user');
	};

	return (
		<IconBoxWrapper
			icon={images.arrow}
			title="Login to Your Account"
			text="Please login to continue"
			className=""
		>
			<div className="flex flex-col items-center justify-center w-full max-w-[350px] gap-5">
				<div className="w-full space-y-3 py-[25px]">
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
					{/* Password */}
					<InputField
						label="Password"
						icon={icons.lock}
						type="password"
						placeholder="password"
						formData={formData}
						setFormData={setFormData}
						nameValue="password"
					/>
				</div>
				<button onClick={() => submitForm()} className="btn-1">
					login
				</button>
			</div>
		</IconBoxWrapper>
	);
}
