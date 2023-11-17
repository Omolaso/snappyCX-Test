import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { sectionTimeline, ITimeline } from "./";
import { motion } from "framer-motion";
import { motionElementsInverse } from "@/utils/motion";

const SmallScreenTimeline = () => {
	return (
		<motion.div variants={motionElementsInverse} className="w-full">
			<Timeline
				sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
			>
				{sectionTimeline.map((timeLine: ITimeline, index: number) => (
					<TimelineItem key={timeLine.heading1} className="flex flex-row">
						<TimelineSeparator>
							<TimelineConnector
								sx={{ minHeight: "40px" }}
								className="bg-gradient-to-r from-blue to-purple w-full max-w-[3px]"
							/>
							<TimelineDot
								className="bg-gradient-to-r from-blue to-purple text-xs"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: "19.3px",
									height: "19.3px",
								}}
							>
								{index + 1}
							</TimelineDot>
						</TimelineSeparator>
						<TimelineContent className="flex flex-col gap-2 mb-4">
							<Typography
								variant="h6"
								component="span"
								className="text-xs font-bold text-purple"
							>
								{timeLine.heading1}
							</Typography>
							<Typography className="text-xs font-normal">
								{timeLine.paragraph}
							</Typography>
							<Typography className="text-xs font-bold text-purple">
								{timeLine.heading2}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</motion.div>
	);
};

export default SmallScreenTimeline;
