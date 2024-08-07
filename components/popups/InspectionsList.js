'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiGlassesLine } from 'react-icons/ri';

import { images, icons } from '../../constants';
import {
	InspectionCard,
	InspectionDetails,
	MiniAddAction,
	MiniAddMedia,
	MiniAddNote,
	SelectChecklist,
	AddInvitee,
	InspectionsArchive,
} from '../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../wrappers';
import { inspectionData } from '../../dummyData/inspectionData';

import { SideNavIcons } from '../../components/svgs';

const invitedUsers = [
	{
		img: images.profile,
	},
];

export default function InspectionsList({ close, title }) {
	const [activeInspection, setActiveInspection] = useState(0);
	const [toggleInspectionDetails, setToggleInspectionDetails] = useState(false);
	const [showSelectChecklist, setShowSelectChecklist] = useState(false);
	const [showArchive, setShowArchive] = useState(false);
	const [invitees, setInvitees] = useState(invitedUsers);
	const [showAddInvitee, setShowAddInvitee] = useState(false);

	const showInspectionDetails = async (i) => {
		await setActiveInspection(i);
		await setToggleInspectionDetails(true);
	};

	// ADDING NOTES AND THE LIKES
	const [showAddNote, setShowAddNote] = useState(false);
	const [showAddMedia, setShowAddMedia] = useState(false);
	const [showAddAction, setShowAddAction] = useState(false);

	const openAddNote = (i) => {
		setShowAddNote(true);
	};
	const openAddMedia = (i) => {
		setShowAddMedia(true);
	};
	const openAddAction = (i) => {
		setShowAddAction(true);
	};
	return (
		<>
			<SidePopupWrapper
				title={title}
				close={close}
				otherIcon={icons.edit}
				otherFunc={() => setShowSelectChecklist(true)}
			>
				{/* DASHBOARD CONTENT */}
				<div className="w-full px-4 py-5 md:p-5 grid grid-cols-1 gap-3">
					<h2>Invite</h2>
					<div className="flex gap-3 w-full overflow-auto flex-nowrap no-scrollbar pb-2">
						{invitees.map(({ img }, i) => (
							<div
								key={i}
								className={`w-[50px] min-w-[50px] max-w-[50px] h-[50px]`}
							>
								<Image
									src={img}
									alt={'invited user ' + (i + 1)}
									className={`w-full h-full object-cover rounded-full`}
								/>
							</div>
						))}
						<button
							onClick={() => setShowAddInvitee(true)}
							className={`w-[50px] min-w-[50px] max-w-[50px] h-[50px] p-[10px] rounded-full border-2 border-dashed bg-[--highlight-bg-2]`}
						>
							<Image
								src={icons.user2}
								alt={'invite new user'}
								className={`w-full h-full object-cover`}
							/>
						</button>
					</div>
					<button
						onClick={() => setShowArchive(true)}
						className="flex-v-center py-3 px-[10px] md:px-2 !gap-2 bg-[--highlight-bg] border border-[--brand] rounded-lg"
					>
						<Image
							src={icons.archive}
							alt={'invite new user'}
							className={`w-[18px] min-w-[18px] max-w-[18px] h-auto object-cover md:w-[20px] md:min-w-[20px] md:max-w-[20px]`}
						/>
						<p className="black-text">Archive</p>
					</button>
					{inspectionData.map((inspection, i) => (
						<InspectionCard
							key={i}
							title={inspection.title}
							percentage={0}
							completed={0}
							total={2}
							toggled={activeInspection === i}
							onClick={() => showInspectionDetails(i)}
							sidebar
						/>
					))}
				</div>
			</SidePopupWrapper>
			{showAddNote && (
				<TitlePopupWrapper title="Add Note" close={() => setShowAddNote(false)}>
					<MiniAddNote close={() => setShowAddNote(false)} />
				</TitlePopupWrapper>
			)}
			{showAddMedia && (
				<TitlePopupWrapper
					title="Upload Photo"
					close={() => setShowAddMedia(false)}
				>
					<MiniAddMedia close={() => setShowAddMedia(false)} />
				</TitlePopupWrapper>
			)}
			{showAddAction && (
				<TitlePopupWrapper title="Action" close={() => setShowAddAction(false)}>
					<MiniAddAction close={() => setShowAddAction(false)} />
				</TitlePopupWrapper>
			)}
			{toggleInspectionDetails && (
				<SidePopupWrapper
					close={() => setToggleInspectionDetails(false)}
					title={inspectionData[activeInspection].title}
					noBg
				>
					<InspectionDetails
						data={inspectionData[activeInspection].data}
						addNote={openAddNote}
						addMedia={openAddMedia}
						addAction={openAddAction}
					/>
				</SidePopupWrapper>
			)}
			{showSelectChecklist && (
				<SelectChecklist
					back={() => setShowSelectChecklist(false)}
					close={() => {
						setShowSelectChecklist(false);
					}}
				/>
			)}
			{showAddInvitee && (
				<TitlePopupWrapper
					title="Invite"
					close={() => setShowAddInvitee(false)}
				>
					<AddInvitee close={() => setShowAddInvitee(false)} />
				</TitlePopupWrapper>
			)}
			{showArchive && (
				<TitlePopupWrapper title="Invite" close={() => setShowArchive(false)}>
					<InspectionsArchive close={() => setShowArchive(false)} />
				</TitlePopupWrapper>
			)}
		</>
	);
}
