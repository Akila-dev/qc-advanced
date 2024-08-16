import Image from 'next/image';

import { images } from '../../constants';
import { Navbar, Footer } from '../../components';

export const metadata = {
	title: 'Choose Your Business',
	description: 'QC Authentication',
};

export default function RootLayout({ children }) {
	return (
		<div className="relative w-full">
			<div className="">{children}</div>
			<Navbar />
			<Footer />
		</div>
	);
}
