import React from 'react';

const MiniAddNote = ({ close, note, addNote }) => {
	return (
		<form className="space-y-3">
			<textarea placeholder="Add a note" />
			<div className="flex gap-2">
				<input type="checkbox" className="max-w-[20px]" />
				<p>Follow up required</p>
			</div>
			<div className="grid grid-cols-2 gap-4 lg:gap-5">
				<button className="btn-2" type="button" onClick={close}>
					cancel
				</button>
				<button className="btn-1" type="button">
					ok
				</button>
			</div>
		</form>
	);
};

export default MiniAddNote;
