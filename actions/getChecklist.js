'use server';

import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
// import { getTrainingMaterials } from '@/actions/getTrainingMaterials';
// import { BusinessSchema } from '@/schemas';

export const getListOfChecklist = async (business_id, type) => {
	const session = await getServerSession(options);
	const user_id = session?.user?.id;

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/getCheckListBusinessWise`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
				body: JSON.stringify({
					user_id: user_id,
					business_id: business_id,
					type: type,
				}),
			}
		);

		const checklist = await res.json();

		if (res.ok && checklist.ResponseCode === 1) {
			return {
				data: checklist,
				success: checklist.ResponseMsg,
				response: checklist.ResponseCode,
			};
		} else {
			return {
				error: deleted.ResponseMsg,
			};
		}
	} catch (error) {
		return { errorMsg: "Couldn't Find Businesses" };
	}
};
