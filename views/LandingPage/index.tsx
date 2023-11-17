"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Footer from "@/components/Footer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

interface Props {
	window?: () => Window;
	children?: React.ReactElement;
}

function ScrollTop(props: Props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector("#back-to-top-anchor");

		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

const LandingPage = (props: Props) => {
	return (
		<main className="w-full bg-black">
			<Navbar />
			<HeroSection />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Footer />
			<ScrollTop {...props}>
				<Fab
					size="medium"
					aria-label="scroll back to top"
					title="Scroll Up"
					sx={{ color: "#D434FE" }}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</main>
	);
};

export default LandingPage;
