import { Typography } from "@pwskills/rachnaui";
import React, { useState, useEffect } from "react";

function CountdownTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  function calculateTimeLeft(endDate) {
    const difference = new Date(endDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    if (days >= 1) {
      return `${days} day${days > 1 ? "s" : ""} ${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return (
    <Typography
      className="text-[#3D3D3D]"
      variant="regular"
      component="body-regular"
    >
      {"Ends in " + calculateTimeLeft(endDate)}
    </Typography>
  );
}

export default CountdownTimer;
