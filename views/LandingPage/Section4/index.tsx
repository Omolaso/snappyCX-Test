"use client";

import { useRef } from "react";
import manThinking from "@/public/ManThinking.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { motion, useInView } from "framer-motion";
import { motionContainer, motionElements } from "@/utils/motion";

interface IFAQ {
	question: string;
	answer: string;
}

const FAQs: IFAQ[] = [
	{
		question: "Can I work on a project I started before the hackathon?",
		answer: "Yes",
	},
	{
		question: "What happens if I need help during the hackathon?",
		answer: "You can reach out to your mentors",
	},
	{
		question: "What happens if I don't have an idea for a project?",
		answer: "We will provide one for you",
	},
	{
		question: "Can I join a team or do I have to come with one?",
		answer: "You can join a team",
	},
	{
		question: "What happens after the hackathon ends",
		answer: "You get your price",
	},
];

const Section4 = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			id="faqs"
			className="w-full flex border-b border-b-grey min-h-screen text-white mx-auto max-w-[100rem]"
		>
			<div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 w-full">
				<motion.div
					ref={ref}
					variants={motionContainer}
					initial="hidden"
					animate="visible"
					className="flex flex-col items-center md:items-start gap-4"
				>
					<motion.div
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						viewport={{ once: true }}
						className="flex flex-col items-center md:items-start gap-2 w-full max-w-[21.2rem]"
					>
						<motion.p
							variants={motionElements}
							className="text-center md:text-left text-[1.25rem] md:text-[2rem] font-bold leading-6 md:leading-10"
						>
							Frequently Asked <br />
							<span className="text-purple">Questions</span>
						</motion.p>
						<motion.span
							variants={motionElements}
							className="text-center md:text-left text-[0.875rem]"
						>
							We got answers to the questions that you might want to ask about
							getlinked Hackathon 1.0
						</motion.span>
					</motion.div>
					<motion.div
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						viewport={{ once: true }}
						className="w-full flex flex-col gap-2 md:gap-4 max-w-[27rem]"
					>
						{FAQs.map((faq: IFAQ) => (
							<motion.div
								variants={motionElements}
								key={faq.question}
								className="w-full"
							>
								<Accordion
									sx={{
										width: "100%",
										border: "none",
										borderBottom: "1px solid #D434FE",
										background: "none",
									}}
								>
									<AccordionSummary
										sx={{ boxShadow: "none" }}
										expandIcon={
											<AddSharpIcon
												sx={{
													color: "#D434FE",
												}}
											/>
										}
									>
										<Typography
											sx={{
												color: "#fff",
												fontSize: "14px",
												textAlign: "left",
											}}
										>
											{faq.question}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography sx={{ color: "#fff", fontSize: "14px" }}>
											{faq.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
				<motion.div
					ref={ref}
					className="w-full min-h-[25rem] md:min-h-[45rem] max-h-[50.3rem] max-w-[25rem] md:max-w-[46.3rem]"
					style={{
						backgroundImage: `url(${manThinking.src})`,
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

export default Section4;
