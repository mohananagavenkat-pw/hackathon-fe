/** @format */

import { get, post } from "../client";

class HackathonApi {
  static async getRounds(hackathonId) {
    return get(`/user/fetch-by-rounds/?hackathonId=${hackathonId}`);
  }
}

export default HackathonApi;
