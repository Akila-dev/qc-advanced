'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Webcam from 'react-webcam';

import { FaPlay } from 'react-icons/fa';

import { icons } from '../../constants';
import { FormError, FormSuccess } from '../../components';

import { addSubChecklistMedia } from '@/config/answerSubChecklist';

const MiniAddMediaSubchecklist = ({
	close,
	userId,
	bsc_id,
	index,
	inspectionData,
	setInspectionData,
}) => {
	const [isPending, setIsPending] = useState();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const [uploadedImages, setUploadedImages] = useState([]);
	const [takingScreenShot, setTakingScreenShot] = useState(false);
	const inputRef = useRef();

	// Webcam Functions
	const videoConstraints = {
		facingMode: 'both',
	};
	const containerRef = useRef();
	const webcamRef = useRef(null);

	const uploadMedia = (uploads, display) => {
		setError('');
		setIsPending(true);

		// console.log(display);

		addSubChecklistMedia(userId, bsc_id, uploads).then((data) => {
			setIsPending(false);
			setError(data.error);
			setSuccess(data.success);

			if (data.response) {
				let newInspectionData = [...inspectionData];
				newInspectionData[index].media_list = data?.data?.data;
				setInspectionData(newInspectionData);

				setTimeout(() => {
					close();
				}, 1000);
			} else {
				setError(index, data.error);
			}
		});
	};

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
			uploadMedia(uploads[0]);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[webcamRef]
	);

	// On click on Gallery
	const onImageChange = (event) => {
		let uploads = [];
		let displayImages = [];
		if (event.target.files) {
			for (let i = 0; i < event.target.files.length; i++) {
				uploads.push(event.target.files[i]);
				displayImages.push(URL.createObjectURL(event.target.files[i]));
			}

			uploadMedia(uploads, displayImages);
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
		<div
			className={`grid grid-cols-2 gap-3 lg:gap-4 ${isPending && 'pending'}`}
		>
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
					multiple
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					onChange={onImageChange}
				/>
				{/* <input
					type="file"
					multiple={false}
					accept=".png,.jpg,.jpeg"
					className="absolute top-0 left-0 w-[200%] hidden"
					
				/> */}
				<Image src={icons.gallery} alt="gallery" />
				<p className="text-[--black] !font-medium">Gallery</p>
			</button>

			<div className="col-span-2">
				{error && <FormError message={error} />}
				{success && <FormSuccess message={success} />}
			</div>

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

export default MiniAddMediaSubchecklist;
