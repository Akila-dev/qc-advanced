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
} from '../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../wrappers';
import { inspectionData } from '../../dummyData/inspectionData';

import { SideNavIcons } from '../../components/svgs';

const invitedUsers = [
	{
		img: images.profile,
	},
];

export default function InspectionsArchive({ close, title }) {
	const [activeInspection, setActiveInspection] = useState(0);
	const [toggleInspectionDetails, setToggleInspectionDetails] = useState(false);
	const [searchInput, setSearchInput] = useState('');

	// UPDATE SEARCH BOX VALUE
	const handleChangeInput = (e) => {
		const { value } = e.target;
		setSearchInput(value);
	};

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
			<SidePopupWrapper title="Archive" close={close}>
				{/* DASHBOARD CONTENT */}
				<div className="w-full px-4 py-5 md:p-5 grid grid-cols-1 gap-3">
					<div className="icon-input !rounded-[2rem] !gap-2 mb-2">
						<Image
							src={icons.search}
							w={20}
							h={20}
							alt="search archive"
							className="input-img p-[2px]"
						/>
						<input
							type="text"
							name="search"
							placeholder="Search here"
							onChange={handleChangeInput}
							className="input"
						/>
					</div>
					{inspectionData
						.filter((inspection) => inspection.title.includes(searchInput))
						.map((inspection, i) => (
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
		</>
	);
}
