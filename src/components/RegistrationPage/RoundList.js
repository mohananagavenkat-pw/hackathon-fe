/** @format */

import { Radio, Typography } from "@pwskills/rachnaui";
import React, { useEffect } from "react";
import useHackathon from "../../hooks/app/useHackathon";

const RounderList = () => {
  const { roundList, getRoundList } = useHackathon();
  console.log(roundList, "this is round list")
  useEffect(() => {
    getRoundList('6526456012c1c19cb8f894c9')
  }, [])
  return (
    <div className="flex flex-col">
      <div>
        <Typography variant="bold" component="body-small">
          Hackathon Rounds
        </Typography>
        {roundList?.map((val) => {
          return (
            <div>
              {val?.questions?.roundDetails}
            </div>
          )
        })}
      </div>

      {/* <div>
        <Radio checked label="Individual" />
        <Radio checked label="Team" />
      </div> */}
    </div>
  );
};

export default RounderList;
