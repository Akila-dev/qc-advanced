// UESED BY MOBILE NAV LINKS
export const slideInBottom = {
	initial: { opacity: 0, x: 50, y: 50 },
	animate: {
		opacity: 1,
		x: [50, 0],
		y: [50, 0],
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
	exit: {
		opacity: 0,
		x: [0, 10],
		y: [0, 10],
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 25,
		},
	},
};

// UESED BY SECTION BLOCKS
export const slideInBottom2 = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		// x: [50, 0],
		y: [50, 0],
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
	exit: {
		opacity: 0,
		x: [0, 10],
		y: [0, 10],
		transition: {
			type: 'spring',
			stiffness: 800,
			damping: 25,
		},
	},
};

// USED BY HERO IMAGES
export const popIn = {
	initial: { scale: 0 },
	animate: {
		scale: [0, 1.5, 1],
		transition: {
			type: 'spring',
			stiffness: 500,
			damping: 85,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 25,
		},
	},
};
