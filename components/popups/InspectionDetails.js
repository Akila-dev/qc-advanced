'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { images, icons } from '../../constants';
import { TitlePopupWrapper } from '../../wrappers';

const options = ['Yes', 'No', 'N/A'];
const colors = ['#a2b639', '#b62e32', '#2a85b1'];

const AddAction = ({ data, addNote, addMedia, addAction }) => {
	// const [response1, setResponse1] = useState(0);
	// const [showAddNote, setShowAddNote] = useState(false);
	// const [showAddMedia, setShowAddMedia] = useState(false);
	// const [showAddAction, setShowAddAction] = useState(false);

	// const addNote = () => {
	// 	setShowAddNote(true);
	// };
	// const addMedia = () => {
	// 	setShowAddMedia(true);
	// };
	// const addAction = () => {
	// 	setShowAddAction(true);
	// };

	return (
		<div className="h-auto w-full py-5 px-4 lg:p-7 space-y-5 z-[1000] relative">
			{data.map((item, i) => (
				<div key={i} className="p-4 lg:p-5 bg-[--card] space-y-5 rounded-xl">
					<h3>{item.query}</h3>
					<div>
						<div className="btn-group">
							{options.map((option, j) => (
								<button
									key={j}
									style={{ backgroundColor: item.answer === j && colors[i] }}
									className={
										item.answer === j ? 'btn-3 !text-[--white]' : 'btn-3'
									}
								>
									{option}
								</button>
							))}
						</div>
						<div className="grid grid-cols-3 gap-2 pt-4">
							{item.imgs.map((img, k) => (
								<div key={k} className="relative">
									<Image
										src={img}
										alt={item.query}
										w={100}
										h={100}
										className="w-full h-[90px] object-cover rounded-md"
									/>
									<button className="p-1 bg-[--transparent-bg] rounded-full absolute top-2 right-2">
										<Image
											src={icons.bin}
											alt="delete"
											className="w-[15px] h-[15px]"
										/>
									</button>
								</div>
							))}
						</div>
						<div className="pt-3 space-y-2">
							{item.notes.map((note, i) => (
								<p key={i} className="black-text">
									{note}
								</p>
							))}
						</div>
					</div>
					<div className="flex gap-2 justify-between items-center">
						<button
							className="flex items-center !gap-1 !text-[3.75vw] md:!text-sm"
							onClick={() => addNote(i)}
						>
							<Image
								src={icons.addNote}
								alt="delete"
								className="w-[15.5px] h-[15.5px]"
							/>{' '}
							Add Note
						</button>
						<button
							className="flex items-center !gap-1 !text-[3.75vw] md:!text-sm"
							onClick={() => addMedia(i)}
						>
							<Image
								src={icons.gallery}
								alt="delete"
								className="w-[15.5px] h-[15.5px]"
							/>{' '}
							Media
						</button>
						<button
							className="flex items-center !gap-1 !text-[3.75vw] md:!text-sm"
							onClick={() => addAction(i)}
						>
							<Image
								src={icons.addAction}
								alt="delete"
								className="w-[15.5px] h-[15.5px]"
							/>{' '}
							Action
						</button>
					</div>
				</div>
			))}
			{/* {showAddNote && (
				<TitlePopupWrapper title="Add Note">Hi</TitlePopupWrapper>
			)} */}
		</div>
	);
};

export default AddAction;
