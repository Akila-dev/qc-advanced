'use client';

import { Suspense } from 'react';
import SignIn from '@/containers/SignIn';

export default function Settings() {
	return (
		<Suspense>
			<SignIn />
		</Suspense>
	);
}
