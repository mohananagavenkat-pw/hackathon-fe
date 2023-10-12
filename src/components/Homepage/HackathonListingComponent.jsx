import React, { useEffect, useState } from "react";
import { Button, Typography, Container } from "@pwskills/rachnaui";
import EventCard from "./EventCard";
import { ArrowForward } from "@pwskills/rachnaui/Icons";
import { Slider } from "@pwskills/rachnaui";
import { classNames, randomId } from "@pwskills/rachnaui/utils";
import useHomePage from "../../hooks/app/useHomePage";

function HackathonListingComponent() {
  const fetchHackathons = useHomePage().fetchHackathons;
  const resetHackathons = useHomePage().resetHackathons;
  const { hackathons } = useHomePage();

  const Filters = ["live", "upcoming", "previous"];

  const FilterMap = {
    live: {
      name: "Live",
    },
    upcoming: {
      name: "Upcoming",
    },
    previous: {
      name: "Previous",
    },
  };

  const [selectedFilter, setSelectedFilter] = useState(Filters[0]);

  useEffect(() => {
    fetchHackathons(selectedFilter);
  }, [fetchHackathons, selectedFilter]);

  const handleFilterSelection = (filter) => {
    if (selectedFilter !== filter) {
      setSelectedFilter(filter);
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
      <div className="!w-full">
        <Slider
          className="[&>*]:w-full gap-6 p-[10px] !pb-[20px]  "
          iconWrapperClass="mt-6"
        >
          {hackathons &&
            hackathons.map((hackathonEvent) => {
              return <EventCard hackathonEvent={hackathonEvent} />;
            })}
        </Slider>
      </div>
    </div>
  );
}

export default HackathonListingComponent;
