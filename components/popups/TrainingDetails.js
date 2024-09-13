// 'use client';

import Image from 'next/image';

const TrainingDetails = ({ img, text }) => {
	return (
		<div className="h-full w-full py-5 px-4 lg:p-7 space-y-5">
			<div>
				<Image
					src={img}
					width={400}
					height={300}
					alt="mail"
					className="w-full h-[200px] object-cover rounded-xl"
				/>
			</div>
			<div className="space-y-4">
				{/* {text.map((p, i) => (
					<p key={i}>{p}</p>
				))} */}
				<p>{text}</p>
			</div>
		</div>
	);
};

export default TrainingDetails;
