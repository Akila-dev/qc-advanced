'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { images } from '@/constants';
import { SignOutPopup, Button } from '@/components';
import { IconPopupWrapper } from '@/wrappers';

export default function AuthLayout({ children }) {
	const [showLogout, setShowLogout] = useState(false);
	const { data: session } = useSession();

	return (
		<div className="relative w-full flex items-center justify-center bg-pattern bg-cover bg-fixed">
			<div className="relative w-full flex items-center justify-center p-0 md:px-[50px] min-h-screen">
				{children}
			</div>
			{session && (
				<div className="fixed top-0 left-0 w-full h-screen !z-10">
					<IconPopupWrapper
						icon={images.logout}
						title={`Can't View Page`}
						// text={`You are logged in as ${
						// 	session?.user?.role === 'admin' ? 'an admin' : 'a user'
						// }. Logout first`}
						smallIcon
					>
						<div className={`space-y-3 pt-3 w-full`}>
							<p className="text-center w-[90%] mx-auto">
								You are logged in as{' '}
								{session?.user?.role === 'admin' ? 'an admin' : 'a user'}.<br />
								<span className="text-[--brand]">Logout first</span>
							</p>
							<div className="grid grid-cols-2 gap-3 w-[90%] mx-auto">
								<Button
									link={`/${session?.user?.role}`}
									text="Dashboard"
									noBg
								/>
								<Button onClick={() => setShowLogout(true)} text="Logout" sm />
							</div>
						</div>
						{showLogout && (
							<SignOutPopup noBg close={() => setShowLogout(false)} />
						)}
					</IconPopupWrapper>
				</div>
			)}
		</div>
	);
}
