"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { motionElementsInverse } from "@/utils/motion";
import registerMan from "@/public/registerer.png";
import movement from "@/public/movement.png";
import Navbar from "@/components/Navbar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/utils/button";
import { formContainerStyle } from "../ContactPage/LargeScreenContact";
import { axiosFetcher } from "@/utils/axiosFetcher";
import SuccessDialog from "./successDialog";

const RegisterPage = () => {
	const [registering, setRegistering] = useState(false);
	const [successDialogOpen, setSuccessDialogOpen] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const teamRegister = (
		teamName: string,
		phone: string,
		email: string,
		projectTopic: string,
		category: number,
		groupSize: number,
		checkbox: boolean
	) => {
		setRegistering(true);
		const teamInfo = {
			team_name: teamName,
			phone_number: phone,
			email: email,
			project_topic: projectTopic,
			category: category,
			group_size: groupSize,
			privacy_poclicy_accepted: checkbox,
		};

		try {
			axiosFetcher.post("/hackathon/registration", teamInfo).then((res) => {
				// console.log(res);
				handleSuccessDialogOpen();
			});
		} catch (error) {
			console.log(error);
			setRegistering(false);
		} finally {
			setRegistering(false);
		}
	};

	const handleSuccessDialogOpen = () => {
		setSuccessDialogOpen(true);
	};

	return (
		<>
			<section className="w-full bg-black min-h-screen">
				<Navbar />

				<div className="flex flex-col md:flex-row items-center justify-between gap-3 max-w-[100rem] mx-auto w-full text-white p-4">
					<span className="self-start block md:hidden text-[2rem] font-semibold text-purple">
						Register
					</span>
					<motion.div
						ref={ref}
						className="w-full min-h-[27rem] max-h-[27.5rem] max-w-[33rem]"
						style={{
							backgroundImage: `url(${registerMan.src})`,
							backgroundOrigin: "border-box",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
							opacity: isInView ? 1 : 0,
							transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
						}}
					/>

					<div
						style={formContainerStyle}
						className="flex items-center justify-center w-full min-h-[30rem] max-w-[45rem] p-4"
					>
						<div className="flex flex-col items-center justify-center gap-3 w-full max-w-[38rem]">
							<div className="self-center md:self-start flex flex-col items-center md:items-start gap-2 justify-center md:justify-between min-h-[6rem]">
								<span className="hidden md:block text-[2rem] font-semibold text-purple">
									Register
								</span>
								<div className="flex flex-row items-end justify-center gap-3">
									<span className="text-[0.875rem] font-base">
										Be part of the movement!
									</span>
									<Image
										src={movement.src}
										alt="movement"
										width={100}
										height={20}
										className="mb-[0.375rem]"
									/>
								</div>
								<span className="text-[1.5rem] font-medium">
									CREATE YOUR ACCOUNT
								</span>
							</div>
							<Formik
								initialValues={{
									teamName: "",
									phone: "",
									email: "",
									projectTopic: "",
									category: 1,
									groupSize: 10,
									checkbox: false,
								}}
								validationSchema={Yup.object({
									teamName: Yup.string().required("Required"),
									phone: Yup.string().required("Required"),
									email: Yup.string()
										.email("Invalid email address")
										.required("Required"),
									projectTopic: Yup.string().required("Required"),
									category: Yup.number().required("Required"),
									groupSize: Yup.number().required("Required"),
									checkbox: Yup.boolean().required("Required"),
								})}
								onSubmit={(values, { resetForm }) => {
									teamRegister(
										values.teamName,
										values.phone,
										values.email,
										values.projectTopic,
										values.category,
										values.groupSize,
										values.checkbox
									);

									resetForm();
								}}
							>
								<Form className="flex-1 flex flex-col items-center gap-4 w-full text-white">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
										<motion.div
											variants={motionElementsInverse}
											className="flex flex-col gap-1 w-full"
										>
											<label htmlFor="teamName" className="text-sm font-normal">
												Team&apos;s Name
											</label>
											<Field
												name="teamName"
												id="teamName"
												placeholder="Enter the name of your group"
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
											<label htmlFor="phone" className="text-sm font-normal">
												Phone
											</label>
											<Field
												name="phone"
												id="phone"
												placeholder="Enter the phone number"
												className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
											/>
											<div className="text-red font-bold text-base">
												<ErrorMessage name="phone" />
											</div>
										</motion.div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
										<motion.div
											variants={motionElementsInverse}
											className="flex flex-col gap-1 w-full"
										>
											<label htmlFor="email" className="text-sm font-normal">
												Email
											</label>
											<Field
												type="email"
												name="email"
												id="email"
												placeholder="Enter your email address"
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
											<label
												htmlFor="projectTopic"
												className="text-sm font-normal"
											>
												Project Topic
											</label>
											<Field
												name="projectTopic"
												id="projectTopic"
												placeholder="What is your project topic?"
												className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
											/>
											<div className="text-red font-bold text-base">
												<ErrorMessage name="projectTopic" />
											</div>
										</motion.div>
									</div>

									<div className="grid grid-cols-3 md:grid-cols-2 gap-4 md:gap-6 w-full">
										<motion.div
											variants={motionElementsInverse}
											className="col-span-2 md:col-span-1 flex flex-col gap-1 w-full"
										>
											<label htmlFor="category" className="text-sm font-normal">
												Category
											</label>
											<Field
												as="select"
												name="category"
												id="category"
												className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
											>
												<option defaultValue="select category" disabled>
													Select your category
												</option>
												<option value={1}>1</option>
												<option value={2}>2</option>
												<option value={3}>3</option>
											</Field>
											<div className="text-red font-bold text-base">
												<ErrorMessage name="category" />
											</div>
										</motion.div>

										<motion.div
											variants={motionElementsInverse}
											className="flex flex-col gap-1 w-full"
										>
											<label
												htmlFor="groupSize"
												className="text-sm font-normal"
											>
												Group Size
											</label>
											<Field
												as="select"
												name="groupSize"
												id="groupSize"
												className="bg-black border rounded min-h-[3rem] px-3 outline-0 focus:outline-0"
											>
												<option disabled>Select</option>
												<option value={10}>10</option>
												<option value={20}>20</option>
												<option value={30}>30</option>
											</Field>
											<div className="text-red font-bold text-base">
												<ErrorMessage name="groupSize" />
											</div>
										</motion.div>
									</div>

									<div className="self-start flex flex-col gap-4 w-full">
										<span className="text-purple italic text-xs text-center md:text-left">
											Please review your registration details before submitting
										</span>
										<div className="flex flex-col gap-1 w-full">
											<label
												htmlFor="checkbox"
												className="flex flex-row items-start justify-start gap-2 text-xs font-normal"
											>
												<Field type="checkbox" id="checkbox" name="checkbox" />
												<span>
													I agreed with the event terms and conditions and
													privacy policy
												</span>
											</label>
											<div className="text-red font-bold text-base">
												<ErrorMessage name="checkbox" />
											</div>
										</div>
									</div>

									<button
										type="submit"
										className="hidden md:block min-h-[3rem] max-h-[3.5rem] w-full rounded-[0.25rem] text-[1rem] text-white bg-gradient-to-r from-purple to-blue active:scale-90 duration-500"
									>
										{registering ? "Registering Your team..." : "Register Now"}
									</button>

									<div className="flex md:hidden items-center justify-center w-full">
										<Button
											type="submit"
											btnValue={registering ? "Registering..." : "Register Now"}
										/>
									</div>
								</Form>
							</Formik>
						</div>
					</div>
				</div>
			</section>

			<SuccessDialog
				successDialogOpen={successDialogOpen}
				setSuccessDialogOpen={setSuccessDialogOpen}
			/>
		</>
	);
};

export default RegisterPage;
