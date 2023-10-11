/** @format */

import React from "react";
import { Button, Card, Typography } from "@pwskills/rachnaui";

function EventCard() {
  return (
    <Card className="m-0 flex flex-col p-3 gap-6 pb-6">
      <div className="flex flex-col gap-4">
        <img
          src="images/HackathonDummyImage.svg"
          alt="HackathonDummyImage"
          min-width={382}
          style={{ minWidth: "382px" }}
        />
        <div className="flex  justify-between border-b-[1px] border-b-[#B7B7B7] pb-1">
          <Typography
            className="text-[#1B2124] w-[277px]"
            variant="bold"
            component="h4"
          >
            Hackathon name will display here
          </Typography>
          <img src="images/ShareIcon.svg" alt="ShareIcon" />
        </div>
      </div>
      <div className="flex gap-3">
        <img src="images/CompanyIcon.svg" alt="CompanyIcon" />
        <Typography
          className="text-[#3D3D3D]"
          variant="bold"
          component="body-regular"
        >
          Company Name
        </Typography>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="primary" size="small">
          Register
        </Button>
        <Typography
          className="text-[#3D3D3D]"
          variant="regular"
          component="body-regular"
        >
          Registrations open till 19th Sep,2023
        </Typography>
      </div>
    </Card>
  );
}

export default EventCard;
