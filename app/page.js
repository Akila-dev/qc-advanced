import Image from 'next/image';
import { icons, images } from '../constants';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Image src={icons.arrowLeft} w={20} h={20} alt="test" />
			<h1 className="">Hello I am testing</h1>
			<p>Hello I am testing</p>
			<Image src={images.arrow} w={20} h={20} alt="test" />
		</main>
	);
}
