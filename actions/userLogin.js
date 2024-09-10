'use server';

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

export const userLogin = async (values) => {
	const validatedFields = LoginSchema.parse(values);

	if (!validatedFields) {
		return { error: 'Invalid Fields!' };
	}
	return { success: 'Authentication in Progress' };
};
