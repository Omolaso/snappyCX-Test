import { Variants } from "framer-motion";

export const motionContainer = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
};

export const motionElements = {
	hidden: { y: 20, opacity: 0, duration: 10 },
	visible: {
		y: 0,
		opacity: 1,
	},
};
export const motionElementsInverse = {
	hidden: { y: -20, opacity: 0, duration: 10 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const motionElementOpacity = {
	hidden: { y: 0, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

