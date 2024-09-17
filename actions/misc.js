'use server';

// import { getServerSession } from 'next-auth';
// import { options } from '@/app/api/auth/[...nextauth]/options';

export const getBusinessTypes = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBusinessType`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
			}
		);

		const businessTypes = await res.json();

		if (res.ok && businessTypes) {
			console.log(businessTypes);
			return {
				data: businessTypes,
			};
			// console.log(materials);
		}
	} catch (error) {
		return { errorMsg: "Couldn't Find Businesses" };
	}
};
