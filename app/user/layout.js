import Image from 'next/image';
import { images } from '../../constants';
import { DashboardSideNav } from '../../components';

export const metadata = {
	title: 'Choose Your Business',
	description: 'QC Authentication',
};

export default function RootLayout({ children }) {
	return (
		<div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			<div className="relative w-full min-h-screen">
				<div className="hidden lg:block fixed top-0 left-0 h-screen w-[250px] bg-[--white]">
					<DashboardSideNav />
				</div>
				<div className="lg:pl-[250px]">{children}</div>
			</div>
			<div className="w-full h-full absolute top-0 left-0 -z-10">
				<Image
					src={images.bg}
					alt="background"
					className="w-full h-full object-cover"
				/>{' '}
			</div>
		</div>
	);
}
