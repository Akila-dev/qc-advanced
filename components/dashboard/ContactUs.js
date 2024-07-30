'use client';

import { useState } from 'react';
import Image from 'next/image';

import { images, icons } from '../../constants';

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const { name, email, subject, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div>
			<div className="space-y-5">
				<h2 className="hidden lg:block">Contact Us</h2>
				{/* Name */}
				<div className="input-block">
					<label>Name</label>
					<div className="icon-input">
						<Image
							src={icons.user1}
							w={20}
							h={20}
							alt="name"
							className="input-img"
						/>
						<input
							type="name"
							name="name"
							placeholder="name"
							value={name}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
					</div>
				</div>
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
							type="email"
							name="email"
							placeholder="email"
							value={email}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
					</div>
				</div>
				{/* Subject */}
				<div className="input-block">
					<label>Subject</label>
					<div className="icon-input">
						<Image
							src={icons.subtitle}
							w={20}
							h={20}
							alt="subject"
							className="input-img p-[0px]"
						/>
						<input
							type="subject"
							name="subject"
							placeholder="subject"
							value={subject}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
						<Image
							src={icons.caret}
							w={20}
							h={20}
							alt="subject"
							className="input-img p-[4px]"
						/>
					</div>
				</div>
				{/* Message */}
				<div className="input-block">
					<label>Message</label>
					<div className="icon-input">
						<Image
							src={icons.message}
							w={20}
							h={20}
							alt="message"
							className="input-img"
						/>
						<input
							type="message"
							name="message"
							placeholder="message"
							value={message}
							onChange={handleChangeInput}
							className="input placeholder:capitalize"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
