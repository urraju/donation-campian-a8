import React from "react";

import PieChart from "../PieChart/PieChart";
import { useLoaderData } from "react-router-dom";
const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="w-9/12 mx-auto  ">
      <PieChart data={data} />
    </div>
  );
};

export default Statistics;
