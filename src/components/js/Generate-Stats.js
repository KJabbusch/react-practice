import React from "react";
import Statistic from "./Statistic";

const statList = (props) => {
  const statItems = props.statData.map((stat) => {
    return <Statistic key={stat.name} name={stat.name} value={stat.value} />;
  });
  return statItems;
};

export default statList;
