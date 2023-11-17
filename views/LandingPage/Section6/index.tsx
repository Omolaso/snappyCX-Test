"use client";

import { useRef } from "react";
import prizes from "@/public/prizes.png";
import rewards from "@/public/rewards.png";
import { motion, useInView } from "framer-motion";
import {
	motionContainer,
	motionElements,
	motionElementsInverse,
} from "@/utils/motion";

const Section6 = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className="w-full flex border-b border-b-grey min-h-screen md:min-h-screen text-white mx-auto max-w-[100rem] py-0 md:py-6">
			<div className="flex flex-col items-center gap-4 p-4 w-full">
				<motion.div
					ref={ref}
					initial={{ x: -2000 }}
					animate={isInView ? { x: 1 } : { x: 0 }}
					transition={{ type: "spring", stiffness: 50, duration: "linear" }}
					className="flex items-center justify-center md:justify-end max-w-[55rem] w-full"
				>
					<div className="w-full flex flex-col gap-1 items-center md:items-start max-w-[25rem]">
						<p className="w-full max-w-[7rem] md:max-w-[11rem] text-[1.25rem] md:text-[2rem] font-bold leading-6 md:leading-8">
							Prizes and <span className="text-purple">Rewards</span>
						</p>
						<span className="text-base font-normal text-center md:text-left">
							Highlight of the prizes or rewards for winners and for
							participants.
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={motionContainer}
					ref={ref}
					initial="hidden"
					animate={isInView ? "visible" : ""}
					className="flex flex-col md:flex-row items-center justify-between gap-[4rem] md:gap-2 w-full"
				>
					<motion.div
						variants={motionElementsInverse}
						transition={{ duration: 1, ease: "linear" }}
						className="w-full min-h-[17.6rem] md:min-h-[30rem] max-w-[20rem] md:max-w-[34.25rem]"
						style={{
							backgroundImage: `url(${prizes.src})`,
							backgroundOrigin: "border-box",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
						}}
					/>
					<motion.div
						variants={motionElementsInverse}
						transition={{ duration: 1, ease: "linear" }}
						className="w-full min-h-[13.1rem] md:min-h-[30rem] max-w-[18.5rem] md:max-w-[43.25rem]"
						style={{
							backgroundImage: `url(${rewards.src})`,
							backgroundOrigin: "border-box",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
						}}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Section6;
