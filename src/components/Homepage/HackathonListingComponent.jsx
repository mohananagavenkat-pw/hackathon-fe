import React from "react";
import { Button, Typography } from "@pwskills/rachnaui";
import EventCard from "./EventCard";
import { ArrowForward } from "@pwskills/rachnaui/Icons";

function HackathonListingComponent() {
  const hackathonEvents = [
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
  ];

  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 items-start">
          <div className="w-[4px] h-[52px] bg-[#E97862]"></div>
          <Typography
            variant="bold"
            className=" self-center leading-[36px] text-[24px]"
          >
            Our Hackathons
          </Typography>
        </div>
      </div>
      <div className="flex flex-row overflow-x-scroll px-5 gap-6 scrollbar-hide overflow-visible pb-8">
        {hackathonEvents &&
          hackathonEvents.map((hackathonEvent) => {
            return <EventCard hackathonEvent={hackathonEvent} />;
          })}
      </div>
    </div>
  );
}

export default HackathonListingComponent;
