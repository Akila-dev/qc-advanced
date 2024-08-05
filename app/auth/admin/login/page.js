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
		router.push('/admin');
	};

	return (
		<IconBoxWrapper
			icon={images.arrow}
			title="Login to Your Account"
			text="Please login to continue"
			className=""
		>
			<div className="flex flex-col items-center justify-center w-full max-w-[350px] gap-5">
				<div className="w-full space-y-3 py-[15px]">
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
					<div className="input-block">
						<InputField
							label="Password"
							icon={icons.lock}
							type="password"
							placeholder="password"
							formData={formData}
							setFormData={setFormData}
							nameValue="password"
						/>
						<div className="flex justify-end w-full">
							<Link
								href="/auth/admin/forgot-password"
								className="p !font-medium !text-[--black] hover:!text-[--brand]"
							>
								Forgot Password
							</Link>
						</div>
					</div>
				</div>
				<button onClick={() => submitForm()} className="btn-1">
					login
				</button>
				<div className="pb-[50px] md:pb-[15px]" />
				<p className="text-[--black] absolute bottom-0 left-0 p-4 w-full text-center">
					{"Don't have an account?"}{' '}
					<Link
						href="/auth/admin/register"
						className="text-[--brand] font-semibol"
					>
						Register
					</Link>
				</p>
			</div>
		</IconBoxWrapper>
	);
}
