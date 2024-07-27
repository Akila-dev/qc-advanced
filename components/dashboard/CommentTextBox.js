import React from 'react';
import Image from 'next/image';

import { icons } from '../../constants';

const CommentTextBox = ({ comment, setComment, send }) => {
	const handleChangeInput = (e) => {
		setComment(comment);
	};
	return (
		<div className="fixed bottom-0 right-0 w-full md:w-[--sidebar] p-4 md:p-7">
			<div className="flex-v-center w-full">
				<div className="icon-input flex-1">
					<div className="pr-2 border-r">
						<Image
							src={icons.file}
							w={20}
							h={20}
							alt="insert file"
							className="input-img !min-w-[20px]"
						/>
					</div>
					<input
						type="comment"
						name="comment"
						placeholder="comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						className="input placeholder:capitalize"
					/>
				</div>
				<div>
					<button
						onClick={send}
						className="btn-1 !max-w-[40px] !min-w-[40px] !h-[40px] !rounded-full flex-center !p-0 !pr-[1px]"
					>
						<Image
							src={icons.plane}
							w={30}
							h={30}
							alt="insert file"
							className="input-img !min-w-[22px] !h-auto"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CommentTextBox;
