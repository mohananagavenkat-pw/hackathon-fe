/** @format */

import React, { useState } from "react";
import { Box, Divider, Tabs, Tab } from "@mui/material";
import EventCard from "./EventCard";
import { Button } from "@pwskills/rachnaui";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "red" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

function Homepage() {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	const handleTabChange = (e, tabIndex) => {
		console.log(tabIndex);
		setCurrentTabIndex(tabIndex);
	};

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
		<div>
			<Button variant="primary">Registration</Button>
			{/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          height: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography variant="h4">Hack-a-thon</Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: 300,
          }}
          alt="The house from the offer."
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
        />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Box>
          <Box
            component="img"
            sx={{
              width: 250,
              height: 250,
            }}
            alt="The house from the offer."
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          />
          <Typography>Chance to get placed in top companies!</Typography>
        </Box>
        <Box>
          <Box
            component="img"
            sx={{
              width: 250,
              height: 250,
            }}
            alt="The house from the offer."
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          />
          <Typography>Win latest Tools and Gadgets</Typography>
        </Box>
        <Box>
          <Box
            component="img"
            sx={{
              width: 250,
              height: 250,
            }}
            alt="The house from the offer."
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          />
          <Typography>Earn money $$</Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Tabs
          value={currentTabIndex}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          sx={{ padding: 0 }} // Remove default padding
        >
          <Tab label="Live" sx={{ padding: "0" }} />
          <Tab label="Upcoming" sx={{ padding: "0" }} />
          <Tab label="Previous" sx={{ padding: "0" }} />
        </Tabs>
      </Box> */}
			{/* <Box>
        {hackathonEvents &&
          hackathonEvents.map((event) => {
            return <EventCard event={event} />;
          })}
      </Box> */}
			{/* <Divider /> */}
		</div>
	);
}

export default Homepage;
