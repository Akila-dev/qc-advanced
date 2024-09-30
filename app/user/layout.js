import Image from 'next/image';
import { images } from '../../constants';
import { DashboardSideNav, MobileBottomNav } from '../../components';

export const metadata = {
	title: 'Choose Your Business',
	description: 'QC Authentication',
};

export default function RootLayout({ children }) {
	return (
		<div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			<div className="relative w-full min-h-screen">
				<div className="hidden md:block fixed top-0 left-0 h-screen w-[250px] bg-[--white]">
					<DashboardSideNav type="user" />
				</div>
				<div className="md:ml-[250px] relative">{children}</div>
				<div className="md:hidden fixed bottom-0 left-0 h-[70px] w-full bg-[--white] border-t border-[--gray]">
					<MobileBottomNav type="admin" />
				</div>
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
