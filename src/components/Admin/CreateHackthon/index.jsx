/** @format */

import React, { useState } from "react";
import Title from "./Title";
import HackthonTypes from "./HackthonTypes";
import HackathonDates from "./HackathonDates";

import HackathonPrices from "./HackathonPrices";
import Details from "./Details";
import Questions from "./Questions";
import { Button, Typography } from "@pwskills/rachnaui";

import AdminApi from "../../../apis/managers/admin";
import { useNavigate } from "react-router-dom";
import Toaster from "../../Common/Toaster";
import { BASE_API_URL } from "../../../constants/Config";

const CreateUpdateHackathon = () => {
  const [hackathonData, setHackathonData] = useState({
    title: "",
    hackathonType: "",
    hackathonMode: "",
    submissionType: "",
    teamSize: 1,
    startDate: "",
    maxStartDate: "",
    endDate: "",
    resultDate: "",
    prices: "",
    details: "",
    questions: {
      question: "",
      questionType: "text",
    },
  });
  const [openToast, setOpenToast] = useState(false);
  const [msg, setMsg] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const createHackathon = async () => {
    setOpenToast(false);
    setMsg("");
    const apiResponse = await fetch(`${BASE_API_URL}/admin/`, {
      method: "POST",
      body: JSON.stringify(hackathonData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = apiResponse.json();
    if (res) {
      // console.log("res--- ", res);
      setOpenToast(true);
      setMsg("Hackathon created.");
      setToastVariant("success");
      navigate("/admin");
    } else {
      setOpenToast(true);
      setMsg("Some error occurred.");
      setToastVariant("error");
    }
  };

  return (
    <div className="flex flex-col gap-3 mx-[15%] my-[3%] justify-center ">
      <Toaster
        open={openToast}
        setOpen={setOpenToast}
        text={msg}
        variant={toastVariant}
      />
      <div className="flex flex-row justify-between">
        <div>
          <Typography variant="medium" component="h3">
            Create Hackathon
          </Typography>
        </div>
        <div>
          <Button variant="primary" onClick={createHackathon}>
            Create
          </Button>
        </div>
      </div>
      <div>
        <Title
          hackathonData={hackathonData}
          setHackathonData={setHackathonData}
        />
      </div>

      <div>
        <HackthonTypes
          hackathonData={hackathonData}
          setHackathonData={setHackathonData}
        />
      </div>
      <div>
        <HackathonDates
          hackathonData={hackathonData}
          setHackathonData={setHackathonData}
        />
      </div>
      <div>
        <HackathonPrices
          hackathonData={hackathonData}
          setHackathonData={setHackathonData}
        />
      </div>
      <div>
        <Details
          hackathonData={hackathonData}
          setHackathonData={setHackathonData}
        />
      </div>
      <div>
        <Questions
          hackathonData={hackathonData}
          setHackathonData={setHackathonData}
        />
      </div>
    </div>
  );
};

export default CreateUpdateHackathon;
