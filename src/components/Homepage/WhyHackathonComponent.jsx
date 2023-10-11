import React from "react";
import { Button, Typography } from "@pwskills/rachnaui";
import { ArrowForward } from "@pwskills/rachnaui/Icons";

function WhyHackathonComponent() {
  return (
    <div className="flex flex-row justify-between pb-7">
      <img
        src="images/WhyHackathonBg.svg"
        alt="WhyHackathonBg"
        className="absolute"
      />
      <div className="flex flex-col gap-[179px]">
        <div className="flex flex-col gap-[56px] w-[300px]">
          <div className="flex gap-6 items-start">
            <div className="w-[4px] h-[52px] bg-[#E97862]"></div>
            <Typography
              variant="bold"
              className=" self-center leading-[36px] text-[24px]"
            >
              Why hackathon
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
        <img
          src="/images/searchGif.gif"
          alt="searchGif"
          width={192}
          height={192}
        />
      </div>
      <div className="flex flex-col gap-[56px] pt-[164px]">
        <div className="flex flex-col w-[302px] gap-6">
          <div className="flex flex-col gap-3">
            <img
              src="/images/InterviewIcon.svg"
              alt="InterviewIcon"
              width={85}
              height={85}
            />
            <Typography
              className="text-[#3F454A]"
              variant="semi-bold"
              component="h3"
            >
              Mock Interviews
            </Typography>
            <Typography
              className="text-[#3F454A] text-[14px]"
              variant="regular"
            >
              Practice makes perfect. Use our mock interview feature to be fully
              prepared for your job interviews
            </Typography>
          </div>
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            className="bg-white px-[15px] py-[5px] w-fit shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)]"
          >
            Attempt Mock
          </Button>
        </div>
        <div className="flex flex-col w-[302px] gap-6">
          <div className="flex flex-col gap-3">
            <img
              src="/images/OpportunityIcon.svg"
              alt="OpportunityIcon"
              width={85}
              height={85}
            />
            <Typography
              className="text-[#3F454A]"
              variant="semi-bold"
              component="h3"
            >
              Quality Opportunities
            </Typography>
            <Typography
              className="text-[#3F454A] text-[14px]"
              variant="regular"
            >
              Connect with top employers who value skills and continuous
              learning
            </Typography>
          </div>
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            className="bg-white px-[15px] py-[5px] w-fit shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)]"
          >
            View Job
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-[56px] pt-[244px]">
        <div className="flex flex-col w-[302px] gap-6">
          <div className="flex flex-col gap-3">
            <img
              src="/images/SkillsIcon.svg"
              alt="SkillsIcon"
              width={85}
              height={85}
            />
            <Typography
              className="text-[#3F454A]"
              variant="semi-bold"
              component="h3"
            >
              Verified Skills
            </Typography>
            <Typography
              className="text-[#3F454A] text-[14px]"
              variant="regular"
            >
              Show off your true capabilities with our LMS score, based on real
              performance data
            </Typography>
          </div>
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            className="bg-white px-[15px] py-[5px] w-fit shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)]"
          >
            My Skills
          </Button>
        </div>
        <div className="flex flex-col w-[302px] gap-6">
          <div className="flex flex-col gap-3">
            <img
              src="/images/EducationIcon.svg"
              alt="EducationIcon"
              width={85}
              height={85}
            />
            <Typography
              className="text-[#3F454A]"
              variant="semi-bold"
              component="h3"
            >
              Personalised Learning
            </Typography>
            <Typography
              className="text-[#3F454A] text-[14px]"
              variant="regular"
            >
              Get course recommendations tailored to your career goals.
            </Typography>
          </div>
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            className="bg-white px-[15px] py-[5px] w-fit shadow-[0_1px_8px_0px_rgba(0,0,0,0.08)]"
          >
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WhyHackathonComponent;
