'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export const getTrainingMaterials = async () => {
	const session = await getServerSession(options);
	const user_id = session?.user?.id;

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getUserProfile`,
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

		const profile = await res.json();

		if (res.ok && profile) {
			return { profile: profile };
		}
	} catch (error) {
		return { errorMsg: "Couldn't Find Training Materials" };
	}
};
