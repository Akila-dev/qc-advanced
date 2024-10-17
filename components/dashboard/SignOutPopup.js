'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { IconPopupWrapper } from '@/wrappers';
import { images } from '@/constants';
import { FormError, FormSuccess, Button } from '@/components';

const SignOutPopup = ({ close }) => {
	const router = useRouter();
	const [isPending, setIsPending] = useState();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const callSignOut = () => {
		setError('');
		setSuccess('');

		setIsPending(true);

		signOut('credentials').then(({ ok, error }) => {
			if (ok) {
				setIsPending(false);
				setSuccess('Logout Successful');
				router.push(`/`);
			} else {
				setIsPending(false);
				setError('Logout Failed');
			}
		});
	};

	return (
		<IconPopupWrapper
			icon={images.query}
			title={`Logout`}
			text={`Are you sure you want to logout?`}
			smallIcon
			className={isPending && 'pointer-events-none'}
		>
			<div className={`space-y-3 pt-3 w-full ${isPending && 'pending'}`}>
				{error && <FormError message={error} />}
				{success && <FormSuccess message={success} />}

				<div className="grid grid-cols-2 gap-3 w-[80%] mx-auto">
					<Button onClick={close} text="no" noBg />
					<Button
						onClick={() => callSignOut()}
						text="Yes"
						sm
						submitting={isPending}
					/>
				</div>
			</div>
		</IconPopupWrapper>
	);
};

export default SignOutPopup;