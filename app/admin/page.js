'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiGlassesLine } from 'react-icons/ri';

import { images, icons } from '../../constants';
import {
	InspectionsList,
	BusinessCard,
	AddBusiness,
	SelectChecklist,
	AddChecklist,
	MyChecklist,
} from '../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../wrappers';

import { SideNavIcons } from '../../components/svgs';

const overview = [
	{
		label: 'Businesses',
		value: 2,
	},
	{
		label: 'Actions',
		value: 1,
	},
	{
		label: 'Archive',
		value: 1,
	},
];
const colors = ['#2d2d2b08', '#2d2d2b08', '#f5edc7'];

const businessData = [
	{
		img: images.business1,
		name: 'Business 1',
		email: 'business1@gmail.com',
		location: 'Istanbul',
	},
	{
		img: images.business2,
		name: 'Business 2',
		email: 'business2@gmail.com',
		location: 'Kenya',
	},
	{
		img: images.business3,
		name: 'Business 3',
		email: 'business3@gmail.com',
		location: 'Nigeria',
	},
];

export default function Dashboard() {
	//
	// ADD STORE VARIABLES
	const [showAddBusiness, setShowAddBusiness] = useState(false);
	const [showSelectChecklist, setShowSelectChecklist] = useState(false);
	const [showAddChecklist, setShowAddChecklist] = useState(false);
	const [showMyChecklist, setShowMyChecklist] = useState(false);

	// ADD A STORE FUNCTIONS
	const addBusiness = (i) => {
		setShowAddNote(true);
	};
	const updateBusiness = (i) => {
		setShowAddNote(true);
	};

	return (
		<div className="md:p-10 h-screen overflow-auto">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center">
				QC Advanced
			</h1>
			{/* OVERVIEW */}
			<div className="hidden lg:block w-full bg-white rounded-[--rounding] p-7 my-7">
				<div className="w-full h-full space-y-5">
					<h1 className="text-[--black]">Overview</h1>
					<div className="grid grid-cols-3 gap-5">
						{overview.map(({ label, value }, i) => (
							<div
								key={i}
								className={`p-5 rounded-xl`}
								style={{ background: colors[i] }}
							>
								{i === 0 && (
									<RiGlassesLine className="text-[2.8rem] bg-[--tag] rounded-full p-[6px] mb-[-6px]" />
								)}
								{i === 1 && <SideNavIcons i={1} color={'#2d2d2b'} w={35} />}
								{i === 2 && (
									<Image src={icons.trash} alt="archive" className="w-[35px]" />
								)}
								<p className="text-[--black] !font-semibold pt-5 pb-1">
									{label}
								</p>
								<h1 className="text-[--brand]">{value}</h1>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* DASHBOARD CONTENT */}
			<div className="dashboard-content-box">
				<div className="!hidden md:!flex p-7 pb-0 flex-v-center justify-between">
					<h1 className="text-[--black]">My Stores</h1>

					<button className="btn-1 gap-2 flex items-center justify-center shadow-md !shadow-[#00000044] !w-auto">
						<span className="pr-1">Add a Store</span>
					</button>
				</div>
				<div className="w-full px-4 py-5 md:p-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
					{businessData.map(({ img, name, email, location }, i) => (
						<BusinessCard
							key={i}
							img={img}
							name={name}
							email={email}
							location={location}
							onClick={() => showInspectionDetails(i)}
						/>
					))}
					<div className="md:hidden pt-4">
						<button className="btn-1">add a store</button>
						<div className="pb" />
					</div>
				</div>
			</div>

			{/* {showAddAction && (
				<TitlePopupWrapper title="Action" close={() => setShowAddAction(false)}>
					<MiniAddAction close={() => setShowAddAction(false)} />
				</TitlePopupWrapper>
			)} */}
		</div>
	);
}

{
	/* <InspectionCard
							key={i}
							title={inspection.title}
							percentage={0}
							completed={0}
							total={2}
							toggled={activeInspection === i}
							onClick={() => showInspectionDetails(i)}
						/> */
}
