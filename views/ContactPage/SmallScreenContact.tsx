"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";
import Image from "next/image";
import { axiosFetcher } from "@/utils/axiosFetcher";
import { motion } from "framer-motion";
import { motionContainer, motionElementsInverse } from "@/utils/motion";
import Button from "@/utils/button";
import { ISocial, socialMediaLinks, IContact } from "@/components/Footer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomizedSnackbar from "@/utils/snackbar";

const SmallScreenContact = () => {
	const [open, setOpen] = useState(false); //SNACKBAR
	const [submitting, setSubmitting] = useState(false); //Submitting
	const router = useRouter();

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
		}
	};
	return (
		<section>
			<div className="flex md:hidden items-center justify-center w-full bg-black min-h-screen text-white p-4">
				<div className="flex flex-col items-center justify-between gap-6 min-h-[90vh] w-full max-w-[30rem]">
					<button
						type="button"
						onClick={() => router.back()}
						className="styled-border self-start"
					>
						<IoChevronBackOutline className="text-white font-bold w-8 h-8" />
					</button>

					<div className="self-start flex flex-col items-start gap-6 w-full max-w-[14.9375rem]">
						<div className="flex flex-col items-start w-full gap-1">
							<span className="text-[1.25rem] font-semibold text-purple">
								Questions or need assistance?
							</span>
							<span className="text-[1.25rem] font-semibold text-purple">
								Let us know about it!
							</span>
						</div>
						<span className=" text-xs font-normal">
							Email us below to any question related to our event
						</span>
					</div>

					<div className="flex flex-col items-center justify-center gap-3 w-full">
						<Formik
							initialValues={{
								teamName: "",
								topic: "",
								email: "",
								textArea: "",
							}}
							validationSchema={Yup.object({
								teamName: Yup.string().required("Required"),

								topic: Yup.string().required("Required"),

								email: Yup.string()
									.email("Invalid email address")
									.required("Required"),

								textArea: Yup.string().required("Required"),
							})}
							onSubmit={(values, { resetForm }) => {
								contactUs(values.email, values.teamName, values.textArea);
								resetForm();
							}}
						>
							<Form className="flex-1 flex flex-col items-center gap-4 w-full text-white">
								<motion.div
									variants={motionElementsInverse}
									className="flex flex-col gap-1 w-full"
								>
									<Field
										name="teamName"
										type="text"
										placeholder="Team's Name"
										className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
									/>
									<div className="text-red font-bold text-base">
										<ErrorMessage name="teamName" />
									</div>
								</motion.div>

								<motion.div
									variants={motionElementsInverse}
									className="flex flex-col gap-1 w-full"
								>
									<Field
										name="topic"
										type="text"
										placeholder="Topic"
										className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
									/>
									<div className="text-red font-bold text-base">
										<ErrorMessage name="topic" />
									</div>
								</motion.div>

								<motion.div
									variants={motionElementsInverse}
									className="flex flex-col gap-1 w-full"
								>
									<Field
										name="email"
										type="email"
										placeholder="Email"
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
										placeholder="Message"
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
					<motion.div
						variants={motionContainer}
						className="flex flex-col items-center justify-between gap-4 w-full max-w-[12.1875rem]"
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
			</div>
			<CustomizedSnackbar open={open} setOpen={setOpen} />
		</section>
	);
};

export default SmallScreenContact;
