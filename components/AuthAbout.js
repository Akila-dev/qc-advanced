import React from 'react';
import Link from 'next/link';

const AuthAbout = ({ title, subheading, text, linkText, link }) => {
	return (
		<div className={`lg:p-10 h-screen overflow-auto no-scrollbar`}>
			<div className="h-[50px] lg:h-auto flex-center text-center lg:pb-7">
				<h1 className="">{title}</h1>
			</div>
			<div className="dashboard-content-box max-w-[900px] py-5 lg:py-7 !overflow-hidden md:!h-auto">
				<div className="h-full overflow-auto">
					<div className="flex flex-col items-center space-y-5 px-4 lg:px-7">
						<h3 className="text-left w-full">{subheading}</h3>
						<div className="space-y-5">
							{text.map((p, index) => (
								<p key={index}>{p}</p>
							))}
						</div>
						<div className="w-full flex md:max-w-[250px] md:pt-2">
							<Link href={link} className="btn-1">
								{linkText}
							</Link>
						</div>
					</div>
				</div>
				<div className="popup-pb" />
			</div>
		</div>
	);
};

export default AuthAbout;
