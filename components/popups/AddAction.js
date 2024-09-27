'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { images, icons } from '../../constants';
import {
	DateTimePicker,
	InputField,
	InputFieldRHF,
	SelectInputRHF,
	SelectInputLabelValueRHF,
	SelectAssignee,
	SubmitButton,
	FormError,
	FormSuccess,
	Button,
} from '../../components';
import { SelectOptionsWrapper } from '@/wrappers';

// SERVER COMPONENT
import { addAction, updateAction } from '@/config/addAction';
import { AdminActionSchema } from '@/schemas';

const AddAction = ({
	close,
	admin,
	businessList,
	actionsList,
	setActionsList,
	edit,
	activeAction,
	initialValues,
}) => {
	const { data: session } = useSession();
	const userId = session?.user?.id;
	const [isPending, setIsPending] = useState();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const [showInvitees, setShowInvitees] = useState(false);
	const [inviteesList, setInviteesList] = useState([]);

	// console.log(initialValues);

	const {
		watch,
		getValues,
		setValue,
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		resolver: zodResolver(AdminActionSchema),
	});

	useEffect(() => {
		const values = getValues();
		setTimeout(() => {
			if (values?.business_id?.length > 0) {
				let assigneeData = businessList.filter(
					(res) => res.business_id === values.business_id
				);
				setInviteesList(assigneeData[0].assignee_dtl);
			}
		}, 500);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// show invitees tab only when a business has been selected
	// look for list invitees for that particular business
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (value?.business_id?.length > 0) {
				let assigneeData = businessList.filter(
					(res) => res.business_id === value.business_id
				);
				setInviteesList(assigneeData[0].assignee_dtl);
			}
		});
		return () => subscription.unsubscribe();
	}, [businessList, watch]);

	const onSubmit = (values) => {
		setError('');
		setSuccess('');

		setIsPending(true);

		// console.log(actionsList[activeAction].action_id)

		if (admin) {
			if (!edit) {
				addAction(values, userId).then((data) => {
					setIsPending(false);
					setError(data.error);
					setSuccess(data.success);

					console.log(data?.data?.data);
					setIsPending(false);

					if (data.success) {
						setActionsList([data?.data?.data, ...actionsList]);
						setTimeout(() => {
							close();
						}, 1000);
					}
				});
			} else {
				updateAction(values, userId, actionsList[activeAction].action_id).then(
					(data) => {
						setIsPending(false);
						setError(data.error);
						setSuccess(data.success);

						console.log(data?.data);
						setIsPending(false);

						if (data.success) {
							let prevActions = [...actionsList];
							prevActions[activeAction] = data?.data?.data;
							setActionsList(prevActions);
						}
					}
				);
			}
		}
	};

	return (
		<div
			className={`h-full w-full space-y-8 ${edit ? '' : 'py-5 px-4 lg:p-7'}`}
		>
			<form
				onSubmit={handleSubmit((d) => onSubmit(d))}
				className={`w-full space-y-4 ${isPending && 'pending'}`}
			>
				{/* Title */}
				<InputFieldRHF
					label="Title"
					type="text"
					placeholder="Enter Title"
					rhf={{ ...register('title') }}
					error={errors.title?.message}
					defaultValue={initialValues && initialValues.title}
				/>
				{/* Description */}
				<InputFieldRHF
					label="Description"
					type="text"
					placeholder="Enter Description"
					rhf={{ ...register('desc') }}
					error={errors.desc?.message}
					defaultValue={initialValues && initialValues.desc}
				/>
				{/* Priority */}
				<SelectInputLabelValueRHF
					label="Priority"
					options={['High', 'Medium', 'Low', 'None']}
					valueList={['High', 'Medium', 'Low', 'None']}
					colors={['#b62e32', '#2d2d2b', '#177EC1', '#777E90']}
					setValue={setValue}
					name="priority"
					rhf={{ ...register('priority') }}
					error={errors.priority?.message}
					defaultValue={initialValues && initialValues.priority}
				/>
				{/* DueDate */}
				<DateTimePicker
					label="Due Date"
					setValue={setValue}
					name="due_date"
					rhf={{ ...register('due_date') }}
					error={errors.due_date?.message}
					defaultValue={initialValues && initialValues.due_date}
				/>

				{/* Assignees */}
				{/* <SelectInput
					// icon={icons.details}
					label="Assignees"
					placeholder="Choose Assignees"
					options={['Sigmandom', 'Rhemadom']}
					valueName="assignees"
					setFormData={setFormData}
					formData={formData}
				/> */}
				{admin && (
					<>
						{/* Business */}
						<SelectOptionsWrapper
							list={businessList}
							label="Business"
							setValue={setValue}
							name="business_id"
							error={errors.business_id?.message}
						>
							<SelectInputRHF
								label="Business"
								options={businessList}
								businessList
								setValue={setValue}
								name="business_id"
								rhf={{ ...register('business_id') }}
								error={errors.business_id?.message}
								defaultValue={initialValues && initialValues.business_id}
							/>
						</SelectOptionsWrapper>

						{/* Assignees */}
						<SelectOptionsWrapper
							list={inviteesList}
							label="Assignees"
							setValue={setValue}
							name="assignee_id"
							error={errors.assignee_id?.message}
						>
							<SelectAssignee
								label="Assignees"
								options={inviteesList}
								setValue={setValue}
								name="assignee_id"
								rhf={{ ...register('assignee_id') }}
								error={errors.assignee_id?.message}
								defaultValue={initialValues && initialValues.assignee_id}
							/>
						</SelectOptionsWrapper>

						{/* Status */}
						<SelectInputLabelValueRHF
							label="Status"
							options={['In Progress', 'Complete', "Can't Do"]}
							valueList={['in_progress', 'complete', 'cant_do']}
							setValue={setValue}
							name="to_do_list"
							rhf={{ ...register('to_do_list') }}
							error={errors.to_do_list?.message}
							darkBg
							defaultValue={initialValues && initialValues.message}
						/>
					</>
				)}

				{error && <FormError message={error} />}
				{success && <FormSuccess message={success} />}

				<div className="w-full pt-5">
					<SubmitButton
						text={edit ? 'update' : 'create'}
						submitting={isPending}
					/>
				</div>
			</form>

			<div className={edit ? '' : 'popup-pb'} />
		</div>
	);
};

export default AddAction;
