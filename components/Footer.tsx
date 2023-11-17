"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/getlinked.svg";
import instagram from "@/public/instagram.svg";
import facebook from "@/public/facebook.svg";
import twitter from "@/public/twitter.svg";
import linkedIn from "@/public/linkedIn.svg";
import phoneNumber from "@/public/contact-phone.svg";
import location from "@/public/location.svg";
import { motion, useInView } from "framer-motion";
import {
	motionContainer,
	motionElements,
	motionElementsInverse,
} from "@/utils/motion";

interface IUsefulLinks {
	name: string;
	path: string;
}

export interface ISocial {
	imgUrl: string;
	alt: string;
}

export interface IContact {
	imgUrl?: string;
	address: string;
}

const footerLinks: IUsefulLinks[] = [
	{
		name: `${Logo.src}`,
		path: "/",
	},
	{
		name: "Overview",
		path: "/",
	},
	{
		name: "Timeline",
		path: "#timeline",
	},
	{
		name: "FAQs",
		path: "#faqs",
	},
	{
		name: "Register",
		path: "/register",
	},
];

export const socialMediaLinks: ISocial[] = [
	{ imgUrl: `${instagram.src}`, alt: "instagram" },
	{ imgUrl: `${twitter.src}`, alt: "twitter" },
	{ imgUrl: `${facebook.src}`, alt: "facebook" },
	{ imgUrl: `${linkedIn.src}`, alt: "linkedIn" },
];

const contactAddress: IContact[] = [
	{ imgUrl: `${phoneNumber.src}`, address: "+234 679 81819" },
	{
		imgUrl: `${location.src}`,
		address: "27,Alara Street Yaba 100012 Lagos State",
	},
];

const Footer = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<footer className="flex items-center justify-center w-full bg-transparent min-h-[24.5625rem] p-4 max-w-[100rem] text-white mx-auto">
			<motion.div
				ref={ref}
				variants={motionContainer}
				initial="hidden"
				animate={isInView ? "visible" : ""}
				className="flex flex-col items-center justify-around md:justify-between gap-4 w-full min-h-[40rem] md:min-h-[20rem]"
			>
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full min-h-[30rem] md:min-h-[12.5625rem] gap-8">
					<motion.div
						ref={ref}
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						className="flex flex-col items-start justify-around md:justify-between h-full w-full max-w-[25.5rem] min-h-[12.5625rem]"
					>
						<motion.div
							variants={motionElements}
							className="flex flex-col items-start gap-2"
						>
							<Link
								href={footerLinks[0].path}
								className="w-full max-h-[2.75rem] max-w-[10.6rem]"
							>
								<Image
									src={footerLinks[0].name}
									alt="Logo"
									width={200}
									height={200}
									priority
								/>
							</Link>
							<motion.span
								variants={motionElements}
								className="text-xs font-normal"
							>
								Getlinked Tech Hackathon is a technology innovation program
								established by a group of organizations with the aim of
								showcasing young and talented individuals in the field of
								technology
							</motion.span>
						</motion.div>
						<motion.div
							variants={motionElements}
							className="flex flex-row items-center gap-2"
						>
							<span>Terms of Use</span>
							<span className="text-purple">&#124;</span>
							<span>Privacy Policy</span>
						</motion.div>
					</motion.div>
					<motion.ul
						ref={ref}
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						className="flex flex-col items-start justify-between min-h-[12.5625rem]"
					>
						<motion.span
							variants={motionElements}
							className="text-base font-semibold text-purple"
						>
							Useful Links
						</motion.span>
						{footerLinks
							.slice(1, footerLinks.length)
							.map((footerLink: IUsefulLinks) => (
								<motion.li variants={motionElements} key={footerLink.path}>
									<Link href={footerLink.path}>{footerLink.name}</Link>
								</motion.li>
							))}
						<motion.div
							variants={motionElements}
							className="flex flex-row items-center justify-between gap-4 w-full max-w-[12.1875rem]"
						>
							<span className="text-xs text-purple">Follow us</span>
							<div className="flex flex-row items-center gap-4">
								{socialMediaLinks.map((socialMediaLink: ISocial) => (
									<Image
										key={socialMediaLink.alt}
										src={socialMediaLink.imgUrl}
										alt={socialMediaLink.alt}
										width={socialMediaLink.alt === "facebook" ? 10 : 19}
										height={18}
									/>
								))}
							</div>
						</motion.div>
					</motion.ul>
					<motion.div
						ref={ref}
						variants={motionContainer}
						initial="hidden"
						animate={isInView ? "visible" : ""}
						className="flex flex-col items-start gap-6 min-h-[12.5625rem]"
					>
						<motion.span
							variants={motionElements}
							className="text-base font-semibold text-purple"
						>
							Contact Us
						</motion.span>
						<motion.ul
							variants={motionContainer}
							className="flex flex-col w-full gap-5"
						>
							{contactAddress.map((contact: IContact) => (
								<li
									key={contact.address}
									className="flex flex-row items-start gap-4"
								>
									<Image
										src={contact.imgUrl!}
										alt={contact.address}
										width={19}
										height={18}
									/>
									<span className="text-xs font-normal w-full max-w-[5.5625rem]">
										{contact.address}
									</span>
								</li>
							))}
						</motion.ul>
					</motion.div>
				</div>
				<motion.span
					variants={motionElementsInverse}
					className="text-xs font-normal"
				>
					All rights reserved. &copy; getlinked Ltd.
				</motion.span>
			</motion.div>
		</footer>
	);
};

export default Footer;
