import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./views/**/*.{js,ts,jsx,tsx,mdx}",
		"./utils/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xsm: "300px",
			sm: "480px",
			md: "768px",
			lg: "1100px",
			xl: "1440px",
		},
		extend: {
			colors: {
				white: "#fff",
				grey: "#2c233e",
				black: "#150E28",
				blue: "#903AFF",
				purple: "#D434FE",
				pink: "#FE34B9",
				red: "#ED1C24",
				registerSuccessBg: "#17102A",
			},
			btnBackgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
