"use client";

import { useState, useRef } from "react";
import { ISocial, socialMediaLinks, IContact } from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import {
	motionContainer,
	motionElements,
	motionElementsInverse,
} from "@/utils/motion";
import { axiosFetcher } from "@/utils/axiosFetcher";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/utils/button";
import Image from "next/image";
import CustomizedSnackbar from "@/utils/snackbar";

const contactAddress: IContact[] = [
	{
		address: "Contact Information",
	},
	{
		address: "27,Alara Street Yaba 100012 Lagos State",
	},
	{ address: "Call Us: +234 679 81819" },
	{ address: "we are open from Monday-Friday	08:00am - 05:00pm" },
];

export const formContainerStyle = {
	width: "100%",
	borderRadius: "0.75rem",
	background: "rgba(255, 255, 255, 0.03)",
	boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const LargeScreenContact = () => {
	const [open, setOpen] = useState(false); //SNACKBAR
	const [submitting, setSubmitting] = useState(false); //Submitting
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	//SNACKBAR
	const handleClick = () => {
		setOpen(true);
	};

	const contactUs = (email: string, name: string, message: string) => {
		setSubmitting(true);
		const contactInfo = {
			email: email,
			first_name: name,
			message: message,
		};

		try {
			axiosFetcher.post("/hackathon/contact-form", contactInfo).then((res) => {
				// console.log(res);
				setSubmitting(false);
				handleClick();
			});
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="w-full">
			<div className="flex flex-row items-center justify-between max-w-[70rem] w-full mx-auto py-8">
				<div className="flex flex-col items-start gap-4 w-full">
					<motion.div
						ref={ref}
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						className="flex flex-col items-start gap-6 min-h-[12.5625rem] w-full max-w-[16.625rem]"
					>
						<motion.span
							variants={motionElements}
							className="text-base font-semibold text-purple"
						>
							Get In Touch
						</motion.span>
						<motion.ul
							variants={motionContainer}
							className="flex flex-col w-full gap-5"
						>
							{contactAddress.map((contact: IContact) => (
								<li
									key={contact.address}
									className="flex items-start gap-4 w-full"
								>
									<span className="text-xs font-normal w-full">
										{contact.address}
									</span>
								</li>
							))}
						</motion.ul>
					</motion.div>
					<motion.div
						variants={motionContainer}
						className="flex flex-col items-start justify-between gap-4 w-full max-w-[12.1875rem]"
					>
						<motion.span
							variants={motionElementsInverse}
							className="text-xs text-purple"
						>
							Share on
						</motion.span>
						<motion.div
							variants={motionElementsInverse}
							className="flex flex-row items-center gap-4"
						>
							{socialMediaLinks.map((socialMediaLink: ISocial) => (
								<Image
									key={socialMediaLink.alt}
									src={socialMediaLink.imgUrl}
									alt={socialMediaLink.alt}
									width={socialMediaLink.alt === "facebook" ? 10 : 19}
									height={18}
								/>
							))}
						</motion.div>
					</motion.div>
				</div>

				<div
					style={formContainerStyle}
					className="flex items-center justify-center w-full min-h-[30rem] max-w-[38.5625rem] p-4"
				>
					<div className="flex flex-col items-center justify-center gap-3 w-full max-w-[27.3125rem]">
						<div className="self-start flex flex-col items-start justify-between min-h-[3.5625rem]">
							<span className="text-[1.25rem] font-semibold text-purple">
								Questions or need assistance?
							</span>
							<span className="text-[1.25rem] font-semibold text-purple">
								Let us know about it!
							</span>
						</div>
						<Formik
							initialValues={{ name: "", email: "", textArea: "" }}
							validationSchema={Yup.object({
								name: Yup.string().required("Required"),

								email: Yup.string()
									.email("Invalid email address")
									.required("Required"),

								textArea: Yup.string().required("Required"),
							})}
							onSubmit={(values, { resetForm }) => {
								contactUs(values.email, values.name, values.textArea);

								resetForm();
							}}
						>
							<Form className="flex-1 flex flex-col items-center gap-4 w-full text-white">
								<motion.div
									variants={motionElementsInverse}
									className="flex flex-col gap-1 w-full"
								>
									<Field
										name="name"
										type="text"
										placeholder="Name"
										className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
									/>
									<div className="text-red font-bold text-base">
										<ErrorMessage name="name" />
									</div>
								</motion.div>

								<motion.div
									variants={motionElementsInverse}
									className="flex flex-col gap-1 w-full"
								>
									<Field
										name="email"
										type="email"
										placeholder="Mail"
										className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
									/>
									<div className="text-red font-bold text-base">
										<ErrorMessage name="email" />
									</div>
								</motion.div>

								<motion.div
									variants={motionElementsInverse}
									className="flex flex-col gap-1 w-full"
								>
									<Field
										name="textArea"
										as="textarea"
										rows="4"
										className="bg-black border rounded min-h-[3rem] px-3 py-2 outline-0 focus:outline-0"
									/>
									<div className="text-red font-bold text-base">
										<ErrorMessage name="textArea" />
									</div>
								</motion.div>

								<Button
									type="submit"
									btnValue={submitting ? "Submitting..." : "Submit"}
								/>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
			<CustomizedSnackbar open={open} setOpen={setOpen} />
		</div>
	);
};

export default LargeScreenContact;
