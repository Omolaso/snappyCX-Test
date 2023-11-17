import axios from "axios";

export const axiosFetcher = axios.create({
	baseURL: " https://backend.getlinked.ai",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
