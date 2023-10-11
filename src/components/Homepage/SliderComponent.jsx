import React from "react";
import ReactDOM from "react-dom";
import { Slider } from "@pwskills/rachnaui";
import EventCard from "./EventCard";

function SliderComponent() {
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
  ];
  return (
    <div className="!w-full">
      <Slider className="[&>*]:w-full gap-6 p-[10px] !pb-[20px] ">
        {hackathonEvents &&
          hackathonEvents.map((hackathonEvent) => {
            return <EventCard hackathonEvent={hackathonEvent} />;
          })}
      </Slider>
    </div>
  );
}
export default SliderComponent;
