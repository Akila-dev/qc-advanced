'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getTrainingMaterials } from '@/actions/trainingMaterials';
import { BusinessSchema } from '@/schemas';

import { promises as fs } from 'fs';

export const getBusinessList = async () => {
	const session = await getServerSession(options);
	const user_id = session?.user?.id;

	try {
		const res = await fetch(
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

		const businesses = await res.json();

		if (res.ok && businesses) {
			return { data: businesses };
			// console.log(materials);
		}
	} catch (error) {
		return { errorMsg: "Couldn't Find Businesses" };
	}
};
