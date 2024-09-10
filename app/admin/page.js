'use client';
import { useState, useTransition, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { RiGlassesLine } from 'react-icons/ri';
import { AnimatePresence } from 'framer-motion';

import { images, icons } from '../../constants';
import {
	InspectionsList,
	BusinessCard,
	AddBusiness,
	SelectChecklist,
	AddChecklist,
	MyChecklist,
	Empty,
	Loading,
	LoadingFailed,
	Button,
	Purchase,
} from '../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../wrappers';

import { SideNavIcons } from '../../components/svgs';

// SERVER ACTIONS/COMPONENTS
import { getBusinessList } from '@/actions/getBusiness';

const overviewCardColors = ['#2d2d2b08', '#2d2d2b08', '#f5edc7'];

const OverviewCard = ({ i, label, value }) => (
	<div
		className={`p-5 rounded-xl`}
		style={{ background: overviewCardColors[i] }}
	>
		{i === 0 && (
			<RiGlassesLine className="text-[2.8rem] bg-[--tag] rounded-full p-[6px] mb-[-6px]" />
		)}
		{i === 1 && <SideNavIcons i={1} color={'#2d2d2b'} w={35} />}
		{i === 2 && <Image src={icons.trash} alt="archive" className="w-[35px]" />}
		<p className="text-[--black] !font-semibold pt-5 pb-1">{label}</p>
		<h1 className="text-[--brand]">{value}</h1>
	</div>
);

export default function Dashboard() {
	const [isLoading, setIsLoading] = useState(true); // The loading state of the business list
	const [successfullyLoaded, setSuccessfullyLoaded] = useState(false);
	const [businessList, setBusinessList] = useState(); // For storing the business list information that would be placed on the dashboard
	const [overview, setOverview] = useState([]); //Overview data
	const [businessId, setBusinessId] = useState(); // For Storing The business id that would be gotten after a business is added and would be used by the checklist section
	const { data: session } = useSession();
	const userId = session?.user?.id;
	const isSubscribed = session?.user?.subscribed;

	// UI VARIABLES, as their names suggest
	const [showAddBusiness, setShowAddBusiness] = useState(false);
	const [showSelectChecklist, setShowSelectChecklist] = useState(false);
	const [showInspectionsList, setShowInspectionsList] = useState(false);
	const [activeInspection, setActiveInspection] = useState(0);
	const [showPurchase, setShowPurchase] = useState(!isSubscribed);

	useEffect(() => {
		getBusinessList(userId).then((data) => {
			// console.log(data?.data);
			setBusinessList(data?.data?.data);
			setOverview([data?.data?.total_record]);
			setIsLoading(false);
			if (data?.data?.ResponseCode === 1) {
				setSuccessfullyLoaded(true);
			}
		});
	}, []);

	// ADD A STORE FUNCTIONS
	const addBusiness = (i) => {
		setShowAddNote(true);
	};
	const updateBusiness = (i) => {
		setShowAddNote(true);
	};

	// INSPECTIONS FUNCTION
	const showInspectionDetails = (i) => {
		setActiveInspection(i);
		setShowInspectionsList(true);
	};

	return isLoading ? (
		<Loading />
	) : successfullyLoaded ? (
		<>
			<div className="md:p-10 h-screen overflow-auto ">
				<h1 className="h-[15vh] lg:h-auto flex-center text-center">
					QC Advanced
				</h1>
				{/* OVERVIEW */}
				<div className="hidden lg:block w-full bg-white rounded-[--rounding] p-7 my-7">
					<div className="w-full h-full space-y-5">
						<h1 className="text-[--black]">Overview</h1>
						<div className="grid grid-cols-3 gap-5">
							<OverviewCard
								i={0}
								label="Number of Businesses"
								value={overview[0]}
							/>
							<OverviewCard i={1} label="Pending Actions" value="0/2" />
							<OverviewCard i={2} label="Training Materials" value="0/2" />
						</div>
					</div>
				</div>
				{/* DASHBOARD CONTENT */}
				<div className="dashboard-content-box">
					<div className="!hidden md:!flex p-7 pb-0 flex-v-center justify-between">
						<h2 className="text-[--black]">My Stores</h2>

						<div className="!shadow-[#00000044] !w-auto">
							<Button
								onClick={() => setShowAddBusiness(true)}
								// onClick={() => setShowSelectChecklist(true)}
								text="Add Store"
							/>
						</div>
					</div>
					{businessList?.length > 0 ? (
						<div className="w-full px-4 py-5 md:p-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
							{businessList?.map(
								(
									{
										business_img,
										business_name,
										business_email,
										location,
										business_id,
									},
									i
								) => (
									<BusinessCard
										key={i}
										img={business_img}
										name={business_name}
										email={business_email}
										location={location}
										// onClick={() => showInspectionDetails(i)}
									/>
								)
							)}
						</div>
					) : (
						<Empty text="No material added" />
					)}
					<div className="md:hidden pt-2 container">
						<button className="btn-1" onClick={() => setShowAddBusiness(true)}>
							add a store
						</button>
						<div className="pb" />
					</div>
				</div>
			</div>
			{showAddBusiness && (
				<AddBusiness
					close={() => setShowAddBusiness(false)}
					nextPopup={() => setShowSelectChecklist(true)}
					setBusinessId={setBusinessId}
					userId={userId}
				/>
			)}
			<AnimatePresence>
				{showSelectChecklist && (
					<SelectChecklist
						back={() => setShowSelectChecklist(false)}
						close={() => {
							setShowAddBusiness(false);
							setShowSelectChecklist(false);
						}}
						businessId={businessId}
						userId={userId}
					/>
				)}
			</AnimatePresence>
			{showPurchase && <Purchase close={() => setShowPurchase(false)} />}

			{/* {showInspectionsList && (
				<InspectionsList
					close={() => setShowInspectionsList(false)}
					title={businessData[activeInspection].name}
					userId={userId}
					businessId={businessId}
				/>
			)} */}
		</>
	) : (
		<LoadingFailed />
	);
}
