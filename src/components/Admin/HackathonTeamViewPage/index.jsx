import { Typography } from "@pwskills/rachnaui";
import { ArrowBack } from "@pwskills/rachnaui/Icons";
import React from "react";
import TeamViewTable from "./TeamViewTable";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function HackathonTeamViewPage() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/admin");
  };
  return (
    <div className="py-12 px-20 flex flex-col gap-8 w-[90%] mx-auto">
      <Button
        variant="text"
        className="flex flex-row gap-3 w-fit "
        onClick={handleBackButton}
      >
        <ArrowBack />
        Back
      </Button>
      <div className="flex flex-col gap-8">
        <Typography variant="bold" component="h3">
          Name of the Hackathon - Team
        </Typography>
        <TeamViewTable />
      </div>
    </div>
  );
}

export default HackathonTeamViewPage;
