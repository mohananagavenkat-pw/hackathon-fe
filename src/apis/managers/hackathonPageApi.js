/** @format */

import { get, post } from "../client";

class HackathonApi {
  static async getRounds(hackathonId) {
    return get(`/user/fetch-by-rounds/?hackathonId=${hackathonId}`);
  }

  static async submitHackathon(data) {

    return post(`/user-hackathon/submit`, data)
  }
}

export default HackathonApi;
