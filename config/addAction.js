import axios from 'axios';
import { TrainingMaterialSchema, EditTrainingMaterialSchema } from '@/schemas';
import FormData from 'form-data';

export const addAction = async (values, id) => {
	const validatedFields = TrainingMaterialSchema.parse(values);

	if (!validatedFields) {
		return { error: 'Invalid Fields!' };
	}

	const formData = new FormData();

	formData.append('title', values.title);
	formData.append('desc', values.desc);
	formData.append('priority', values.priority);
	formData.append('due_date', values.due_date);
	formData.append('assignee_id', values.assignee_id);
	formData.append('to_do_list', values.to_do_list);
	formData.append('business_id', values.business_id);

	formData.append('user_id', id);

	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/addAction`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
			}
		);

		if (data) {
			if (data.ResponseCode === 1) {
				return {
					success: data.ResponseMsg,
					data: data,
				};
			} else {
				return {
					error: data.ResponseMsg.replace('business_img', 'business image'),
				};
			}
		}
	} catch (error) {
		// console.log(error);
		return { error: 'Invalid Fields, Please Try Again' };
	}
};

export const updateTrainingMaterial = async (values, id, training_id) => {
	const validatedFields = EditTrainingMaterialSchema.parse(values);

	if (!validatedFields) {
		return { error: 'Invalid Fields!' };
	}

	const formData = new FormData();

	formData.append('title', values.title);

	if (typeof values.image === 'object') {
		formData.append('image', values.image);
	}
	if (typeof values.document === 'object') {
		formData.append('document', values.document);
	}
	formData.append('description', values.description);
	formData.append('business_id', values.business_id);
	formData.append('training_id', training_id);
	formData.append('user_id', id);

	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/updateTrainingMaterial`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
			}
		);

		if (data) {
			if (data.ResponseCode === 1) {
				return {
					success: data.ResponseMsg,
					data: data,
				};
			} else {
				return {
					error: data.ResponseMsg.replace('business_img', 'business image'),
				};
			}
		}
	} catch (error) {
		// console.log(error);
		return { error: 'Invalid Fields, Please Try Again' };
	}
};
