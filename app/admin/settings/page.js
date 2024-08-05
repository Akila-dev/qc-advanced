'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../../constants';
import {
	ContactUs,
	PrivacyPolicy,
	TermsAndConditions,
	SettingsNavButton,
	EditProfile,
	ChangePassword,
	DeleteAccount,
} from '../../../components';
import { SidePopupWrapper } from '../../../wrappers';
import { SideNavIcons } from '../../../components/svgs';

const navs = [
	{
		label: 'Edit Profile',
		icon: icons.profile,
	},
	{
		label: 'Change Password',
		icon: icons.passwordCheck,
	},
	{
		label: 'Manage Checklist',
		icon: icons.checklist,
	},
	{
		label: 'Privacy Policy',
		icon: icons.lock2,
	},
	{
		label: 'Contact Us',
		icon: icons.profile2,
	},
	{
		label: 'Terms & Conditions',
		icon: icons.noteList,
	},
	{
		label: 'Delete Account',
		icon: icons.trash,
	},
	{
		label: 'Logout',
		icon: icons.logout,
	},
];

export default function Settings() {
	const [activeTab, setActiveTab] = useState(0);
	const [showPopup, setShowPopup] = useState(false);

	const openTab = (i) => {
		setActiveTab(i);
		setShowPopup(true);
	};

	return (
		<div className="md:p-10 h-screen overflow-auto scroll-2">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center lg:pb-7">
				Settings
			</h1>
			{/* DASHBOARD CONTENT */}
			<div className="dashboard-content-box lg:!h-full">
				<div className="flex w-full lg:h-full">
					<div className="w-full lg:max-w-[310px] lg:min-w-[310px] border-r border-[--border] p-4 lg:p-7 lg:space-y-3 overflow-auto">
						<h3 className="hidden lg:block">Settings</h3>
						<div className="flex w-full flex-col gap-3">
							{navs.slice(0, navs.length - 1).map((nav, i) => (
								<SettingsNavButton
									key={i}
									icon={nav.icon}
									label={nav.label}
									onClick={() => openTab(i)}
								/>
							))}
							<SettingsNavButton
								icon={navs[navs.length - 1].icon}
								label={navs[navs.length - 1].label}
								onClick={() => openTab(navs.length - 1)}
							/>
						</div>
					</div>
					<div className="hidden lg:flex p-7 w-full h-full">
						<div className="flex-1 border border-[--border] rounded-[--rounding] py-7 flex">
							<div className="flex-1 px-7 overflow-auto">
								{activeTab === 0 && <EditProfile />}
								{activeTab === 1 && <ChangePassword />}
								{activeTab === 3 && <PrivacyPolicy />}
								{activeTab === 4 && <ContactUs />}
								{activeTab === 5 && <TermsAndConditions />}
							</div>
						</div>
					</div>
				</div>

				<div className="pb lg:!hidden" />
			</div>
			<div className="lg:hidden">
				{showPopup && (
					<SidePopupWrapper
						title={navs[activeTab].label}
						close={() => setShowPopup(false)}
					>
						<div className="px-4 py-5">
							{activeTab === 0 && <EditProfile />}
							{activeTab === 1 && (
								<ChangePassword close={() => setShowPopup(false)} />
							)}
							{activeTab === 3 && <PrivacyPolicy />}
							{activeTab === 4 && <ContactUs />}
							{activeTab === 5 && <TermsAndConditions />}
						</div>
					</SidePopupWrapper>
				)}
			</div>
		</div>
	);
}
