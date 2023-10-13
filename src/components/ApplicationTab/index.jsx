import { Grid } from "@mui/material";
import { Typography } from "@pwskills/rachnaui";
import React, { useState } from "react";

const ApplicationTab = ({ options, direction }) => {
  const [activeTab, setActiveTab] = useState(options[0]);
  return (
    <div style={{ width:"100%"}}>
      <div
        className={`flex ${
          direction === "row" ? "flex-column" : "flex-row"
        } gap-2`}
      >
        <div
          className={`flex ${
            direction === "row" ? "flex-row" : "flex-col"
          } gap-2 p-4 `}
          style={{ background: "white" , borderRadius : "8px" , width : "20%" , height: "600px"}}
        >
          {options?.map((optionSingleObj) => 
             !optionSingleObj?.disabled && 
              <div
              className={`flex ${
                direction === "row" ? "flex-col" : "flex-row"
              } cursor-pointer justify-start items-center gap-2`}
              onClick={() => {setActiveTab(optionSingleObj) ;optionSingleObj?.onClick() }}
            >
              {direction === "column" && (
                <div
                  item
                  style={{
                    opacity:
                      activeTab?.value !== optionSingleObj?.value ? "0%" : "",
                    height: "50px",
                  }}
                >
                  <div
                    style={{
                      borderLeft: "4px solid #E97862",
                      height: "100%",
                      width: "1px",
                    }}
                  />
                </div>
              )}
              <div>
                <p style = {{color : activeTab.value === optionSingleObj.value ? "#E97862" :"#757575"  , }}>
                  {optionSingleObj.text}
                </p>
              </div>
              {direction === "row" && (
                <div
                  style={{
                    opacity:
                      activeTab?.value !== optionSingleObj?.value ? "0%" : "",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "4px solid #E97862",
                    }}
                  />
                </div>
              )}
            </div>
            
            
          )}
        </div>
        <div item style={{ background: "white ", padding: "30px" , width:"80%" , borderRadius : "8px"  }}>
          {activeTab.component}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTab;
