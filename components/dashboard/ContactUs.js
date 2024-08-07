'use client';

import { useState } from 'react';
import Image from 'next/image';

import { SelectInput, InputField } from '../../components';
import { images, icons } from '../../constants';

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const { name, email, subject, message } = formData;

	const submitForm = () => {
		console.log(formData);
	};

	return (
		<div>
			<div className="flex flex-col gap-3">
				<h2 className="hidden lg:block">Contact Us</h2>
				{/* Name */}
				<InputField
					label="Name"
					icon={icons.user1}
					type="mail"
					placeholder="Enter name"
					formData={formData}
					setFormData={setFormData}
					nameValue="name"
				/>
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
				{/* Subject */}
				<SelectInput
					icon={icons.subtitle}
					label="Subject"
					placeholder="Choose a subject"
					options={[
						'Full Service Restaurant',
						'Quick Service Restaurant',
						'Cafe/Coffee Shop',
						'Food Truck',
						'Pop-up Station',
					]}
					valueName="subject"
					setFormData={setFormData}
					formData={formData}
					darkBg
				/>
				{/* Message */}
				<InputField
					label="Message"
					icon={icons.message}
					type="textarea"
					placeholder="Enter your Message"
					formData={formData}
					setFormData={setFormData}
					nameValue="message"
				/>
				<div className="pt-7 lg:pt-5">
					<button className="btn-1" onClick={() => submitForm()}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
