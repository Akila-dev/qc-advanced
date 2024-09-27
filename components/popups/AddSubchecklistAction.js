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
import { addAction } from '@/config/addAction';
import { AdminActionSchema } from '@/schemas';

const AddSubchecklistAction = ({
	close,
	className,
	mini,
	admin,
	businessList,
	actionsList,
	setActionsList,
}) => {
	const { data: session } = useSession();
	const userId = session?.user?.id;
	const [isPending, setIsPending] = useState();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const [showInvitees, setShowInvitees] = useState(false);
	const [inviteesList, setInviteesList] = useState([]);

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
		let values = getValues();
		if (values.business_id.length > 0) {
			let assigneeData = businessList.filter(
				(res) => res.business_id === values.business_id
			);
			setInviteesList(assigneeData[0].assignee_dtl);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// show invitees tab only when a business has been selected
	// look for list invitees for that particular business
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if (value.business_id.length > 0) {
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
	};

	return (
		<div
			className={
				className ? className : 'h-full w-full py-5 px-4 lg:p-7 space-y-8'
			}
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
				/>
				{/* Description */}
				<InputFieldRHF
					label="Descriptiom"
					type="text"
					placeholder="Enter Description"
					rhf={{ ...register('desc') }}
					error={errors.desc?.message}
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
				/>
				{/* DueDate */}
				<DateTimePicker
					label="Due Date"
					setValue={setValue}
					name="due_date"
					rhf={{ ...register('due_date') }}
					error={errors.due_date?.message}
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
					darkBg={mini}
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
						/>
					</>
				)}

				{error && <FormError message={error} />}
				{success && <FormSuccess message={success} />}

				{mini ? (
					<div className="w-full grid grid-cols-2 gap-4 lg:gap-5">
						<Button text="close" noBg onClick={close} />
						<SubmitButton text={'create'} submitting={isPending} />
					</div>
				) : (
					<div className="w-full">
						<SubmitButton text={'create'} submitting={isPending} />
					</div>
				)}
			</form>

			<div className={mini ? '' : 'popup-pb'} />
		</div>
	);
};

export default AddSubchecklistAction;
