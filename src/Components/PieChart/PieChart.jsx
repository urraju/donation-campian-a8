import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
 
const PieChart = ({ data }) => {
  const [getData, setGetData] = useState([]);
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("data"));
    if (getItem) {
      setGetData(getItem);
    } else {
      return setNotFound([]);
    }
  }, []);
  const yourtPercentage = (getData.length / data.length) * 100;
  const yourRemaing = 100 - yourtPercentage;
  return (
    <div>
      <div className="flex justify-center items-center">
        {notFound ? (
          <p className="h-[50vh]">{notFound}</p>
        ) : (
          <Chart
           
            className="h-[40vh] flex flex-col-reverse"
            type="pie"
            width={400}
            height={500}
            series={[yourtPercentage, yourRemaing]}
            options={{ labels: ["Your Donation", "Total Donation"] }}
            
          />
        )}
         
      </div>
      
    </div>
  );
};

export default PieChart;
