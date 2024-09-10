'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export const getTrainingMaterials = async () => {
	const session = await getServerSession(options);
	const user_id = session?.user?.id;
	// const no_of_businesses = session?.user?.id;
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTrainingMaterialList`,
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

		const materials = await res.json();

		if (res.ok && materials) {
			return { data: materials };
			// console.log(materials);
		}
	} catch (error) {
		return { errorMsg: "Couldn't Find Training Materials" };
	}

	// if (!validatedFields) {
	// 	return { error: 'Invalid Fields!' };
	// }
	// return { success: 'Authentication in Progress' };
};

export const addTrainingMaterials = async (values) => {
	// const session = await getServerSession(options);
	// const user_id = session?.user?.id;
	// // const no_of_businesses = session?.user?.id;
	// try {
	// 	const res = await fetch(
	// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTrainingMaterialList`,
	// 		{
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Accept: 'application/json',
	// 				key: process.env.NEXT_PUBLIC_KEY,
	// 				token: process.env.NEXT_PUBLIC_TOKEN,
	// 			},
	// 			body: JSON.stringify({ user_id: session?.user?.id }),
	// 		}
	// 	);
	// 	const materials = await res.json();
	// 	if (res.ok && materials) {
	// 		return { data: materials };
	// 		// console.log(materials);
	// 	}
	// } catch (error) {
	// 	return { errorMsg: "Couldn't Find Training Materials" };
	// }
};
