import React from 'react';

import { AddAction } from '../../components';

const MiniAddAction = ({ close }) => {
	return (
		<div>
			<AddAction close={close} className="w-full p-0 space-y-5" mini />
		</div>
	);
};

export default MiniAddAction;
