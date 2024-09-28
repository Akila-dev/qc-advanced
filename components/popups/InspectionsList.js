'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiGlassesLine } from 'react-icons/ri';

import { images, icons, variants } from '../../constants';
import {
	InspectionCard,
	InspectionDetails,
	MiniAddAction,
	MiniAddMedia,
	MiniAddNote,
	SelectChecklist,
	AddInvitee,
	InspectionsArchive,
	Loading,
	LoadingFailed,
	Empty,
} from '../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../wrappers';
// import { inspectionData } from '../../dummyData/inspectionData';

import { SideNavIcons } from '../../components/svgs';

// API RELATED
import { getListOfChecklist } from '@/actions/getChecklist';

// const invitedUsers = [
// 	{
// 		img: images.profile,
// 	},
// ];

export default function InspectionsList({ close, title, businessId, userId }) {
	const [type, setType] = useState('unarchive');
	const [isLoading, setIsLoading] = useState(true);
	const [successfullyLoaded, setSuccessfullyLoaded] = useState();
	const [inspectionData, setInspectionData] = useState();
	const [archiveList, setArchiveList] = useState();

	const [activeInspection, setActiveInspection] = useState(0);
	const [toggleInspectionDetails, setToggleInspectionDetails] = useState(false);
	const [showSelectChecklist, setShowSelectChecklist] = useState(false);
	const [showArchive, setShowArchive] = useState(false);
	const [invitees, setInvitees] = useState();
	const [showAddInvitee, setShowAddInvitee] = useState(false);

	const showInspectionDetails = async (i) => {
		await setActiveInspection(i);
		// await setToggleInspectionDetails(true);
	};

	// ADDING NOTES AND THE LIKES
	const [showAddNote, setShowAddNote] = useState(false);
	const [showAddMedia, setShowAddMedia] = useState(false);
	const [showAddAction, setShowAddAction] = useState(false);

	// LOAD CHECKLIST DATA
	useEffect(() => {
		getListOfChecklist(businessId, type).then((data) => {
			console.log(data);
			setInspectionData(data?.checklist?.data?.checklist_data);
			setArchiveList(data?.archive?.data);
			setInvitees(data?.checklist?.data?.invited_user_list);
			setIsLoading(false);
			if (data?.response === 1) {
				setSuccessfullyLoaded(true);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				{isLoading ? (
					<Loading inner />
				) : successfullyLoaded ? (
					<>
						{/* DASHBOARD CONTENT */}
						<div className="w-full px-4 py-5 md:p-5 grid grid-cols-1 gap-3">
							<h2>Invite</h2>
							<div className="flex gap-3 w-full overflow-auto flex-nowrap no-scrollbar pb-2">
								{invitees &&
									invitees?.map(({ username }, i) => (
										<div
											key={i}
											className={`w-[50px] min-w-[50px] max-w-[50px] h-[50px] flex-center rounded-full bg-[--brand]`}
										>
											<div className="text-[--white] uppercase !tracking-widest text-center scale-125">
												{username.slice(0, 2)}
											</div>
										</div>
									))}
								<button
									type="button"
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
								type="button"
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
							{inspectionData && inspectionData.length > 0 ? (
								inspectionData.map((inspection, i) => (
									<InspectionCard
										key={i}
										inspectionContent={inspection}
										title={inspection.name}
										percentage={inspection.percentage}
										completed={inspection.ans_yes_count}
										total={inspection.ans_yes_no_count}
										toggled={activeInspection === i}
										onClick={() => showInspectionDetails(i)}
										sidebar
										userId={userId}
										business_checklist_id={inspection.business_checklist_id}
										archiveList={archiveList}
										setArchiveList={setArchiveList}
										inspectionData={inspectionData}
										setInspectionData={setInspectionData}
									/>
								))
							) : (
								<div className="w-full h-full min-h-[50vh]">
									<Empty text="No Checklist Added" />
								</div>
							)}
						</div>
					</>
				) : (
					<LoadingFailed />
				)}
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

			{/* {toggleInspectionDetails && (
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
			)} */}

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
					<AddInvitee
						close={() => setShowAddInvitee(false)}
						invitees={invitees}
						setInvitees={setInvitees}
						businessId={businessId}
					/>
				</TitlePopupWrapper>
			)}
			{showArchive && (
				<InspectionsArchive
					close={() => setShowArchive(false)}
					userId={userId}
					archiveList={archiveList}
					setArchiveList={setArchiveList}
					inspectionData={inspectionData}
					setInspectionData={setInspectionData}
					sidebar
				/>
			)}
		</>
	);
}
