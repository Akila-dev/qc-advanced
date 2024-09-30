import Image from 'next/image';
import Link from 'next/link';
import { icons, images } from '@/constants';
import { SmoothScroll } from '@/wrappers';

import {
	Header,
	About,
	OurSolutions,
	WhyChooseUs,
	Testimonials,
	Blogs,
	Contact,
} from '@/containers';
import { AppCTA, CardCTA } from '@/components';

export default function Home() {
	return (
		<SmoothScroll>
			<main className="flex flex-col gap-[50px] md:gap-[70px] xl:gap-[100px] landing overflow-auto snap-y snap-mandatory">
				<Header />
				<About />
				<CardCTA />
				<OurSolutions />
				<WhyChooseUs />
				<Testimonials />
				{/* <Blogs /> */}
				{/* <Contact /> */}
			</main>
		</SmoothScroll>
	);
}
