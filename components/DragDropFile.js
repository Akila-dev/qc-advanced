'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

import { icons } from '../constants';

const DragDropFile = ({ rhf, error, setValue, name, single, defaultValue }) => {
	const [materialImages, setMaterialImages] = useState(
		defaultValue ? (single ? [defaultValue] : [...defaultValue]) : []
	); // STORES THE BLOB URL FOR THE IMAGE TO BE DISPLAYED
	const [rawImageFiles, setRawImageFiles] = useState(
		defaultValue ? (single ? [defaultValue] : [...defaultValue]) : []
	); // STORES THE IMAGE FILE TO BE UPLOADED
	// const [showImages, setShowImages] = useState(false);
	const [dragActive, setDragActive] = useState(false);
	const inputRef = useRef();

	const removeImage = (i) => {
		let res = [...materialImages];
		let raw = [...rawImageFiles];

		let removed = res.splice(i, 1);
		let removedRaw = raw.splice(i, 1);
		setMaterialImages(res);
		setRawImageFiles(raw);
		setValue(name, raw);
	};

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			if (!single) {
				let uploads = [...materialImages];
				let files = [...rawImageFiles];
				for (let i = 0; i < event.target.files.length; i++) {
					uploads.push(URL.createObjectURL(event.target.files[i]));
					files.push(event.target.files[i]);
				}
				setMaterialImages(uploads);
				setRawImageFiles(files);
				setValue(name, files);
			} else {
				setMaterialImages([URL.createObjectURL(event.target.files[0])]);
				setRawImageFiles([event.target.files[0]]);
				setValue(name, event.target.files[0]);
			}
		}
		// console.log('Material Images', materialImages);
	};

	const handleDrag = function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};
	// triggers when file is dropped
	const handleDrop = function (e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			if (!single) {
				let uploads = [...materialImages];
				let files = [...rawImageFiles];
				for (let i = 0; i < e.dataTransfer.files.length; i++) {
					uploads.push(URL.createObjectURL(e.dataTransfer.files[i]));
					files.push(e.dataTransfer.files[i]);
				}
				setMaterialImages(uploads);
				setRawImageFiles(files);
				setValue(name, files);
			} else {
				setMaterialImages([URL.createObjectURL(e.dataTransfer.files[0])]);
				setRawImageFiles([e.dataTransfer.files[i]]);
				setValue(name, e.dataTransfer.files[i]);
			}
		}
	};

	return (
		<div
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<div className="w-full flex icon-input !rounded-xl overflow-hidden border">
				<input
					ref={inputRef}
					type="file"
					multiple={!single}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					onChange={onImageChange}
				/>
				<input
					type="file"
					name={name}
					multiple={!single}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					{...rhf}
				/>
				<button
					type="button"
					onClick={() => inputRef.current.click()}
					className="w-full flex-1 !text-center flex-center flex-col !gap-1 p-2"
				>
					<Image src={icons.upload} alt="Drop image here" />
					<span>Drag and drop your file here</span>
					<span>or</span>
					<span className="text-[--brand]">Browse</span>
				</button>
			</div>
			{error ? (
				<p className="text-[--brand] text-xs pt-1">
					{'Please Add an Image (png,jpg or jpeg)'}
					{/* {error} */}
				</p>
			) : (
				<p></p>
			)}

			{materialImages && (
				<div className="grid grid-cols-3 md:grid-cols-4 gap-2 pt-5">
					{materialImages.map((img, i) => (
						<div
							key={i}
							className={`w-full h-[90px] object-cover rounded-xl relative`}
						>
							<Image
								src={img}
								alt="Training images"
								width={110}
								height={110}
								className={`w-full h-full object-cover rounded-xl`}
							/>
							<button
								className="p-1 bg-[--transparent-bg] rounded-full absolute top-2 right-2"
								type="button"
								onClick={() => removeImage(i)}
							>
								<Image
									src={icons.bin}
									alt="delete"
									className="w-[15px] h-[15px]"
								/>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DragDropFile;
