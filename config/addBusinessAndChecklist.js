import axios from 'axios';
import { BusinessSchema } from '@/schemas';
import FormData from 'form-data';

export const addBusiness = async (values, id) => {
	const validatedFields = BusinessSchema.parse(values);

	if (!validatedFields) {
		return { error: 'Invalid Fields!' };
	}

	const formData = new FormData();

	formData.append('business_img', values.business_img);
	formData.append('business_email', values.business_email);
	formData.append('business_name', values.business_name);
	formData.append('location', values.location);
	formData.append('user_id', id);

	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/addBusiness`,
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
				// console.log(data);
				return {
					success: data.ResponseMsg,
					business_id: data.data.business_id,
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

export const addChecklist = async (formValues, userId, businessId) => {
	// console.log(formValues, userId, businessId);
	if (!formValues) {
		return { error: 'Invalid Fields!' };
	}

	if (!userId || !businessId) {
		return { error: 'Network Error, Reload Page' };
	}

	try {
		const formData = new FormData();

		formData.append('user_id', userId);
		formData.append('business_id', businessId);
		formData.append('name', formValues.name);
		formData.append('assignee_id', formValues.assignee_id);
		formData.append(
			'sub_checklist',
			JSON.stringify(formValues.sub_check_list_dtl)
		);

		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/addCheckList`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					// 'Content-Type': 'application/json',
					Accept: 'application/json',
					key: process.env.NEXT_PUBLIC_KEY,
					token: process.env.NEXT_PUBLIC_TOKEN,
				},
			}
		);

		if (data) {
			if (data.ResponseCode === 1) {
				return { success: data.ResponseMsg, response: true };
			} else {
				return {
					error: data.ResponseMsg,
				};
			}
		}
	} catch (error) {
		console.log(error);
		return { error: "Couldn't Upload Checklist" };
	}
};

export const updateChecklist = async (
	checklistData,
	user_id,
	business_checklist_id
) => {
	// console.log(formValues, userId, businessId);
	if (!checklistData) {
		return { error: 'Invalid Fields!' };
	}

	if (!user_id || !business_checklist_id) {
		return { error: 'Network Error, Reload Page' };
	}

	try {
		const formData = new FormData();

		formData.append('name', checklistData.name);
		formData.append('assignee_id', checklistData.assignee_id);

		formData.append(
			'sub_checklist',
			JSON.stringify(checklistData.sub_check_list_dtl)
		);
		console.log('subchecklist', checklistData.sub_check_list_dtl);

		// checklistData.sub_check_list_dtl.map((val) =>
		// 	formData.append('sub_checklist', JSON.stringify(val))
		// );
		console.log('formData', formData.getAll('sub_checklist'));

		formData.append('business_checklist_id', business_checklist_id);
		formData.append('user_id', user_id);

		try {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/updateCheckList`,
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'multipart/form-data',
						Accept: 'application/json',
						key: process.env.NEXT_PUBLIC_KEY,
						token: process.env.NEXT_PUBLIC_TOKEN,
					},
				}
			);

			if (data) {
				if (data.ResponseCode === 1) {
					// console.log(data);
					return {
						success: data.ResponseMsg,
						response: data.ResponseCode,
					};
				} else {
					console.log(data);
					return {
						error: data.ResponseMsg,
					};
				}
			}
		} catch (error) {
			console.log(error);
			return { error: 'Invalid Fields, Please Try Again' };
		}
	} catch (error) {
		// console.log(error);
		return { error: "Couldn't Update Checklist" };
	}
};

export const archiveToggleChecklist = async (userId, checklistId, type) => {
	if (!userId || !checklistId) {
		return { error: 'Network Error, Reload Page' };
	}

	const formData = new FormData();

	formData.append('user_id', userId);
	formData.append('business_checklist_id', checklistId);
	formData.append('type', type);

	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/archiveUnarchiveChecklist`,
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
				// console.log(data);
				return {
					success: data.ResponseMsg,
					data: data,
				};
			} else {
				return {
					error: data.ResponseMsg,
				};
			}
		}
	} catch (error) {
		// console.log(error);
		return { error: "Couldn't Upload Checklist" };
	}
};
