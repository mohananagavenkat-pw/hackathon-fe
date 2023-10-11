/** @format */

import { LocalStorage } from "./hooks/utils/classes";

export const validateEmail = (value) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(value);
};

export const saveTokenAndRole = (token, role) => {
	console.log("save----");
	if (token && role) {
		LocalStorage.set("token", token);
		LocalStorage.set("isAdmin", role);
	}
	return;
};
