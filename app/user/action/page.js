'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { images, icons } from '../../../constants';
import { ActionCard, AddAction, ActionDetails } from '../../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../../wrappers';
import { SideNavIcons } from '../../../components/svgs';

const overview = [
	{
		label: 'Pending Actions',
		value: 2,
	},
	{
		label: 'Due Soon',
		value: 1,
	},
	{
		label: 'Exceeded Due Date',
		value: 1,
	},
];

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

const colors = ['#2d2d2b08', '#2d2d2b08', '#f5edc7'];
const tags = ['all', 'due soon', 'exceeded due date'];

export default function Action() {
	const [activeAction, setActiveAction] = useState(0);
	const [addAction, setAddAction] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [optionsVisible, setOptionsVisible] = useState(false);

	const showActionDetails = (i) => {
		setActiveAction(i);
		setShowDetails(true);
	};

	// OPTIONS FUNCTIONS
	const shareAction = () => {
		console.log('Share Option:' + activeAction);
	};
	const deleteAction = () => {
		console.log('Delete Option:' + activeAction);
	};

	return (
		<div className="md:p-10 h-screen overflow-auto scroll-2">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center">Actions</h1>
			{/* OVERVIEW */}
			<div className="hidden lg:block min-h-[250px] w-full bg-white rounded-[--rounding] p-7 my-7">
				<div className="w-full h-full space-y-5">
					<div className="flex-v-center justify-between">
						<h1 className="text-[--black]">Overview</h1>

						<button
							onClick={() => setAddAction(true)}
							className="btn-1 gap-2 flex items-center justify-center shadow-md !shadow-[#00000044]  !w-auto"
						>
							<HiOutlinePlusSm className="text-[--white] text-3xl md:text-xl" />
							<span className="pr-1 hidden lg:block">Add Action</span>
						</button>
					</div>
					<div className="grid grid-cols-3 gap-5">
						{overview.map(({ label, value }, i) => (
							<div
								key={i}
								className={`p-5 rounded-xl`}
								style={{ background: colors[i] }}
							>
								<SideNavIcons i={1} color={'#2d2d2b'} w={35} />
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
				<div className="md:p-8 !pb-0">
					<div>
						<button
							onClick={() => setAddAction(true)}
							className="fixed bottom-[100px] right-4 md:right-12 !w-[60px] h-[60px] md:!w-[70px] md:h-[70px] btn-1 !rounded-full gap-2 flex items-center justify-center !shadow-xl md:!shadow-md !shadow-[#00000044] lg:hidden"
						>
							<HiOutlinePlusSm className="text-[--white] text-3xl md:text-3xl" />
						</button>
						<h2 className="hidden lg:block">Pending Actions</h2>
						<div className="hidden lg:flex items-center gap-2 pt-3">
							{tags.map((tag, i) => (
								<button
									key={i}
									className={
										i === 0 ? 'tag !border-[--brand] !text-[--brand]' : 'tag'
									}
								>
									{tag}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-4 py-5  md:pt-0 lg:p-8 lg:pt-5">
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
					otherFunc={() => setOptionsVisible(true)}
				>
					<ActionDetails close={() => setAddAction(false)} />
				</SidePopupWrapper>
			)}

			{optionsVisible && (
				<TitlePopupWrapper
					darkBg
					options
					close={() => setOptionsVisible(false)}
				>
					<div className="bg-[--card] border border-[--border] rounded-2xl flex flex-col w-full overflow-hidden">
						<button className="options-btn group" onClick={() => shareAction()}>
							<span className="group-hover:scale-110 group-hover:text-[--brand] inline-block transition duration-700">
								share
							</span>
						</button>
						<button
							className="options-btn group"
							onClick={() => deleteAction()}
						>
							<span className="group-hover:scale-110 group-hover:text-[--brand] inline-block transition duration-700">
								delete
							</span>
						</button>
					</div>
				</TitlePopupWrapper>
			)}
		</div>
	);
}
