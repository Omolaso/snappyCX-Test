import bigIdea from "@/public/bigIdea.png";
import bigIdeaMobile from "@/public/bigIdeaMobile.png";
import womanSitting from "@/public/woman_sitting.png";
import {
	motionContainer,
	motionElements,
	motionElementsInverse,
} from "@/utils/motion";
import { motion } from "framer-motion";

interface ISection2Props {
	heading1: string;
	heading2: string;
	paragraph: string;
	img: string;
	imgMobile?: string;
	imgPosition: string;
}

const section2Data: ISection2Props[] = [
	{
		img: `${bigIdea.src}`,
		imgMobile: `${bigIdeaMobile.src}`,
		imgPosition: "left",
		heading1: "Introduction to getlinked",
		heading2: "tech Hackathon 1.0",
		paragraph:
			"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!",
	},
	{
		img: `${womanSitting.src}`,
		imgPosition: "right",
		heading1: "Rules and",
		heading2: "Guidelines",
		paragraph:
			"Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!",
	},
];

const Section2 = () => {
	return (
		<section className="w-full min-h-screen text-white mx-auto max-w-[100rem]">
			<div className="flex flex-col w-full">
				{section2Data.map((data: ISection2Props) => (
					<motion.div
						key={data.imgPosition}
						className="w-full border-b border-b-grey p-4"
					>
						{data.imgPosition === "left" ? (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 2, ease: "easeInOut" }}
								className="flex flex-col md:flex-row text-center md:text-left items-center justify-between w-full py-6 max-w-[70rem] mx-auto gap-2"
							>
								<div
									className="w-full min-h-[27rem] max-h-[27.5rem] max-w-[33rem] hidden md:block"
									style={{
										backgroundImage: `url(${data.img})`,
										backgroundOrigin: "border-box",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										backgroundSize: "contain",
									}}
								/>
								<div
									className="w-full min-h-[27rem] max-h-[27.5rem] max-w-[33rem] block md:hidden"
									style={{
										backgroundImage: `url(${data.imgMobile})`,
										backgroundOrigin: "border-box",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										backgroundSize: "contain",
									}}
								/>
								<div className="flex flex-col gap-4 text-[1.125rem] md:text-[2rem] font-bold w-full max-w-[20.1rem] md:max-w-[33rem]">
									<div className="flex flex-col">
										<span>{data.heading1}</span>
										<span className="text-purple">{data.heading2}</span>
									</div>
									<p className="text-[0.875rem] font-normal">
										{data.paragraph}
									</p>
								</div>
							</motion.div>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 2, ease: "easeInOut" }}
								className="flex flex-col md:flex-row-reverse text-center md:text-left items-center justify-between w-full py-6 max-w-[70rem] mx-auto gap-2"
							>
								<div
									className="w-full min-h-[27rem] max-h-[27.5rem] max-w-[33rem]"
									style={{
										backgroundImage: `url(${data.img})`,
										backgroundOrigin: "border-box",
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										backgroundSize: "contain",
									}}
								/>
								<div className="flex flex-col gap-4 text-[1.125rem] md:text-[2rem] font-bold w-full max-w-[20.1rem] md:max-w-[33rem]">
									<div className="flex flex-col">
										<span>{data.heading1}</span>
										<span className="text-purple">{data.heading2}</span>
									</div>
									<p className="text-[0.875rem] font-normal">
										{data.paragraph}
									</p>
								</div>
							</motion.div>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Section2;
