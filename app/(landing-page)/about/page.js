'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { icons, images, landingImages } from '@/constants';
import { aboutData } from '@/textData/landingPageData';
import { SmoothScroll } from '@/wrappers';

import {
	HeaderAbout,
	About,
	OurValues,
	WhyChooseUs,
	Testimonials,
	Blogs,
	Contact,
} from '@/containers';
import { AppCTA, CardCTA, Loading, SectionBlock } from '@/components';
import { slideInBottom2 } from '@/constants/variants';

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return loading ? (
		<Loading />
	) : (
		<SmoothScroll>
			<main className="flex flex-col gap-[50px] md:gap-[80px] xl:gap-[100px] landing overflow-auto snap-y snap-mandatory">
				<HeaderAbout />
				<div className="flex flex-col gap-[50px] md:gap-[50px] xl:gap-[50px]">
					{aboutData.map(({ image, heading, text }, i) => (
						<div
							key={i}
							className={
								i % 2
									? 'container flex flex-col gap-[50px] md:flex-row-reverse overflow-hidden md:items-center'
									: 'container grid md:grid-cols-2 gap-[50px] items-center overflow-hidden'
							}
						>
							<motion.div
								initial="initial"
								exit="exit"
								whileInView="animate"
								variants={slideInBottom2}
								className="w-full h-[250px]"
							>
								<Image
									src={landingImages.cardCta}
									alt="our mission"
									width={800}
									height={400}
									className="w-full h-[250px]"
								/>
							</motion.div>
							<SectionBlock
								tag="ABOUT QC ADVANCED"
								heading={heading}
								text={text}
							/>
						</div>
					))}
				</div>

				<CardCTA
					header="Join the QC Advanced Community"
					desc="Become part of a community committed to quality and excellence.
						Explore our resources, connect with industry experts, and take your
						restaurant to the next level with QC Advanced."
				/>

				<OurValues />
				{/* <WhyChooseUs />
				<Testimonials /> */}
				{/* <Blogs /> */}
				<Contact />
			</main>
		</SmoothScroll>
	);
}
