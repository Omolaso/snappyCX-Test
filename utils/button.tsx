"use client";

import { motion } from "framer-motion";
import { motionElements } from "@/utils/motion";

interface IButton {
	type?: string | any;
	btnValue: string;
	onClick?: VoidFunction;
}

const Button = ({ type, btnValue, onClick }: IButton) => {
	return (
		<motion.button
			type={type ? type : "button"}
			onClick={onClick}
			variants={motionElements}
			className="min-h-[3rem] max-h-[3.5rem] w-full max-w-[9.5rem] md:max-w-[11rem] rounded-[0.25rem] text-[1rem] text-white bg-gradient-to-r from-purple to-blue active:scale-90 duration-500"
		>
			{btnValue}
		</motion.button>
	);
};

export default Button;
