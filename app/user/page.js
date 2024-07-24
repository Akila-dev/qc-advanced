'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { InspectionCard } from '../../components';

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
		<div className="lg:px-10">
			<h1 className="h-[15vh] flex items-center">QC Advanced</h1>
			<div className="dashboard-content-box flex gap-5">
				<div className="w-[300px] p-7 border-r border-[--gray] space-y-3">
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
