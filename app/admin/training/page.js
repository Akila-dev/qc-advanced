'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { images, icons } from '../../../constants';
import {
	TrainingCard,
	TrainingDetails,
	TrainingMaterial,
} from '../../../components';
import { SidePopupWrapper, TitlePopupWrapper } from '../../../wrappers';
import { SideNavIcons } from '../../../components/svgs';

const overview = [
	{
		label: 'Training Materials',
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

const trainings = [
	{
		img: images.food1,
		title: 'Risk Management',
		text: [
			'Lorem ipsum dolor sit amet consectetur. Aliquet ipsum molestie tellus lacus pellentesque fermentum nisl suscipit. Pulvinar feugiat hac a fringilla. Tellus.',
			'Lorem ipsum dolor sit amet consectetur. Tempor eu libero iaculis pellentesque. Diam neque ipsum at et facilisis massa amet id amet. Nunc ac elit vitae sapien eros. Elementum quis odio egestas pellentesque aliquam enim. Fermentum libero nunc tincidunt magna vitae duis duis in aenean. Maecenas fringilla non pulvinar eu. Tortor morbi tempor dui sed consequat leo.',
		],
	},
	{
		img: images.food2,
		title: 'Get to know QC Training',
		text: [
			'Lorem ipsum dolor sit amet consectetur. Aliquet ipsum molestie tellus lacus pellentesque fermentum nisl suscipit. Pulvinar feugiat hac a fringilla. Tellus.',
			'Lorem ipsum dolor sit amet consectetur. Tempor eu libero iaculis pellentesque. Diam neque ipsum at et facilisis massa amet id amet. Nunc ac elit vitae sapien eros. Elementum quis odio egestas pellentesque aliquam enim. Fermentum libero nunc tincidunt magna vitae duis duis in aenean. Maecenas fringilla non pulvinar eu. Tortor morbi tempor dui sed consequat leo.',
		],
	},
];

const colors = ['#2d2d2b08', '#2d2d2b08', '#f5edc7'];
const tags = ['all', 'due soon', 'exceeded due date'];

export default function Training() {
	const [activeTraining, setActiveTraining] = useState(0);
	const [showDetails, setShowDetails] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [showAddMaterial, setShowAddMaterial] = useState(false);

	const showTrainingDetails = (i) => {
		setActiveTraining(i);
		setShowDetails(true);
	};

	const showEditTraining = (i) => {
		setActiveTraining(i);
		setShowEdit(true);
	};

	const deleteMaterial = (i) => {
		setActiveTraining(i);
		setShowDelete(true);
	};

	return (
		<div className="lg:p-10 h-screen overflow-auto scroll-2">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center">Training</h1>
			{/* OVERVIEW */}
			<div className="hidden lg:block w-full bg-white rounded-[--rounding] p-7 my-7">
				<div className="w-full h-full space-y-5">
					<div className="flex-v-center justify-between">
						<h1 className="text-[--black]">Overview</h1>
						<button
							onClick={() => setShowAddMaterial(true)}
							className="btn-1 gap-2 flex items-center justify-center shadow-md !shadow-[#00000044]  !w-auto"
						>
							<HiOutlinePlusSm className="text-[--white] text-3xl md:text-xl" />
							<span className="pr-1 hidden lg:block">
								Add Training Material
							</span>
						</button>
					</div>

					<div className="grid grid-cols-3 gap-5">
						{overview.map(({ label, value }, i) => (
							<div
								key={i}
								className={`p-5 rounded-xl`}
								style={{ background: colors[i] }}
							>
								<SideNavIcons i={2} color={'#2d2d2b'} w={35} />
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
						<h2 className="hidden lg:block">Training Materials</h2>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-5 px-4 py-5 lg:p-8 lg:pt-5">
					{trainings.map(({ title, text }, i) => (
						<TrainingCard
							key={i}
							title={title}
							text={text[0]}
							onClick={() => showTrainingDetails(i)}
							admin
							remove={() => deleteMaterial(i)}
							edit={() => showEditTraining(i)}
						/>
					))}
				</div>

				<div className="pb" />
			</div>

			{showDetails && (
				<SidePopupWrapper
					close={() => setShowDetails(false)}
					title={trainings[activeTraining].title}
					otherIcon={icons.download}
				>
					<TrainingDetails
						img={trainings[activeTraining].img}
						text={trainings[activeTraining].text}
						// title={trainings[activeTraining].title}
					/>
				</SidePopupWrapper>
			)}

			{showEdit && (
				<SidePopupWrapper
					close={() => setShowEdit(false)}
					title="Edit Material"
				>
					<TrainingMaterial
						close={() => setShowEdit(false)}
						className=""
						edit
						editId={activeTraining}
					/>
				</SidePopupWrapper>
			)}
			{showAddMaterial && (
				<SidePopupWrapper
					close={() => setShowAddMaterial(false)}
					title="Add Material"
				>
					<TrainingMaterial
						close={() => setShowAddMaterial(false)}
						className=""
					/>
				</SidePopupWrapper>
			)}
			{showDelete && (
				<TitlePopupWrapper
					title="Delete"
					close={() => setShowDelete(false)}
					darkBg
				>
					<div className="text-center space-y-4">
						<p>Are you sure you want to delete this material?</p>{' '}
						<div className="w-full grid grid-cols-2 gap-4 lg:gap-5">
							<button onClick={() => setShowDelete(false)} className="btn-2">
								cancel
							</button>
							<button onClick={() => setShowDelete(false)} className="btn-1">
								yes
							</button>
						</div>
					</div>
				</TitlePopupWrapper>
			)}
		</div>
	);
}
