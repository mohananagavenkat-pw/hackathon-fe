import React, { useState, useRef, useEffect } from "react";
import { Box, Divider, Tabs, Tab } from "@mui/material";
import { Button, Card, Typography } from "@pwskills/rachnaui";
import { classNames, randomId } from "@pwskills/rachnaui/utils";
import Slider from "react-slick";
import "../../index.css";
import Faqs from "../Faq";
import HackathonListingComponent from "./HackathonListingComponent";
import WhyHackathonComponent from "./WhyHackathonComponent";

function Homepage() {
  return (
    <div>
      <div className="bg-black ">
        <div className="pt-[26px] pb-[76px] px-20">
          <div className="flex flex-col w-[520px] gap-9">
            <Typography
              component="body-regular"
              variant="regular"
              className=" text-white"
            >
              PW Skills is your one-stop-shop for upscaling. Get maximum value
              for time and resources you invest, with job-ready courses &
              high-technology, available at the lowest cost.
            </Typography>
            <Typography className=" text-white text-[40px] font-bold">
              HACK-A-THON
            </Typography>
          </div>
        </div>
        <div className="h-[1px] bg-[#EFEFEF]"></div>
        <div className="px-20 pt-[31px] pb-[40px] rounded-[12px]">
          <img src="/images/HomePageImage.svg" alt="HomePageImage" />
        </div>
      </div>
      <div className="flex px-20 pt-[112px] pb-[248px] gap-[26px] relative items-center">
        <div className="flex flex-col gap-[56px] w-[300px]">
          <div className="flex gap-6 items-start">
            <div className="w-[4px] h-[52px] bg-[#E97862]"></div>
            <Typography
              variant="bold"
              className=" self-center leading-[36px] text-[24px]"
            >
              Win Exciting Prizes
            </Typography>
          </div>
          <Typography
            className="text-[#757575]"
            variant="regular"
            component="body-regular"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, .
          </Typography>
        </div>
        <div className="flex flex-row gap-6">
          <div className="relative">
            <img
              src="/images/JobBG.svg"
              alt="JobBG"
              className="absolute z-[-1]"
            />
            <div className="flex flex-col gap-[15px] pl-[16px] pt-[24px] pr-12 pb-9">
              <div className="bg-[#64C8E7] w-fit rounded-[56px]">
                <Typography
                  className="text-white py-1 px-6"
                  variant="bold"
                  component="body-small"
                >
                  Jobs
                </Typography>
              </div>
              <div className="flex gap-6">
                <img src="/images/JobIcon.svg" alt="JobIcon" />
                <div className="flex flex-col w-[272px] gap-1">
                  <Typography
                    variant="bold"
                    className="text-[20px] leading-[30px] text-[#3D3D3D]"
                  >
                    Chance to get placed in top companies
                  </Typography>
                  <Typography
                    variant="regular"
                    className="text-[14px] leading-[22px] text-[#757575]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, .
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/GiftBg.svg"
              alt="GiftBg"
              className="absolute z-[-1]"
            />
            <div className="flex flex-col gap-[51px] px-[16px] pt-[24px] pb-9">
              <div className="bg-[#F1C571] w-fit rounded-[56px]">
                <Typography
                  className="text-white py-1 px-6"
                  variant="bold"
                  component="body-small"
                >
                  Gifts
                </Typography>
              </div>
              <img src="/images/GiftIcon.png" alt="GiftIcon" />
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/GiftBg.svg"
              alt="GiftBg"
              className="absolute z-[-1]"
            />
            <div className="flex flex-col gap-[51px] px-[16px] pt-[24px] pb-9">
              <div className="bg-[#79BF68] w-fit rounded-[56px]">
                <Typography
                  className="text-white py-1 px-6"
                  variant="bold"
                  component="body-small"
                >
                  Prize
                </Typography>
              </div>
              <img src="/images/PrizeIcon.svg" alt="PrizeIcon" />
            </div>
          </div>
        </div>
        <img
          src="/images/HomepageGiftIcon.png"
          alt="HomepageGiftIcon"
          className="absolute z-[-1] bottom-0 left-0"
        />
      </div>
      <div className="bg-[#F8FAFB] pt-[72px] px-20 flex flex-col gap-[24px]">
        <HackathonListingComponent />
        <WhyHackathonComponent />
      </div>
      <Faqs />
    </div>
  );
}

export default Homepage;
