'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { images, icons } from '../../../constants';
import { ActionCard, AddAction, ActionDetails } from '../../../components';
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
	const [showDetails, setShowDetails] = useState(false);

	const showActionDetails = (i) => {
		setShowDetails(true);
	};

	return (
		<div className="lg:px-10">
			<h1 className="h-[15vh] flex-center text-center">Actions</h1>
			<div className="dashboard-content-box">
				<div className="md:p-8 !pb-0">
					<div>
						<button
							onClick={() => setAddAction(true)}
							className="fixed bottom-[100px] right-4 !w-[60px] h-[60px] btn-1 !rounded-full gap-2 flex items-center justify-center !shadow-lg z-0 lg:relative lg:bottom-auto lg:right-0  lg:!w-auto lg:!h-auto lg:!rounded-lg"
						>
							<HiOutlinePlusSm className="text-[--white] text-3xl md:text-xl" />
							<span className="pr-1 hidden lg:block">Add Action</span>
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
							onClick={() => showActionDetails(i)}
						/>
					))}
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => showActionDetails(i)}
						/>
					))}
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => showActionDetails(i)}
						/>
					))}
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => showActionDetails(i)}
						/>
					))}
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => showActionDetails(i)}
						/>
					))}
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => showActionDetails(i)}
						/>
					))}
					{actions.map(({ title, time, assignee, tag }, i) => (
						<ActionCard
							key={i}
							title={title}
							time={time}
							assignee={assignee}
							tag={tag}
							onClick={() => showActionDetails(i)}
						/>
					))}
				</div>

				<div className="pb" />
			</div>
			{addAction && (
				<SidePopupWrapper close={() => setAddAction(false)} title="Add Action">
					<AddAction close={() => setAddAction(false)} />
				</SidePopupWrapper>
			)}
			{showDetails && (
				<SidePopupWrapper
					close={() => setShowDetails(false)}
					title=""
					otherIcon={icons.options}
				>
					<ActionDetails close={() => setAddAction(false)} />
				</SidePopupWrapper>
			)}
		</div>
	);
}
