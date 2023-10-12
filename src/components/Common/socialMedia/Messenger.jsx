import React from "react";
import { classNames } from "@pwskills/rachnaui/utils";

const Messenger = (props) => {
  const { className = "", ...rest } = props;

  return (
    <svg
      {...rest}
      className={classNames("w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_536_18548)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C5.286 0 0.0826416 4.91305 0.0826416 11.5485C0.0826416 15.0194 1.50694 18.0186 3.8257 20.0906C4.01996 20.2655 4.1374 20.5074 4.147 20.7686L4.21177 22.8861C4.23334 23.5616 4.9311 24 5.54979 23.7293L7.91407 22.6873C8.11409 22.5988 8.33848 22.5819 8.5495 22.6394C9.63571 22.9388 10.7939 23.0969 12 23.0969C18.714 23.0969 23.9173 18.1839 23.9173 11.5485C23.9173 4.91305 18.714 0 12 0Z"
          fill="url(#paint0_linear_536_18548)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.84482 14.9261L8.34566 9.37823C8.90196 8.4967 10.0961 8.27629 10.9305 8.90153L13.7144 10.988C13.8388 11.0809 13.99 11.1309 14.1452 11.1305C14.3005 11.1301 14.4514 11.0792 14.5753 10.9856L18.3351 8.13495C18.8363 7.75413 19.4933 8.35542 19.1552 8.88717L15.6567 14.4326C15.1004 15.3141 13.9063 15.5346 13.0718 14.9093L10.2879 12.8229C10.1636 12.7299 10.0124 12.6799 9.85713 12.6803C9.70187 12.6808 9.55095 12.7316 9.4271 12.8253L5.66485 15.6783C5.16373 16.0592 4.50666 15.4579 4.84482 14.9261Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_536_18548"
          x1={12}
          y1={0}
          x2={12}
          y2="23.8107"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B2FF" />
          <stop offset={1} stopColor="#006AFF" />
        </linearGradient>
        <clipPath id="clip0_536_18548">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Messenger;
