import Image from 'next/image';
import Link from 'next/link';
import { icons, images } from '../constants';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="flex-center flex-col max-w-[200px]">
				<Image src={images.logoFull} alt="QC Advanced" />
				<Link href="/auth" className="btn-1">
					Log In
				</Link>
			</div>
		</main>
	);
}
