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
			title="Choose your Business"
			text="Please choose your business to login"
			className=""
		>
			<div className="flex flex-col items-center justify-center w-full max-w-[350px] gap-5">
				<div className="w-full space-y-3 py-[25px]">
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
								src={icons.envelope}
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
					</div>
				</div>
				<Link href="/user" className="btn-1">
					log in
				</Link>
			</div>
		</IconBoxWrapper>
	);
}
