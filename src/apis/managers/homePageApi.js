/** @format */
import { get } from "../client";

class HomePageApi {
  static async fetchHackathons(eventTime) {
    // return await get(`/user/details/${userName}`);
    console.log(eventTime, "---eventTime");
    return {
      data: [
        {
          title: "event 1",
          companyName: "company 1",
          companyLogo: "companyLogo",
        },
        {
          title: "event 2",
          companyName: "company 2",
          companyLogo: "companyLogo",
        },
        {
          title: "event 3",
          companyName: "company 3",
          companyLogo: "companyLogo",
        },
        {
          title: "event 4",
          companyName: "company 4",
          companyLogo: "companyLogo",
        },
        {
          title: "event 5",
          companyName: "company 5",
          companyLogo: "companyLogo",
        },
        {
          title: "event 6",
          companyName: "company 6",
          companyLogo: "companyLogo",
        },
        {
          title: "event 7",
          companyName: "company 4",
          companyLogo: "companyLogo",
        },
        {
          title: "event 8",
          companyName: "company 5",
          companyLogo: "companyLogo",
        },
        {
          title: "event 9",
          companyName: "company 6",
          companyLogo: "companyLogo",
        },
      ],
    };
  }
}

export default HomePageApi;
