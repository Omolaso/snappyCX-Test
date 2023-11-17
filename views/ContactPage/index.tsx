import Navbar from "@/components/Navbar";
import LargeScreenContact from "./LargeScreenContact";
import SmallScreenContact from "./SmallScreenContact";

const ContactPage = () => {
	return (
		<>
			<section className="hidden md:block w-full bg-black min-h-screen">
				<Navbar />
				<div className="flex items-center justify-center min-h-[50vh] p-4 bg-[transparent] text-white w-full">
					<LargeScreenContact />
				</div>
			</section>
			<SmallScreenContact />
		</>
	);
};

export default ContactPage;
