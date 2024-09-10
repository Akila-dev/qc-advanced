'use client';
import { useState, useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// CLIENT COMPONENTS
import { IconBoxWrapper } from '@/wrappers';
import { images, icons } from '@/constants';
import {
	InputFieldRHF,
	FormError,
	FormSuccess,
	SubmitButton,
} from '@/components';

// SERVER COMPONENTS
import { userLogin } from '@/actions/userLogin';
import { LoginSchema } from '@/schemas';

export default function LogIn() {
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	// const router = useRouter();
	// router.push('/user');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(LoginSchema),
	});

	const onSubmit = (values) => {
		setError('');
		setSuccess('');

		console.log(values);
		startTransition(() => {
			userLogin(values).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};

	return (
		<IconBoxWrapper
			icon={images.arrow}
			title="Login to Your Account"
			text="Please login to continue"
			className=""
		>
			<form
				onSubmit={handleSubmit((d) => onSubmit(d))}
				className="flex flex-col items-center justify-center w-full max-w-[350px] gap-5"
			>
				<div className="w-full space-y-3 py-[5px]">
					{/* Email */}
					<InputFieldRHF
						label="Email"
						icon={icons.envelope}
						type="mail"
						placeholder="mail@mail.com"
						rhf={{ ...register('email') }}
						error={errors.email?.message}
					/>
					{/* Password */}
					<InputFieldRHF
						label="Password"
						icon={icons.lock}
						type="password"
						placeholder="password"
						rhf={{ ...register('password') }}
						error={errors.password?.message}
					/>
				</div>
				{error && <FormError message={error} />}
				{success && <FormSuccess message={success} />}

				<SubmitButton text="login" />
			</form>
		</IconBoxWrapper>
	);
}
