/** @format */

import React, { useEffect, useState } from "react";
import ApplicationTab from "../../components/ApplicationTab";
import HackathonCard from "../../components/Cards/HackathonCard";
import hackathonImage from "../../assets/hackathonImage.svg";
import Hackathonbg from "../../assets/Hackathon.png";
import Navbar from "../../components/Navbar";
import { Container } from "@pwskills/rachnaui";
import { Button } from "@pwskills/rachnaui";
import PWskills from "../../assets/PWskills";
import { useNavigate } from "react-router-dom";
import DiscussionTab from "../../components/RegistrationPage/DiscussionTab";
import { apiFunction } from "../../apis/api";

const HackathonDetails = () => {
  const token = localStorage.getItem("token")
  const [id , setId]  = useState('')
  const [dataToShow , setDataToShow] = useState("")
  const [hackathonDetails , setHackathonDetails] = useState({
    "title": "testing one",
    "hackathonType": "project",
    "hackathonMode": "practice",
    "submissionType": "team",
    "teamSize": 1,
    "startDate": {
      "$date": "2023-07-25T11:19:30.693Z"
    },
    "maxStartDate": {
      "$date": "2023-07-25T11:29:40.693Z"
    },
    "endDate": {
      "$date": "2023-08-25T11:29:40.693Z"
    },
    "resultDate": {
      "$date": "2023-09-27T11:49:30.693Z"
    },
    "details": "hello one kkkkkk",
    "companyDetails": {
      "name": "pw skill",
      "place": "noida",
      "companyType": "ed-tech",
      "image": ""
    },
    "instruction": "hhhhh hibjfd kdsbfosd sdfnios",
    "questions": [
      {
        "question": "create a project on React-js",
        "questionType": "text",
        "outOf": 100,
        "_id": {
          "$oid": "6526456012c1c19cb8f894ca"
        }
      }
    ],
    "createdAt": {
      "$date": "2023-10-11T06:49:04.683Z"
    },
    "updatedAt": {
      "$date": "2023-10-11T06:51:18.800Z"
    },
    "__v": 0
  })
  const apiCallFunction = (filter) => {
    const params = {
      "hackathonId" : id,
      "filterInformation": filter
    }; 
    apiFunction( "get" ,"/user/hackathon-details" , params , '').then((resp) => {
      // console.log("details" , resp.data.data[0][filter])
      setDataToShow(resp.data.data[0]?.filter)
     })
     .catch((err) => {
      console.log("err")
     })
  }
 useEffect(() => {
 if(window.location.pathname){
  const pathnameArray = window.location.pathname.split("/")
  console.log("pathnameArray" , pathnameArray)
  const params = {
    "hackathonId" : pathnameArray[3],
    "filterInformation": "About"
  }; 
  setId(pathnameArray[3],)
  // 'About Prizes Timelines Rules'
  apiCallFunction("About")
 }
 },[window.location.pathname])
  const navigate = useNavigate()
  useEffect(() => {
  
  },[])
  const tabs = [
    {
      text: "About Hackathon",
      component: <p>About Hackathon</p>,
      value: "Tab1",
      disabled: false,
      onClick: () => apiCallFunction("About")
    },
    {
      text: "Rules",
      component: <p>Hackathon Rules</p>,
      value: "Tab2",
      disabled: false,
      onClick: () => apiCallFunction("Rules")
    },
    {
      text: "Prizes",
      component: <p>hackathon Prizes</p>,
      value: "Prizes",
      disabled: false,
      onClick: () => apiCallFunction("Prizes")
    },
    {
      text: "Timelines",
      component: <p>Hackathon Timelines</p>,
      value: "timelines",
      disabled: false,
      onClick: () => apiCallFunction("Timeline")
    },
    {
      text: "Results",
      component: <p>Results</p>,
      value: "results",
      disabled: !localStorage.getItem(token),
      onClick: () => apiCallFunction("About")
    },
    {
      text: "DiscussionTab",
      component: <DiscussionTab />,
      value: "DiscussionTab",
      disabled: !localStorage.getItem(token),
      onClick: () => null
    },
  ];
  const handleRouting = (type) => {
      switch(type) {
        case "singup" : 
        navigate('/sign-up') 
        break;
        case "signin" : 
        navigate('/signin') 
        break;
        default : 
        navigate('/sign-up') 
        break;
      }
  }
  return (
    <div className="flex flex-col relative ">
      <div className={`flex bg-white justify-center items-center py-4 w-full `}>
        <div className={`flex justify-between w-[85%]`}>
        <PWskills color = {"black"}/>
        {token ?  <div className="w-[50px] h-[50px] bg-yellow-600 rounded-[50%] flex justify-center items-center text-white">user</div> : <div className="flex gap-2">
        
        <Button onClick={() => handleRouting('signin')}>Sign In</Button>
        <Button variant="secondary" onClick={() => handleRouting('signup')}>Sign Up</Button>
      </div>}
        </div>
      
    </div>
      {/* <Container className="p-4  min-w-[100%] relative"> */}
      <div className="absolute -z-10 ">
        <img src={Hackathonbg} alt="hackathonbg" />
      </div>
      <div
        className=""
        style={{
          background: "rgba(207, 207, 225, 1)",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${hackathonImage})`,
        }}
      ></div>
      <div
        style={{ position: "relative" }}
        className=" flex items-center justify-center "
      >
        <div className="relative top-[240px] w-[85%]">
          <ApplicationTab options={tabs} direction={"column"} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "290px",
          width: "85%",
          left: "7.3%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HackathonCard hackathonDetails = {hackathonDetails}/>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default HackathonDetails;
