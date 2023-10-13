/** @format */
import { get } from "../client";

class HomePageApi {
  static async fetchHackathons(eventTime) {
    // return await get(`/user/details/${userName}`);
    console.log(eventTime, "---eventTime");
    return {
      data: [
        {
          id: "1",
          title: "event1",
          companyName: "company 1",
          companyLogo: "companyLogo",
        },
        {
          id: "2",
          title: "event 2",
          companyName: "company 2",
          companyLogo: "companyLogo",
        },
        {
          id: "3",
          title: "event 3",
          companyName: "company 3",
          companyLogo: "companyLogo",
        },
        {
          id: "4",
          title: "event 4",
          companyName: "company 4",
          companyLogo: "companyLogo",
        },
        {
          id: "5",
          title: "event 5",
          companyName: "company 5",
          companyLogo: "companyLogo",
        },
        {
          id: "6",
          title: "event 6",
          companyName: "company 6",
          companyLogo: "companyLogo",
        },
        {
          id: "7",
          title: "event 7",
          companyName: "company 4",
          companyLogo: "companyLogo",
        },
        {
          id: "8",
          title: "event 8",
          companyName: "company 5",
          companyLogo: "companyLogo",
        },
        {
          id: "9",
          title: "event 9",
          companyName: "company 6",
          companyLogo: "companyLogo",
        },
      ],
    };
  }
}

export default HomePageApi;
