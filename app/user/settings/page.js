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
} from '../../../components';
import { SidePopupWrapper } from '../../../wrappers';
import { SideNavIcons } from '../../../components/svgs';

const navs = [
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
		<div className="lg:p-10 h-screen overflow-auto scroll-2">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center lg:pb-7">
				Settings
			</h1>
			{/* DASHBOARD CONTENT */}
			<div className="dashboard-content-box lg:!h-full">
				<div className="flex w-full h-full">
					<div className="w-full lg:max-w-[300px] border-r border-[--border] p-4 lg:p-7 space-y-3">
						<h3 className="hidden lg:block">Settings</h3>
						<div className="space-y-4">
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
								{activeTab === 0 && <PrivacyPolicy />}
								{activeTab === 1 && <ContactUs />}
								{activeTab === 2 && <TermsAndConditions />}
							</div>
						</div>
					</div>
				</div>

				<div className="pb lg:!hidden" />
			</div>

			{/* {showDetails && (
				<SidePopupWrapper
					close={() => setShowDetails(false)}
					title={trainings[activeTraining].title}
					otherIcon={icons.download}
				>
					<TrainingDetails
						img={trainings[activeTraining].img}
						text={trainings[activeTraining].text}
						// title={trainings[activeTraining].title}
					/>
				</SidePopupWrapper>
			)} */}
			<div className="lg:hidden">
				{showPopup && (
					<SidePopupWrapper
						title={navs[activeTab].label}
						close={() => setShowPopup(false)}
					>
						<div className="px-4 py-5">
							{activeTab === 0 && <PrivacyPolicy />}
							{activeTab === 1 && <ContactUs />}
							{activeTab === 2 && <TermsAndConditions />}
						</div>
					</SidePopupWrapper>
				)}
			</div>
		</div>
	);
}
