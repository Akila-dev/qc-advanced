import Image from 'next/image';
import { images } from '../../constants';

export const metadata = {
	title: 'Choose Your Business',
	description: 'QC Authentication',
};

export default function AuthLayout({ children }) {
	return (
		<div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			<div className="w-full h-full absolute top-0 left-0 z-[-1] pointer-events-none">
				<Image
					src={images.bg}
					alt="background"
					className="w-full h-full object-cover"
				/>{' '}
			</div>
			<div className="relative w-full flex items-center justify-center p-0 md:px-[50px] !z-10">
				{children}
			</div>
		</div>
	);
}
