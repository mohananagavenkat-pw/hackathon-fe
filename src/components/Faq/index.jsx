import React, { useState } from "react";
import { Button, Card, Typography } from "@pwskills/rachnaui";
import faqsData from "../../constants/Faqs";

function Faqs() {
  const [currentFaq, setCurrentFaq] = useState(0);

  const scrollToElement = (elementId) => {
    const container = document.getElementById("container");
    const targetElement = document.getElementById(elementId);

    if (container && targetElement) {
      // Calculate the scroll position based on the target element's position within the container
      const scrollPosition = targetElement.offsetTop - container.offsetTop;

      // Scroll to the target element smoothly within the container
      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const onFaqSelection = (index) => {
    console.log(index);
    setCurrentFaq(index);
    scrollToElement(index);
  };

  return (
    <div className="flex flex-col px-[160px] py-[56px] gap-[58px] ">
      <Typography variant="bold" component="h2">
        Frequently Asked Questions
      </Typography>
      <div className="flex flex-row gap-[26px] relative">
        <div className="flex flex-col gap-6 w-[calc(100%-455px-26px)] ">
          {faqsData &&
            faqsData.map((faq, index) => {
              return (
                <div className="flex flex-col gap-[18px]">
                  <div className="flex flex-row justify-between gap-[12px]">
                    <Button
                      variant="text"
                      className="!p-0"
                      onClick={(e) => {
                        onFaqSelection(index);
                      }}
                    >
                      <Typography
                        variant="regular"
                        className=" line-clamp-1 text-[20px] !text-start"
                      >
                        {faq.question}
                      </Typography>
                    </Button>

                    <img src="images/NextButtonFaq.svg" alt="NextButtonFaq" />
                  </div>
                  <div className="h-[1px] bg-[#B7B7B7]"></div>
                </div>
              );
            })}
        </div>
        <div
          className="flex flex-col max-h-[360px] overflow-hidden gap-[20px]"
          id="container"
        >
          {faqsData &&
            faqsData.map((faq, index) => (
              <div className="flex flex-col gap-4 max-w-[455px] " id={index}>
                <div className="relative max-w-[455px] h-[255px]">
                  <iframe
                    width="455"
                    height="255"
                    src={faq.url}
                    title="YouTube video player"
                    frameborder="0"
                    allowfullscreen
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      position: "absolute",
                      right: "0px",
                      zIndex: "-1",
                    }}
                  ></iframe>
                </div>
                <Typography
                  variant="regular"
                  component="body-small"
                  className="z-1"
                >
                  {faq.answer}
                </Typography>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
