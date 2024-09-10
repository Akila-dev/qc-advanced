'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Webcam from 'react-webcam';

import { FaPlay } from 'react-icons/fa';

import { icons } from '../../constants';

const AddSingle = ({ rhf, setValue, name, close, setImageName }) => {
	const [takingScreenShot, setTakingScreenShot] = useState(false);
	const inputRef = useRef();

	// Webcam Functions
	const videoConstraints = {
		facingMode: 'both',
	};
	const containerRef = useRef();
	const webcamRef = useRef(null);
	const takeScreenshot = useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			console.log(imageSrc);
			setTakingScreenShot(false);
			setValue(name, imageSrc);

			close();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[webcamRef]
	);

	// On click on Gallery
	const onImageChange = async (event) => {
		// event.preventDefault();
		if (event.target.files && event.target.files) {
			const file = event.target.files[0];

			if (file) {
				setValue(name, file);
			}
			if (setImageName) {
				setImageName(file.name);
			}
			close();

			// console.log(imageData.file);
		}
	};

	// Minimize when click on mothing
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setTakingScreenShot(false);
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return (
		<div className="grid grid-cols-2 gap-3 lg:gap-4">
			<button
				className="w-full bg-[--card] rounded-xl flex-center flex-col p-3 !gap-1 min-h-[100px]"
				onClick={() => setTakingScreenShot(true)}
			>
				<Image src={icons.camera} alt="camera" />
				<p className="text-[--black] !font-medium">Camera</p>
			</button>
			<button
				type="button"
				onClick={(e) => {
					// e.preventDefault();
					inputRef.current.click();
				}}
				className="w-full bg-[--card] rounded-xl flex-center flex-col p-3 !gap-1 min-h-[100px]"
			>
				<input
					ref={inputRef}
					type="file"
					multiple={false}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					onChange={onImageChange}
				/>
				<input
					type="file"
					name={name}
					multiple={false}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					{...rhf}
				/>
				<Image src={icons.gallery} alt="gallery" />
				<p className="text-[--black] !font-medium">Gallery</p>
			</button>

			{takingScreenShot && (
				<div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-[--black] backdrop-blur-sm p-4 md:p-7 flex-center">
					<div ref={containerRef} className="lg:relative">
						<Webcam
							audio={false}
							screenshotFormat="image/jpeg"
							ref={webcamRef}
							// width={720}
							// height={1024}
							videoConstraints={videoConstraints}
						>
							{({ getScreenshot }) => (
								<div className="absolute bottom-0 left-0 flex-center w-full p-5">
									<button
										className="!bg-[--brand] rounded-full !w-[50px] lg:!w-[60px] h-[50px] lg:h-[60px] flex-center shadow-xl shadow-[--highlight-bg-2] hover:scale-125 transition duration-700"
										onClick={() => takeScreenshot()}
									>
										<FaPlay className="text-[--white] ml-1 lg:text-xl" />
									</button>
								</div>
							)}
						</Webcam>
					</div>
				</div>
			)}
		</div>
	);
};

const MiniAddMedia = ({ rhf, setValue, name, close, single, setImageName }) => {
	const [uploadedImages, setUploadedImages] = useState([]);
	const [takingScreenShot, setTakingScreenShot] = useState(false);
	const inputRef = useRef();

	// Webcam Functions
	const videoConstraints = {
		facingMode: 'both',
	};
	const containerRef = useRef();
	const webcamRef = useRef(null);
	const takeScreenshot = useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			let uploads = [...uploadedImages];
			if (single) {
				uploads = imageSrc;
			} else {
				uploads.push(imageSrc);
			}
			setUploadedImages(uploads[0]);
			setTakingScreenShot(false);
			setValue(name, uploads[0]);

			close();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[webcamRef]
	);

	// On click on Gallery
	const onImageChange = (event) => {
		let uploads = [...uploadedImages];
		if (event.target.files && event.target.files[0]) {
			// console.log(event.target.files[0]);
			// setImage(URL.createObjectURL(event.target.files[0]));
			setValue(name, event.target.files[0]);
			// console.log(image);
			close();
		}
	};

	// Minimize when click on mothing
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setTakingScreenShot(false);
			}
		};

		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return single ? (
		<AddSingle
			rhf={rhf}
			setValue={setValue}
			name={name}
			close={close}
			setImageName={setImageName}
		/>
	) : (
		<div className="grid grid-cols-2 gap-3 lg:gap-4">
			<button
				className="w-full bg-[--card] rounded-xl flex-center flex-col p-3 !gap-1 min-h-[100px]"
				onClick={() => setTakingScreenShot(true)}
			>
				<Image src={icons.camera} alt="camera" />
				<p className="text-[--black] !font-medium">Camera</p>
			</button>
			<button
				onClick={() => inputRef.current.click()}
				className="w-full bg-[--card] rounded-xl flex-center flex-col p-3 !gap-1 min-h-[100px]"
			>
				<input
					ref={inputRef}
					type="file"
					multiple={false}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					onChange={onImageChange}
				/>
				<input
					type="file"
					name={name}
					multiple={false}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					{...rhf}
				/>
				<Image src={icons.gallery} alt="gallery" />
				<p className="text-[--black] !font-medium">Gallery</p>
			</button>

			{takingScreenShot && (
				<div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-[--black] backdrop-blur-sm p-4 md:p-7 flex-center">
					<div ref={containerRef} className="lg:relative">
						<Webcam
							audio={false}
							screenshotFormat="image/jpeg"
							ref={webcamRef}
							// width={720}
							// height={1024}
							videoConstraints={videoConstraints}
						>
							{({ getScreenshot }) => (
								<div className="absolute bottom-0 left-0 flex-center w-full p-5">
									<button
										className="!bg-[--brand] rounded-full !w-[50px] lg:!w-[60px] h-[50px] lg:h-[60px] flex-center shadow-xl shadow-[--highlight-bg-2] hover:scale-125 transition duration-700"
										onClick={() => takeScreenshot()}
									>
										<FaPlay className="text-[--white] ml-1 lg:text-xl" />
									</button>
								</div>
							)}
						</Webcam>
					</div>
				</div>
			)}
		</div>
	);
};

export default MiniAddMedia;
