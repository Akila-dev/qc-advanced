'use client';

import React from 'react';
import Link from 'next/link';
import { LinkButton } from '@/components';

const AuthAbout = ({ title, subheading, text, linkText, link }) => {
	return (
		<div className={`lg:p-10 h-screen no-scrollbar`}>
			<div className="h-[15vh] lg:h-auto flex-center text-center lg:pb-7">
				<h1 className="">{title}</h1>
			</div>
			<div className="dashboard-content-box max-w-[900px] py-5 lg:py-7 overflow-hidden !pointer-events-auto">
				<div className="h-full overflow-auto !pointer-events-auto">
					<div className="flex flex-col items-center px-4 lg:px-7">
						<h2 className="text-left w-full">{subheading}</h2>
						<div className="space-y-2 py-2">
							{text.map((p, index) => (
								<p key={index}>{p}</p>
							))}
						</div>
						<div className="w-full flex md:max-w-[250px] pt-3">
							<LinkButton link={link} text={linkText} />
						</div>
						<div className="popup-pb" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthAbout;
