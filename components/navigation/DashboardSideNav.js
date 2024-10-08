'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { images, icons } from '../../constants';
import { SideNavIcons } from '../../components/svgs';

// BACKEND AND APIS
import { useSession } from 'next-auth/react';

const menu = [
	{
		label: 'Dashboard',
		link: '',
	},
	{
		label: 'Action',
		link: '/action',
	},
	{
		label: 'Training',
		link: '/training',
	},
	{
		label: 'Settings',
		link: '/settings',
	},
];

const DashboardSideNav = ({ type }) => {
	const path = usePathname();

	const { data: session } = useSession();

	return (
		<div className="h-screen w-full">
			<div className="w-full h-full flex flex-col items-center p-5 gap-[50px] ">
				<div className="w-[120px] h-[120px]">
					<Image
						src={images.logoFull}
						w={70}
						h={70}
						alt="QC advanced"
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="w-full space-y-2">
					{menu.map(({ label, link }, i) => (
						<Link
							key={i}
							href={`/${type}${link}`}
							className={
								path === `/${type}` + link
									? 'sidenav-link !bg-[--brand] !text-[--white] hover:!bg-[--brand] hover:!text-[--white] shadow'
									: 'sidenav-link'
							}
						>
							<SideNavIcons
								i={i}
								color={path === `/${type}` + link ? '#ffffff' : '#777e90'}
							/>
							<span>{label}</span>
						</Link>
					))}
				</div>

				<div className="w-full absolute bottom-0 flex gap-3 font-medium text-[--black] items-center px-5 pb-8">
					{session ? (
						<>
							{type === 'admin' ? (
								<button className={`w-[45px] min-w-[45px]`}>
									<Image
										src={session?.user?.image}
										width={50}
										height={50}
										alt="log out"
										className="w-[45px] h-[45px] rounded-full object-cover object-top"
									/>
								</button>
							) : (
								<button
									className={`w-[45px] min-w-[45px] h-[45px] rounded-full bg-[--brand] flex-center`}
								>
									<h2 className="text-[--white] uppercase">
										{session?.user?.name.substr(0, 2)}
									</h2>
								</button>
							)}
							<div className="w-full">
								<h3 className="text-base truncate w-[150px]">
									{session?.user?.name || 'Not Named'}
								</h3>
								<p className="text-sm truncate w-[150px]">
									{session?.user?.email}
								</p>
							</div>
						</>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardSideNav;
