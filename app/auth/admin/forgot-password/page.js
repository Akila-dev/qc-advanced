'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconBoxWrapper } from '../../../../wrappers';
import { images, icons } from '../../../../constants';

export default function ForgotPassword() {
	const [formData, setFormData] = useState({
		email: '',
	});

	const { email } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
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
				</div>
				<Link href="/auth/admin/verification" className="btn-1">
					send
				</Link>
			</div>
		</IconBoxWrapper>
	);
}
