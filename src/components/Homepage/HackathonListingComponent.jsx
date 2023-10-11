import React, { useState } from "react";
import { Button, Typography, Container } from "@pwskills/rachnaui";
import EventCard from "./EventCard";
import { ArrowForward } from "@pwskills/rachnaui/Icons";
import Slider from "react-slick";
import { classNames, randomId } from "@pwskills/rachnaui/utils";
import SliderComponent from "./SliderComponent";

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

  const Filters = ["live", "upcoming", "past"];

  const FilterMap = {
    live: {
      name: "Live",
    },
    upcoming: {
      name: "Upcoming",
    },
    past: {
      name: "Past",
    },
  };

  const [selectedFilter, SetSelectedFilter] = useState(Filters[0]);

  const handleFilterSelection = (filter) => {
    if (selectedFilter !== filter) {
      SetSelectedFilter(filter);
    }
  };

  return (
    <div className="flex flex-col gap-[36px]">
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
        <div className="flex gap-2">
          {Filters.map((filter) => {
            return (
              <div
                variant="text"
                className={`!p-1 cursor-pointer ${
                  selectedFilter === filter
                    ? "!border-b-[2px] !border-b-[#1B2124] border-solid"
                    : "border-none"
                }`}
                onClick={() => handleFilterSelection(filter)}
              >
                <Typography
                  component="body-regular"
                  className={`${
                    selectedFilter === filter
                      ? "font-bold text-[#1B2124] border-b-1 border-b-solid border-b-[#1B2124]"
                      : "font-semibold text-[#757575] border-none"
                  }`}
                >
                  {FilterMap[filter].name}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
      <SliderComponent />
    </div>
  );
}

export default HackathonListingComponent;
