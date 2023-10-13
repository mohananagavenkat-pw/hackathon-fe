/** @format */

import { post } from "../client";

class AdminApi {
	static async createHackathon(payload) {
		return post("/admin", payload);
	}
}

export default AdminApi;
