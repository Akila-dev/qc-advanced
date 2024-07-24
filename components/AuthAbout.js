import React from 'react';
import Link from 'next/link';

const AuthAbout = ({ title, subheading, text, linkText, link }) => {
	return (
		<div className={`auth-container flex flex-col items-center`}>
			<div className="mt-[-30px] mb-[25px]">
				<h1 className="">{title}</h1>
			</div>
			<div className="bg-[--white] w-full rounded-t-[--rounding] md:rounded-[--rounding] md:h-[70vh] h-full py-5 md:py-7 max-w-[800px] shadow shadow-white">
				<div className="bg-[--white] w-full rounded-t-[--rounding] md:rounded-[--rounding] shadow-[--shadow] h-full px-5 md:px-7  overflow-auto md:pb-3">
					<div className="flex flex-col items-center space-y-5">
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
			</div>
		</div>
	);
};

export default AuthAbout;
