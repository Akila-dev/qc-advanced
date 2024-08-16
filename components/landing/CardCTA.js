import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { landingImages } from '../../constants';

const CardCTA = () => {
	return (
		<div className="container flex-center">
			<div className="max-w-[700px] h-[350px] relative">
				<div className="w-full h-full absolute">
					<Image
						src={landingImages.cardCta}
						alt="point"
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
				<div className="relative flex-center flex-col h-full text-center px-5 md:px-[50px] lg:px-[80px]">
					<h1 className="h1 !text-[--white]">Join the QC Advanced Community</h1>
					<p className="!text-[--white] italic">
						Become part of a community committed to quality and excellence.
						Explore our resources, connect with industry experts, and take your
						restaurant to the next level with QC Advanced.
					</p>
					<div className="pt-5">
						<Link href="/auth/admin/about" className="btn-1-v2">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardCTA;
