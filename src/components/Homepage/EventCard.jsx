/** @format */

import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@pwskills/rachnaui";
import SocialShareModal from "../Common/SocialShareModal";
import CountdownTimer from "./CountdownTimer";
import { useNavigate } from "react-router-dom";

function EventCard({ hackathonEvent, eventTime }) {
  const navigate = useNavigate();
  console.log(eventTime);
  const [openShare, setOpenShare] = useState(false);

  const getLiveOnTime = (dateInUST) => {
    const date = new Date(dateInUST);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return ` ${day} ${month} '${year} At ${time}`;
  };

  const getRegistrationTime = (dateInUST) => {
    const date = new Date(dateInUST);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return ` ${day} ${month} '${year}`;
  };

  return (
    <div>
      <Card className="m-0 flex flex-col p-3 gap-6 pb-6 shadow-light max-w-[406px]">
        <div className="flex flex-col gap-4">
          <img
            src="images/HackathonDummyImage.svg"
            alt="HackathonDummyImage"
            style={{ width: "382px" }}
          />
          <div className="flex  justify-between border-b-[1px] border-b-[#B7B7B7] pb-1">
            <Typography
              className="text-[#1B2124] w-[277px]"
              variant="bold"
              component="h4"
            >
              {hackathonEvent.title}
            </Typography>
            <img
              src="images/ShareIcon.svg"
              alt="ShareIcon"
              onClick={() => {
                setOpenShare(true);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <img src="images/CompanyIcon.svg" alt="CompanyIcon" />
          <Typography
            className="text-[#3D3D3D]"
            variant="bold"
            component="body-regular"
          >
            {hackathonEvent.companyDetails
              ? hackathonEvent.companyDetails.name
              : "unknown company"}
          </Typography>
        </div>
        {eventTime === "live" ? (
          <div className="flex gap-3 items-center">
            <Button
              variant="primary"
              size="small"
              onClick={() => navigate(
                `/hackathon/${hackathonEvent.title}/${hackathonEvent._id}`
              )}
            >
              Compete
            </Button>

            <CountdownTimer endDate={hackathonEvent.endDate} />
          </div>
        ) : eventTime === "upcoming" ? (
          <div className="flex gap-3 items-center">
            <Button
              variant="primary"
              size="small"
              className="font-nunito"
              onClick={() => navigate(
                `/hackathon/${hackathonEvent.title}/${hackathonEvent._id}`
              )}
            >
              Register
            </Button>
            <Typography
              className="text-[#3D3D3D]"
              variant="regular"
              component="body-regular"
            >
              {"Registrations open till " +
                getRegistrationTime(hackathonEvent.endDate)}
            </Typography>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <Button
              variant="primary"
              size="small"
              className=" whitespace-nowrap"
              onClick={() => navigate(
                `/hackathon/${hackathonEvent.title}/${hackathonEvent._id}`
              )}
            >
              View Details
            </Button>
            <Typography
              className="text-[#3D3D3D] font-nunito"
              variant="regular"
              component="body-regular"
            >
              {"Live on " + getLiveOnTime(hackathonEvent.startDate)}
            </Typography>
          </div>
        )}
      </Card>

      <SocialShareModal
        modelOpen={openShare}
        setModelOpen={setOpenShare}
        url={`${window.location.origin}/hackathon/${hackathonEvent.title}/${hackathonEvent._id}`}
      />
    </div>
  );
}

export default EventCard;
