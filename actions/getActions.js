'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getBusinessList } from './getBusiness';

export const getActions = async () => {
	const session = await getServerSession(options);
	const user_id = session?.user?.id;

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/getActionList`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
				body: JSON.stringify({ user_id: session?.user?.id }),
			}
		);

		const b_res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/getBusinessList`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
				body: JSON.stringify({ user_id: session?.user?.id }),
			}
		);

		const overview_res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUserExtraDtl`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
				body: JSON.stringify({ user_id: session?.user?.id }),
			}
		);

		const actions = await res.json();
		const businessList = await b_res.json();
		const overview = await overview_res.json();

		if (
			res.ok &&
			b_res.ok &&
			overview_res.ok &&
			actions &&
			businessList &&
			overview
		) {
			return { data: actions, businessList: businessList, overview: overview };
		}
	} catch (error) {
		return { errorMsg: "Couldn't Access Database" };
	}
};

export const deleteTrainingMaterial = async (training_id) => {
	const session = await getServerSession(options);
	const user_id = session?.user?.id;

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/deleteTrainingMaterial`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
				body: JSON.stringify({
					user_id: session?.user?.id,
					training_id: training_id,
				}),
			}
		);

		const deleted = await res.json();
		console.log(deleted);

		if (res.ok && deleted.ResponseCode === 1) {
			return {
				success: 'Training deleted successfully',
				response: deleted.ResponseCode,
			};
		} else {
			return {
				error: deleted.ResponseMsg,
			};
		}
	} catch (error) {
		return { errorMsg: "Couldn't Access Database" };
	}
};
