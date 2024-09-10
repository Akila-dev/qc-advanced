'use client';
import Image from 'next/image';
import Link from 'next/link';

import { LinkButton } from '@/components';
import { IconBoxWrapper } from '@/wrappers';
import { images } from '@/constants';

export default function Choose() {
	return (
		<IconBoxWrapper
			icon={images.logo}
			title="Choose your Business"
			text="Please choose your business to login"
			className=""
			logo
		>
			<div className="flex items-center justify-center w-full py-[12vw] md:py-[30px]">
				<div className="flex flex-col items-center justify-center w-full md:max-w-[300px] gap-3 ">
					<LinkButton text="admin" link="auth/admin/about" className="btn-1" />
					<LinkButton text="user " link="auth/user/about" className="btn-2" />
					{/* <Link href="auth/admin/about" className="btn-1">
						admin
					</Link>
					<Link href="auth/user/about" className="btn-2">
						user
					</Link> */}
				</div>
			</div>
		</IconBoxWrapper>
	);
}
