"use client";

import { useRef } from "react";
import partners from "@/public/partners.png";
import { motion, useInView } from "framer-motion";
import { motionContainer, motionElementsInverse } from "@/utils/motion";

const Section7 = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section className="w-full flex border-b border-b-grey min-h-[50%] md:min-h-screen text-white mx-auto max-w-[100rem] py-0 md:py-6">
			<div className="flex flex-col items-center gap-4 p-4 w-full">
				<motion.div
					ref={ref}
					variants={motionContainer}
					initial="hidden"
					animate={isInView ? "visible" : ""}
					viewport={{ once: true }}
					className="w-full flex flex-col gap-4 items-center max-w-[17.85rem] md:max-w-[28.25rem]"
				>
					<motion.span
						variants={motionElementsInverse}
						className="w-full text-center text-[1.25rem] md:text-[2rem] font-bold leading-6 md:leading-8"
					>
						Partners and Sponsors
					</motion.span>
					<motion.span
						variants={motionElementsInverse}
						className="text-sm font-normal text-center"
					>
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors
					</motion.span>
				</motion.div>
				<motion.div
					ref={ref}
					className="w-full min-h-[13.1rem] md:min-h-[30rem] max-w-[18.5rem] md:max-w-[43.25rem]"
					style={{
						backgroundImage: `url(${partners.src})`,
						backgroundOrigin: "border-box",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						opacity: isInView ? 1 : 0,
						transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				/>
			</div>
		</section>
	);
};

export default Section7;
