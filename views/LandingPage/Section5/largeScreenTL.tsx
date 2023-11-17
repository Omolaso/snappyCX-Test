import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { sectionTimeline, ITimeline } from "./";
import { motion } from "framer-motion";
import { motionElements } from "@/utils/motion";

const LargeScreenTimeline = () => {
	return (
		<motion.div variants={motionElements} className="w-full">
			<Timeline position="alternate-reverse" sx={{ width: "100%" }}>
				{sectionTimeline.map((timeLine: ITimeline, index: number) => (
					<TimelineItem key={timeLine.heading1}>
						<TimelineOppositeContent
							sx={{
								m: "auto 0",
								pt: "60px",
								px: 2,
							}}
							align="right"
							variant="body2"
							className="text-[1.5rem] text-purple font-bold"
						>
							{timeLine.heading2}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector
								sx={{ height: "50px" }}
								className="bg-gradient-to-r from-blue to-purple w-full max-w-[3px]"
							/>
							<TimelineDot
								className="bg-gradient-to-r from-blue to-purple"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: "50px",
									height: "50px",
								}}
							>
								{index + 1}
							</TimelineDot>
						</TimelineSeparator>
						<TimelineContent sx={{ pt: "60px", px: 2 }}>
							<Typography
								variant="h6"
								component="span"
								className="text-[1.5rem] text-purple font-bold"
							>
								{timeLine.heading1}
							</Typography>
							<Typography className="text-[0.875rem] font-normal">
								{timeLine.paragraph}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</motion.div>
	);
};

export default LargeScreenTimeline;
