'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiGlassesLine } from 'react-icons/ri';

import { images, icons } from '../../constants';
import { InspectionCard } from '../../components';
import { SideNavIcons } from '../../components/svgs';

const overview = [
	{
		label: 'Pending Inspections',
		value: 2,
	},
	{
		label: 'Pending Actions',
		value: 1,
	},
	{
		label: 'Archive',
		value: 1,
	},
];

const colors = ['#2d2d2b08', '#2d2d2b08', '#f5edc7'];

const inspections = [
	'Food',
	'Customer Service',
	'Communication',
	'Atmosphere',
	'flooring',
	'Tray Service',
];

export default function Dashboard() {
	const [activeInspection, setActiveInspection] = useState(0);
	return (
		<div className="lg:p-10 h-screen overflow-auto">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center">
				QC Advanced
			</h1>
			{/* OVERVIEW */}
			<div className="hidden lg:block w-full bg-white rounded-[--rounding] p-7 my-7">
				<div className="w-full h-full space-y-5">
					{/* <div className="flex justify-end gap-3">
						<button
							// onClick={() => setAddAction(true)}
							className="btn-1 gap-2 flex items-center justify-center shadow-md !shadow-[#00000044]  !w-auto"
						>
							<Image src={icons.archive} alt="archive" className="w-[px]" />
							<span className="pr-1 hidden lg:block">open archives</span>
						</button>
						<button
							// onClick={() => setAddAction(true)}
							className="btn-1 gap-2 flex items-center justify-center shadow-md !shadow-[#00000044]  !w-auto"
						>
							<Image src={icons.archive} alt="archive" className="w-[px]" />
							<span className="pr-1 hidden lg:block">open archives</span>
						</button>
					</div> */}
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
				<div className="w-full px-4 py-5 md:p-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
					{inspections.map((inspection, i) => (
						<InspectionCard
							key={i}
							title={inspection}
							percentage={0}
							completed={0}
							total={2}
							toggled={activeInspection === i}
							onClick={() => setActiveInspection(i)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
