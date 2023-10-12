import React from "react";
import { classNames } from "@pwskills/rachnaui/utils";

const CheckmarkDone = (props) => {
  const { className = "", ...rest } = props;

  return (
    <svg
      {...rest}
      className={classNames("w-[68px] h-[68px]", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.125 5L9.375 15L5.625 11.25"
        stroke="#5CA34B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 15L1.875 11.25"
        stroke="#5CA34B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.375 5L9.0625 11.0938"
        stroke="#5CA34B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckmarkDone;
