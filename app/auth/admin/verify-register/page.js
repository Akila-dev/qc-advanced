'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IconBoxWrapper, IconPopupWrapper } from '../../../../wrappers';
import { OTPInput } from '../../../../components';
import { images, icons } from '../../../../constants';

export default function Verification() {
	const [isDone, setIsDone] = useState(false);
	const [formData, setFormDaformData] = useState({
		input1: '',
		input2: '',
		input3: '',
		input4: '',
	});

	const handleInputChange = (inputId, value) => {
		setFormDaformData((prevFormDaformData) => ({
			...prevFormDaformData,
			[inputId]: value,
		}));
	};

	const handleSubmit = () => {
		console.log(formData);
		setIsDone(true);
	};

	return (
		<IconBoxWrapper
			icon={images.query}
			title="Authentication"
			text="Enter the verification code we just sent to your email address."
			className=""
			back="/auth/admin/register"
		>
			<div className="flex flex-col items-center justify-center w-full max-w-[350px] gap-5">
				<div className="w-full space-y-3 py-[25px]">
					{/* OTP */}
					<div
						id="OTPInputGroup"
						className="grid grid-cols-4 gap-3"
						data-autosubmit="true"
					>
						<OTPInput
							id="input1"
							value={formData.input1}
							onValueChange={handleInputChange}
							// previousId={null}
							handleSubmit={handleSubmit}
							nextId="input2"
						/>
						<OTPInput
							id="input2"
							value={formData.input2}
							onValueChange={handleInputChange}
							previousId={formData.input1}
							handleSubmit={handleSubmit}
							nextId="input3"
						/>
						<OTPInput
							id="input3"
							value={formData.input3}
							onValueChange={handleInputChange}
							previousId={formData.input2}
							handleSubmit={handleSubmit}
							nextId="input4"
						/>
						<OTPInput
							id="input4"
							value={formData.input4}
							onValueChange={handleInputChange}
							previousId={formData.input3}
							handleSubmit={handleSubmit}
						/>
					</div>
				</div>
				<button onClick={() => handleSubmit()} className="btn-1">
					verify
				</button>
				<div className="pb-[50px] md:pb-[25px]" />
				<p className="text-[--black] absolute bottom-0 left-0 p-4 w-full text-center">
					{"Didn't receive the code?"}{' '}
					<Link href="/auth/admin/verification" className="text-[--brand]">
						Resend Code
					</Link>
				</p>
			</div>
			{isDone && (
				<IconPopupWrapper
					icon={images.congratulations}
					title="Congratulations"
					text="You have created your account successfully"
					smallIcon
				>
					<Link href="/auth/admin/purchase" className="btn-1 mt-5">
						OK
					</Link>
				</IconPopupWrapper>
			)}
		</IconBoxWrapper>
	);
}
