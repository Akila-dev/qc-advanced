'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { images, icons } from '../../../constants';
import { ActionCard, AddAction } from '../../../components';
import { SidePopupWrapper } from '../../../wrappers';

const actions = [
	{
		title: 'Maintenance',
		time: 'In 7 days',
		assignee: 'John',
		tag: 'Todo',
	},
	{
		title: 'Repair',
		time: '4 days ago',
		assignee: 'John',
		tag: 'Todo',
	},
];

export default function Action() {
	const [activeAction, setActiveAction] = useState(0);
	const [addAction, setAddAction] = useState(false);
	return (
		<div className="lg:px-10">
			<h1 className="h-[15vh] flex-center text-center">Actions</h1>
			<div className="dashboard-content-box">
				<div className="hidden md:flex p-8 pb-0">
					<div>
						<button
							onClick={() => setAddAction(true)}
							className="btn-1 flex-v-center !gap-2"
						>
							<HiOutlinePlusSm className="text-[--white] text-xl" />
							<span className="pr-1">Add Action</span>
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-5 px-4 py-5 lg:p-8">
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => console.log(i)}
						/>
					))}
				</div>
			</div>
			{addAction && (
				<SidePopupWrapper close={() => setAddAction(false)} title="Add Action">
					<AddAction />
				</SidePopupWrapper>
			)}
		</div>
	);
}
