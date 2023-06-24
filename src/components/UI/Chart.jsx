import React from "react";

import Container from "./Container";
import ChartBar from "./ChartBar";

const ExpenseChart = (props) => {

  /* 
  find highest expense amount 
  by getting the value in each month
  then find the highest amount using Math.max
  */
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); /* map dataPoints, get value only (returning an array) */
  const expensesTotalMaximum = Math.max(...dataPointValues); /* spread the array into 12 arguments */

  return (
    <>
      <Container className="bg-[#373737] border-[6px] border-zinc-800 flex justify-between sm:justify-evenly md:gap-0 rounded-xl py-5 px-[10px]">
        
        {/* Improved version of ChartBar.
        ChartBar is displayed dynamically, by using an array and then mapping it.
        It has an id using label (month) as its value, which is unique.
        Value holds a total of expenses each month */}
        
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={expensesTotalMaximum}
            label={dataPoint.label}
          />
        ))}
      </Container>
    </>
  );
};

export default ExpenseChart;
