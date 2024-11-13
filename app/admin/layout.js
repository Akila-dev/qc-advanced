import Image from 'next/image';
import { images } from '../../constants';
import { DashboardSideNav, MobileBottomNav } from '../../components';

export const metadata = {
	title: 'Admin Dashboard',
	description: 'QC Advanced Admin Dashboard',
};

export default function AdminLayout({ children }) {
	return (
		<div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			<div className="w-full h-full absolute top-0 left-0 -z-10 pointer-events-none">
				<Image
					src={images.bg}
					alt="background"
					className="w-full h-full object-cover"
				/>{' '}
			</div>
			<div className="relative w-full min-h-screen !z-10">
				<div className="hidden md:block fixed top-0 left-0 h-screen w-[250px] bg-[--white]">
					<DashboardSideNav type="admin" />
				</div>
				<div className="md:ml-[250px] relative h-full">{children}</div>
				<div className="md:hidden fixed bottom-0 left-0 h-[70px] w-full bg-[--white] border-t border-[--gray]">
					<MobileBottomNav type="admin" />
				</div>
			</div>
		</div>
	);
}
