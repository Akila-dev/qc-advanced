/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'',
			'cdn.pixabay.com',
			'p16-amd-va.tiktokcdn.com',
			'image.shutterstock.com',
			'dev.appmania.co.in',
		],
	},
};

export default nextConfig;
