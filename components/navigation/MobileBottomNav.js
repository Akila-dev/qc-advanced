'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { images, icons } from '../../constants';
import { SideNavIcons } from '../../components/svgs';

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

const MobileBottomNav = () => {
	const path = usePathname();

	return (
		<div className="w-full h-full">
			<div className="w-full grid grid-cols-4 px-4 gap-4">
				{menu.map(({ label, link }, i) => (
					<Link
						key={i}
						href={`/user${link}`}
						className={
							path === '/user' + link
								? 'bottomnav-link !border-[--brand] !text-[--brand]'
								: 'bottomnav-link'
						}
					>
						<SideNavIcons
							i={i}
							color={path === '/user' + link ? '#b62e32' : '#777e90'}
						/>
						<span>{label}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default MobileBottomNav;
