/** @format */
import { get } from "../client";

const BASE_API_URL = "https://c45a-14-97-167-154.ngrok-free.app/api";

class HomePageApi {
  static async fetchHackathons(eventTime) {
    return await get(
      `${BASE_API_URL}/api/user/?hackathonId=&hackathonMode=live&skip=1&limit=10`
    );
  }
}

export default HomePageApi;
