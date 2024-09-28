'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RiGlassesLine } from 'react-icons/ri';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FormError, FormSuccess } from '../../components';
import { icons } from '../../constants';

// SERVER COMPONENT
import { archiveToggleChecklist } from '@/config/addBusinessAndChecklist';

const InspectionCard = ({
	inspectionContent,
	title,
	percentage,
	completed,
	total,
	toggled,
	business_checklist_id,
	onClick,
	sidebar,
	archived,
	userId,
	archiveList,
	setArchiveList,
	inspectionData,
	setInspectionData,
}) => {
	const [isPending, setIsPending] = useState();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const x = useMotionValue(0);

	const scaleNormal = useTransform(x, [0, -30], [0, 1]);
	const scale = useSpring(scaleNormal);

	const opacityNormal = useTransform(x, [0, -50], [0, 1]);
	const opacity = useSpring(opacityNormal);

	const doArchiveUnarchive = (type) => {
		setError('');
		setSuccess('');

		setIsPending(true);

		// console.log(values);

		archiveToggleChecklist(userId, business_checklist_id, type).then((data) => {
			setIsPending(false);
			setError(data.error);
			setSuccess(data.success);
			console.log(data);

			if (data.success) {
				if (archived) {
					setInspectionData([inspectionContent, ...inspectionData]);

					let newArchiveList = archiveList.filter((list) => {
						return (
							list.business_checklist_id !==
							inspectionContent.business_checklist_id
						);
					});
					setArchiveList(newArchiveList);
				} else {
					setArchiveList([inspectionContent, ...archiveList]);

					let newInspectionData = inspectionData.filter((list) => {
						return (
							list.business_checklist_id !==
							inspectionContent.business_checklist_id
						);
					});
					setInspectionData(newInspectionData);
				}
			}
		});
	};

	const archiveUnarchive = () => {
		if (archived) {
			doArchiveUnarchive('unarchive');
		} else {
			doArchiveUnarchive('archive');
		}
	};

	return (
		<div className={`w-full relative ${isPending && 'pending'}`}>
			<motion.div
				drag="x"
				style={{ x }}
				dragConstraints={{
					left: sidebar ? -50 : 0,
					right: 0,
					top: 0,
					bottom: 0,
				}}
				dragElastic={0.1}
				className={`slide-animated-children flex justify-between items-center w-full bg-[--card] border border-[--border] rounded-lg gap-4 relative z-[1] ${
					sidebar ? '' : 'lg:flex-col lg:items-start lg:p-[14px]'
				}`}
			>
				<div
					className={`hidden items-center justify-between w-full ${
						sidebar ? '' : 'lg:flex'
					}`}
				>
					<RiGlassesLine className="text-[2rem] bg-[--tag] rounded-full p-[6px]" />
					<button className="p-2 bg-[--highlight-bg-2] rounded-md hover:shadow-xl transition duration-500">
						<Image src={icons.archive} alt="caret" className="w-[20px]" />
					</button>
				</div>
				<button
					onClick={onClick}
					className={`flex justify-between items-center w-full p-[14px]   bg-[--card] rounded-lg gap-3 transition duration-700 ${
						sidebar ? '' : 'lg:p-0 lg:py-2 lg:hover:scale-95'
					}`}
				>
					<div className="flex-v-center">
						<Image src={icons.caret} alt="caret" className={`w-[10px]`} />
						<p className="black-text">{title}</p>
					</div>
					<p className="black-text">
						{completed}/{total} ({percentage}%)
					</p>
				</button>
			</motion.div>
			<motion.div
				style={{ scale, opacity }}
				className={`absolute right-0 top-0 h-full`}
			>
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
					type="button"
					onClick={() => archiveUnarchive()}
					className="flex-center min-w-[40px] w-[40px] max-w-[40px] h-full bg-[--highlight-bg] rounded-lg p-[10px]"
				>
					<Image
						src={archived ? icons.upload2 : icons.archive}
						alt={archived ? 'unarchive' : 'archive'}
						width={30}
						height={30}
					/>
				</motion.button>
			</motion.div>
			{/* <div className="absolute top-0 left-0 w-full">
			{error && <FormError message={error} />}
			{success && <FormSuccess message={success} />}
			</div> */}
		</div>
	);
};

export default InspectionCard;
