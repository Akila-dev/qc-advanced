'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

import { icons } from '../constants';

const DragDropFile = ({ formData, setFormData, valueName }) => {
	const [materialImages, setMaterialImages] = useState([]);
	// const [showImages, setShowImages] = useState(false);
	const [dragActive, setDragActive] = useState(false);
	const inputRef = useRef();

	const removeImage = (i) => {
		let res = [...materialImages];
		let removed = res.splice(i, 1);
		setMaterialImages(res);
		setFormData((prev) => {
			return { ...formData, [valueName]: res };
		});
		console.log('Material Images', materialImages);
	};

	const onImageChange = (event) => {
		console.log(event.target.files);

		if (event.target.files) {
			let uploads = [...materialImages];
			for (let i = 0; i < event.target.files.length; i++) {
				uploads.push(URL.createObjectURL(event.target.files[i]));
			}
			setMaterialImages(uploads);
			setFormData((prev) => {
				return { ...formData, [valueName]: uploads };
			});
		}
		console.log('Material Images', materialImages);
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
			let uploads = [...materialImages];
			for (let i = 0; i < e.dataTransfer.files.length; i++) {
				uploads.push(URL.createObjectURL(e.dataTransfer.files[i]));
			}
			setMaterialImages(uploads);
			setFormData((prev) => {
				return { ...formData, [valueName]: uploads };
			});
		}
	};

	return (
		<form
			onDragEnter={handleDrag}
			onDragLeave={handleDrag}
			onDragOver={handleDrag}
			onDrop={handleDrop}
		>
			<div className="w-full flex icon-input !rounded-xl overflow-hidden border">
				<input
					ref={inputRef}
					type="file"
					multiple
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					onChange={onImageChange}
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
		</form>
	);
};

export default DragDropFile;
