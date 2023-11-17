"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/getlinked.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@/utils/button";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { motionContainer, motionElements } from "@/utils/motion";

interface INavProps {
	name: string;
	path: string;
}

const navLinks: INavProps[] = [
	{
		name: `${Logo.src}`,
		path: "/",
	},
	{
		name: "Timeline",
		path: "/#timeline",
	},
	{
		name: "Overview",
		path: "/",
	},
	{
		name: "FAQs",
		path: "/#faqs",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

const Navbar = () => {
	const [modal, setModal] = useState(false);
	const router = useRouter();
	const pathname: string = usePathname();

	const navigate = () => {
		router.push("/register");
	};

	return (
		<nav
			id="back-to-top-anchor"
			className="flex items-center justify-between w-full bg-transparent gap-4 min-h-[5rem] border-b border-b-grey p-4 max-w-[100rem] mx-auto"
		>
			<Link
				href={navLinks[0].path}
				className="w-full max-h-[2.75rem] max-w-[10.6rem]"
			>
				<Image
					src={navLinks[0].name}
					alt="Logo"
					width={200}
					height={200}
					priority
				/>
			</Link>
			<div className="hidden lg:flex items-center justify-between w-full max-w-[45rem] gap-4">
				<motion.ul
					variants={motionContainer}
					initial="hidden"
					animate="visible"
					className="flex items-center justify-between text-white w-full max-w-[25rem]"
				>
					{navLinks.slice(1, navLinks.length).map((navLink: INavProps) => (
						<motion.li key={navLink.name} variants={motionElements}>
							{pathname === navLink.path ? (
								<Link href={navLink.path} className="active-navlink">
									{navLink.name}
								</Link>
							) : (
								<Link href={navLink.path}>{navLink.name}</Link>
							)}
						</motion.li>
					))}
				</motion.ul>

				<motion.div
					variants={motionContainer}
					initial="hidden"
					animate="visible"
					className="w-full max-w-[10rem]"
				>
					<Button btnValue="Register" onClick={navigate} />
				</motion.div>
			</div>

			{/*NAVS MOBILE VIEW */}
			<div className="block lg:hidden relative">
				<button type="button" onClick={() => setModal(true)}>
					<RiMenu4Fill className="text-white font-bold w-10 h-10" />
				</button>

				<div
					className={
						modal
							? "fixed z-50 right-0 top-0 h-full bg-black flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
							: "fixed z-50 right-[-100%] h-full top-0 bg-black flex flex-col justify-between flex-[0.3] w-full duration-500 ease-in-out p-4"
					}
				>
					<div className="flex flex-col gap-8">
						<button
							type="button"
							onClick={() => setModal(false)}
							className="styled-border self-end"
						>
							<AiOutlineClose className="text-white font-bold w-8 h-8" />
						</button>
						<ul className="flex flex-col gap-8 text-lg">
							{navLinks.slice(1, navLinks.length).map((navLink: INavProps) => (
								<li key={navLink.name} className="w-full min-h-[2.5rem]">
									{navLink.path.startsWith("#") ? (
										<a
											href={navLink.path}
											onClick={() => setModal(false)}
											className="text-white font-medium text-lg"
										>
											{navLink.name}
										</a>
									) : (
										<Link
											href={navLink.path}
											onClick={() => setModal(false)}
											className="text-white font-medium text-lg"
										>
											{navLink.name}
										</Link>
									)}
								</li>
							))}
						</ul>
						<div className="w-full max-w-[10rem]">
							<Button btnValue="Register" onClick={navigate} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
