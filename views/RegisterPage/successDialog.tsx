import { styled } from "@mui/material/styles";
import { Dialog, DialogActions } from "@mui/material";
import congratulations from "@/public/congratulation.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

interface ISuccessDialog {
	successDialogOpen: boolean;
	setSuccessDialogOpen: Function;
}

const SuccessDialog = ({
	successDialogOpen,
	setSuccessDialogOpen,
}: ISuccessDialog) => {
	const handleSuccessDialogClose = () => {
		setSuccessDialogOpen(false);
	};

	return (
		<BootstrapDialog
			fullWidth
			maxWidth="md"
			onClose={handleSuccessDialogClose}
			aria-labelledby="Success Dialog"
			open={successDialogOpen}
		>
			<div className="flex flex-col items-center gap-5 bg-registerSuccessBg text-white w-full">
				<div
					className="w-full min-h-[22rem] max-h-[25rem] max-w-[33rem]"
					style={{
						backgroundImage: `url(${congratulations.src})`,
						backgroundOrigin: "border-box",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				/>

				<div className="flex flex-col items-center gap-4 w-full text-center">
					<span className="text-base md:text-[2rem] font-semibold">
						Congratulations you have successfully Registered!
					</span>

					<span className="font-semibold text-sm">
						Yes, it was easy and you did it! Check your mail box for next step
						&#128521;
					</span>
				</div>

				<DialogActions className="bg-transparent w-full">
					<button
						type="button"
						onClick={handleSuccessDialogClose}
						className="min-h-[3rem] max-h-[3.5rem] w-full rounded-[0.25rem] text-[1rem] text-white bg-gradient-to-r from-purple to-blue active:scale-90 duration-500"
					>
						Back
					</button>
				</DialogActions>
			</div>
		</BootstrapDialog>
	);
};

export default SuccessDialog;
