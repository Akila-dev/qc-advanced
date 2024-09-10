import Image from 'next/image';
import Link from 'next/link';

import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

import { images } from '../../constants';
import { Navbar, Footer } from '../../components';

export const metadata = {
	title: 'Choose Your Business',
	description: 'QC Authentication',
};

// For testing only
const LoginButton = async () => {
	const session = await getServerSession(options);
	if (session) {
		console.log(session);
	}
	return (
		<div>
			<div>
				{session ? (
					<div className="flex-v-center flex-col lg:flex-row lg:justify-end min-w-[220px] gap-[5vh] lg:!gap-2">
						<p className="!text-[--black] !leading-[120%] btn-1-v2 !bg-transparent pointer-events-none">
							Logged In As{' '}
							<span className="inline-block capitalize text-[--brand]">
								{session?.user?.role}
							</span>
						</p>
						<div>
							<Link
								href="/api/auth/signout?callbackUrl=/"
								className="btn-1-v2 !capitalize"
							>
								Logout
							</Link>
						</div>
					</div>
				) : (
					<div className="flex-v-center justify-end min-w-[220px] !gap-2 !hidden lg:!flex">
						<Link
							href="/api/auth/signin"
							className="btn-2-v2 !bg-transparent hover:!bg-[--card] !capitalize"
						>
							Sign In
						</Link>
						<Link href="/auth" className="btn-1-v2 !capitalize">
							Sign Up
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default function RootLayout({ children }) {
	return (
		<div className="relative w-full">
			<div className="">{children}</div>
			<Navbar loginButton={<LoginButton />} />
			<Footer />
		</div>
	);
}
