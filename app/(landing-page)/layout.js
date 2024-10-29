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

export default function LandingLayout({ children }) {
	return (
		<div className="relative w-full">
			<div className="relative">{children}</div>
			<Navbar />
			<Footer />
		</div>
	);
}
