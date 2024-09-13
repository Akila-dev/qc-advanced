'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePlusSm } from 'react-icons/hi';

import { images, icons } from '../../../constants';
import { TrainingCard, TrainingDetails } from '../../../components';
import { SidePopupWrapper } from '../../../wrappers';
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

	const showTrainingDetails = (i) => {
		setActiveTraining(i);
		setShowDetails(true);
	};

	return (
		<div className="md:p-10 h-screen overflow-auto scroll-2">
			<h1 className="h-[15vh] lg:h-auto flex-center text-center">Training</h1>
			{/* OVERVIEW */}
			<div className="hidden lg:block w-full bg-white rounded-[--rounding] p-7 my-7">
				<div className="w-full h-full space-y-5">
					<h1 className="text-[--black]">Overview</h1>

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
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-4 py-5 md:pt-0 lg:p-8 lg:pt-5">
					{trainings.map(({ title, text }, i) => (
						<TrainingCard
							key={i}
							title={title}
							text={text[0]}
							onClick={() => showTrainingDetails(i)}
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
						text={trainings[activeTraining].text.toString()}
						// title={trainings[activeTraining].title}
					/>
				</SidePopupWrapper>
			)}
		</div>
	);
}
