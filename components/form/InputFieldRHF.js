'use client';

import { useState } from 'react';
import Image from 'next/image';

const InputFieldRHF = ({
	icon,
	label,
	type,
	placeholder,
	additionalClassName,
	rhf,
	error,
	defaultValue,
}) => {
	return (
		<div
			className={`slide-animated-children space-y-[5px] ${
				additionalClassName ? additionalClassName : ''
			}`}
		>
			<div className={`input-block `}>
				<div className="flex">
					<label className={error ? 'text-[--brand]' : ''}>{label}</label>
					{/* {error && (
						<p className="text-[--brand] inline pl-2 text-xs">{error}*</p>
					)} */}
				</div>
				{type === 'textarea' ? (
					<div className="icon-input !items-start">
						{icon && (
							<Image
								src={icon}
								w={20}
								h={20}
								alt={label}
								className="input-img"
							/>
						)}
						<textarea
							defaultValue={defaultValue ? defaultValue : ''}
							placeholder={placeholder}
							{...rhf}
							className="textarea"
						/>
					</div>
				) : (
					<div
						className={`icon-input  ${
							error
								? 'rin ring-[--outline] !borde !border-[--white] !bg-[--border]'
								: ''
						} `}
					>
						{icon && (
							<Image
								src={icon}
								w={20}
								h={20}
								alt={label}
								className="input-img"
							/>
						)}
						<input
							type={type ? type : 'text'}
							placeholder={placeholder}
							defaultValue={defaultValue ? defaultValue : ''}
							{...rhf}
							className="input"
						/>
					</div>
				)}
			</div>
			{error && <p className="text-[--brand] text-xs">{error}*</p>}
		</div>
	);
};

export default InputFieldRHF;
