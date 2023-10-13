/** @format */

import { get, post } from "../client";

class AuthApi {
	static async fetchProfile(userName) {
		return get(`/user/details/${userName}`);
	}

	static async healthCheck() {
		return get("/health-check/basic");
	}

	static async login(payload) {
		return post("auth/signin", payload);
	}

	static async signUp(payload) {
		console.log("sdsdsd")
		return post("auth/signup", payload);
	}
}

export default AuthApi;
