/** @format */

import { apiFunction } from "../api";
import { get, post } from "../client";

class HackathonApi {
  static async getRounds(hackathonId) {
    return get(`/user/fetch-by-rounds/?hackathonId=${hackathonId}`);
  }

  static async submitHackathon() {
    const data = {
      userId: "652527039203dfd69f89d47c",
      teamId: "65252c54893e716035d13a20",
      hackathonId: "6526456012c1c19cb8f894c9",
      comment: "this is my submission",
      "title": "Abc hackathon"
    }
    apiFunction("post", "/user-hackathon/submit", data, "")
      .then((resp) => {
        // console.log("details" , resp.data.data[0][filter])
        // setDataToShow(resp.data.data[0]?.filter);
      })
      .catch((err) => {
        console.log("err");
      });
    // return post(`/user-hackathon/submit`, data)
  }
}

export default HackathonApi;
