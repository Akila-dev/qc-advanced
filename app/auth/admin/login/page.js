'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconBoxWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';

export default function LogIn() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
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
					<div className="input-block">
						<label>Email</label>
						<div className="icon-input">
							<Image
								src={icons.envelope}
								w={20}
								h={20}
								alt="mail"
								className="input-img"
							/>
							<input
								type="mail"
								name="email"
								placeholder="mail@mail.com"
								value={email}
								onChange={handleChangeInput}
								className="input"
							/>
						</div>
					</div>
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
								placeholder="password"
								value={password}
								onChange={handleChangeInput}
								className="input"
							/>
						</div>
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
				<Link href="/admin" className="btn-1">
					log in
				</Link>
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
