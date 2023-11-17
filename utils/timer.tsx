import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { motionContainer, motionElementsInverse } from "./motion";

interface ITimerProp {
	count?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
	completed?: boolean;
}

const renderer = ({ hours, minutes, seconds, completed }: ITimerProp) => {
	if (completed) {
		return (
			<motion.span
				variants={motionContainer}
				initial="hidden"
				animate="visible"
				className="text-[3rem] lg:text-[4rem] font-normal"
			>
				{hours}
				<motion.small
					variants={motionElementsInverse}
					transition={{ duration: 1, ease: [1, 1, 1, 1] }}
					className="text-[0.875rem] font-normal"
				>
					H
				</motion.small>{" "}
				{minutes}
				<motion.small
					variants={motionElementsInverse}
					transition={{ duration: 1, ease: [1, 1, 1, 1] }}
					className="text-[0.875rem] font-normal"
				>
					M
				</motion.small>{" "}
				{seconds}
				<motion.small
					variants={motionElementsInverse}
					transition={{ duration: 1, ease: [1, 1, 1, 1] }}
					className="text-[0.875rem] font-normal"
				>
					S
				</motion.small>
			</motion.span>
		);
	} else {
		return (
			<motion.span
				variants={motionContainer}
				initial="hidden"
				animate="visible"
				className="text-[3rem] lg:text-[4rem] font-normal"
			>
				{hours}
				<motion.small
					variants={motionElementsInverse}
					transition={{ duration: 1, ease: [1, 1, 1, 1] }}
					className="text-[0.875rem] font-normal"
				>
					H
				</motion.small>{" "}
				{minutes}
				<motion.small
					variants={motionElementsInverse}
					transition={{ duration: 1, ease: [1, 1, 1, 1] }}
					className="text-[0.875rem] font-normal"
				>
					M
				</motion.small>{" "}
				{seconds}
				<motion.small
					variants={motionElementsInverse}
					transition={{ duration: 1, ease: [1, 1, 1, 1] }}
					className="text-[0.875rem] font-normal"
				>
					S
				</motion.small>
			</motion.span>
		);
	}
};

const Timer = ({ count }: ITimerProp) => {
	return (
		<Countdown
			date={Date.now() + count!}
			renderer={renderer}
			autoStart={true}
		/>
	);
};

export default Timer;
