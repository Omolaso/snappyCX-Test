"use client";

import terms from "@/public/terms.png";
import Button from "@/utils/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
	motionContainer,
	motionElements,
	motionElementsInverse,
} from "@/utils/motion";

const Section8 = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className="w-full flex border-b border-b-grey min-h-[50%] md:min-h-screen text-white mx-auto max-w-[100rem] py-0 md:py-6">
			<div className="flex flex-col md:flex-row  items-center gap-4 p-4 w-full">
				<motion.div
					ref={ref}
					variants={motionContainer}
					initial="hidden"
					animate={isInView ? "visible" : ""}
					viewport={{ once: true }}
					className="flex flex-col items-center md:items-start gap-8 w-full max-w-[35.6rem]"
				>
					<motion.div
						ref={ref}
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						viewport={{ once: true }}
						className="flex flex-col items-center md:items-start gap-2 md:gap-4 w-full"
					>
						<motion.p
							variants={motionElements}
							className="w-full max-w-[12rem] text-center md:text-left md:max-w-[20rem] text-[1.25rem] md:text-[2rem] font-bold leading-6 md:leading-8"
						>
							Privacy Policy and <span className="text-purple">Terms</span>
						</motion.p>
						<motion.span
							variants={motionElements}
							className="text-sm font-normal text-center md:text-left"
						>
							Last updated on September 12, 2023
						</motion.span>
					</motion.div>
					<motion.span
						variants={motionElements}
						className="text-sm font-normal text-center md:text-left w-full max-w-[27.4rem]"
					>
						Below are our privacy & policy, which outline a lot of goodies.
						it&apos;s our aim to always take of our participant
					</motion.span>
					<motion.div
						variants={motionElementsInverse}
						style={{ background: "rgba(217, 217, 217, 0.03)" }}
						className="flex items-center justify-center w-full border border-purple rounded-[0.3125rem] min-h-[30rem] md:min-h-[38rem] px-2"
					>
						<div className="flex flex-col items-center md:items-start gap-8 w-full max-w-[28rem]">
							<span className="text-xs md:text-sm font-normal text-center md:text-left w-full max-w-full md:max-w-[26.5625rem]">
								At getlinked tech Hackathon 1.0, we value your privacy and are
								committed to protecting your personal information. This Privacy
								Policy outlines how we collect, use, disclose, and safeguard
								your data when you participate in our tech hackathon event. By
								participating in our event, you consent to the practices
								described in this policy.
							</span>
							<div className="flex flex-col items-start gap-4 w-full">
								<div className="flex flex-col items-start gap-2 w-full">
									<span className="text-base font-bold text-purple">
										Licensing Policy
									</span>
									<span className="text-sm font-bold">
										Here are terms of our Standard License:
									</span>
								</div>
								<ul className="flex flex-col gap-3 text-sm list-image-[url(../public/list-image.svg)] list-outside ml-4">
									<li>
										The Standard License grants you a non-exclusive right to
										navigate and register for our event
									</li>
									<li>
										You are licensed to use the item available at any free
										source sites, for your project developement
									</li>
								</ul>
								<div className="flex items-center justify-center w-full">
									<Button btnValue="Read More" />
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
				<motion.div
					ref={ref}
					transition={{ duration: 3, ease: "easeInOut" }}
					className="flex-1 w-full min-h-[30rem] md:min-h-[50rem]"
					style={{
						backgroundImage: `url(${terms.src})`,
						backgroundOrigin: "border-box",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						opacity: isInView ? 1 : 0,
					}}
				/>
			</div>
		</section>
	);
};

export default Section8;
