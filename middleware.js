import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
	function middleware(req) {
		// console.log(req.nextUrl.pathname)
		// console.log(req.nextauth.token.role);

		if (
			req.nextUrl.pathname.startsWith('/admin') &&
			req.nextauth.token.role != 'admin'
		) {
			return NextResponse.rewrite(new URL('/api/auth/signin', req.url));
		} else if (
			req.nextUrl.pathname.startsWith('/user') &&
			req.nextauth.token.role != 'user'
		) {
			return NextResponse.rewrite(new URL('/api/auth/signin', req.url));
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
);

export const config = {
	matcher: ['/admin(.*)', '/user(.*)'],
};
