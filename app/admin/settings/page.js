'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

import { images, icons } from '@/constants';
import {
	ContactUs,
	PrivacyPolicy,
	TermsAndConditions,
	SettingsNavButton,
	EditProfile,
	ChangePassword,
	DeleteAccount,
	SignOutPopup,
	Loading,
	PurchaseMini,
} from '@/components';
import { SidePopupWrapper } from '@/wrappers';
import { SideNavIcons } from '@/components/svgs';
import AdminSettings from '@/containers/AdminSettings';

const navs = [
	{
		label: 'Edit Profile',
		icon: icons.profile,
		link: 'edit-profile',
	},
	{
		label: 'Change Password',
		icon: icons.passwordCheck,
		link: 'change-password',
	},
	{
		label: 'Privacy Policy',
		icon: icons.lock2,
		link: 'privacy-policy',
	},
	{
		label: 'Contact Us',
		icon: icons.profile2,
		link: 'contact-us',
	},
	{
		label: 'Terms & Conditions',
		icon: icons.noteList,
		link: 'terms-and-conditions',
	},
	{
		label: 'Subscriptions',
		icon: icons.category,
		link: 'pricing',
	},
	{
		label: 'Delete Account',
		icon: icons.trash,
		link: 'delete-account',
	},
	{
		label: 'Logout',
		icon: icons.logout,
	},
];

export default function Settings() {
	return (
		<Suspense>
			<AdminSettings />
		</Suspense>
	);
}
