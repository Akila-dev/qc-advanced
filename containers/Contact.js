import React from 'react';
import Link from 'next/link';

import { SectionBlock } from '@/components';
import { slideInBottom2 } from '@/constants/variants';
import { contactData } from '@/textData/landingPageData';

const Contact = () => {
	return (
		<div className="bg-[--black]">
			<div className="container py-[50px] lg:py-[80px] grid grid-cols-1 lg:grid-cols-2">
				<div>
					<SectionBlock
						tag="Our Solutions"
						heading="Get in Touch with us"
						text="Ready to elevate your restaurant's quality control? Contact us today to learn more about how QC Advanced can transform your operations.Integration, Expert Guidance  and Continuous Improvement."
						wrapperClasses="max-w-[525px] items-center text-center lg:items-start lg:text-left"
						makeWhite
					/>
					{/* <div>
						{contactData.map((dtl, i) => (
							<Link key={i} href={dtl.link}>
								<div></div>
							</Link>
						))}
					</div> */}
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Contact;
