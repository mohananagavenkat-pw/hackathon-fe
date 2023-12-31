/** @format */

import { BASE_API_URL } from "../../constants/Config";
import { get, post } from "../client";

const token = localStorage.getItem("token");

class AdminApi {
  static async createHackathon(payload) {
    return await fetch("/admin", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async fetchRounds(hackathonId) {
    return get(
      `${BASE_API_URL}/user/fetch-by-rounds/?hackathonId=${hackathonId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

  static async fetchHackathons(hackathonId, questionId) {
    return get(
      `${BASE_API_URL}/admin/fetch-teams/?hackathonId=${hackathonId}&questionId=${questionId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
}
export default AdminApi;
