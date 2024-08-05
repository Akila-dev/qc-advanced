/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import { icons } from '../../constants';
import { TitlePopupWrapper } from '../../wrappers';
import { Tabs } from '../../components';

const DatePicker = ({ setDate }) => {
	const [selected, setSelected] = useState();
	useEffect(() => {
		if (selected) {
			setDate(
				selected.toLocaleDateString(undefined, {
					// weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
			);
			console.log(selected.toLocaleDateString());
		}
	}, [selected]);

	return (
		<DayPicker
			mode="single"
			selected={selected}
			onSelect={setSelected}
			showOutsideDays
			//   footer={
			//     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
			//   }
		/>
	);
};
const TimePicker = ({ setTime }) => {
	const [selected, setSelected] = useState();
	return (
		<DayPicker
			mode="single"
			selected={selected}
			onSelect={setSelected}
			showOutsideDays
			//   footer={
			//     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
			//   }
		/>
	);
};

const DateTimePicker = ({ label, valueName, setFormData, formData }) => {
	const [showSelector, setShowSelector] = useState(false);
	const [activeTab, setActiveTab] = useState(0);
	const [selectedDate, setSelectedDate] = useState();
	const [selectedTime, setSelectedTime] = useState();

	const selectOption = (i) => {
		setFormData((prev) => ({
			...prev,
			[valueName]: selectedDate,
		}));
		setShowSelector(false);
	};

	return (
		<div>
			<div className="input-block">
				<label>{label}</label>
				<button
					className="icon-input block w-full"
					onClick={() => setShowSelector(true)}
				>
					{/* <input
						type="text"
						name="dueDate"
						placeholder="dueDate"
						value={dueDate}
						onChange={handleChangeInput}
						className="input placeholder:capitalize"
					/> */}

					<p className="w-full text-left">{selectedDate}</p>
					<Image
						src={icons.calendar}
						w={20}
						h={20}
						alt="mail"
						className="input-img !p-0"
					/>
				</button>
			</div>

			{showSelector && (
				<TitlePopupWrapper options close={() => setShowSelector(false)}>
					<div className="bg-[--white] rounded-[--rounding] p-4 md:p-5 flex flex-col gap-1">
						<div className=" border-b border-[--border] pb-3">
							<Tabs
								tabs={['Date', 'Time']}
								active={activeTab}
								onClick={setActiveTab}
							/>
						</div>
						<div className="w-full overflow-hidden">
							{activeTab === 0 ? (
								<DatePicker setDate={setSelectedDate} />
							) : (
								<TimePicker setTime={setSelectedTime} />
							)}
						</div>
						<div className=" border-t border-[--border] pt-3">
							<div className="w-full grid grid-cols-2 gap-4 lg:gap-5">
								<button className="btn-2">cancel</button>
								<button className="btn-1">create</button>
							</div>
						</div>
					</div>
				</TitlePopupWrapper>
			)}
		</div>
	);
};

export default DateTimePicker;
