import React from "react";

import Container from "./Container";
import ChartBar from "./ChartBar";

const ExpenseChart = (props) => {
  return (
    <div>
      <Container className="bg-[#373737] border-[6px] border-zinc-800 flex justify-between sm:justify-evenly md:gap-0 rounded-xl py-5 px-[10px]">
        
        {/* Improved version of ChartBar.
        ChartBar is displayed dynamically, by using an array and then mapping it.
        It has an id using label (month) as its value, which is unique.
        Value holds a total of expenses each month */}
        
        {/* {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        ))} */}
        <ChartBar month={"Jan"} />
        <ChartBar month={"Feb"} />
        <ChartBar month={"Mar"} />
        <ChartBar month={"Apr"} />
        <ChartBar month={"May"} />
        <ChartBar month={"Jun"} />
        <ChartBar month={"Jul"} />
        <ChartBar month={"Aug"} />
        <ChartBar month={"Sep"} />
        <ChartBar month={"Oct"} />
        <ChartBar month={"Nov"} />
        <ChartBar month={"Des"} />
      </Container>
    </div>
  );
};

export default ExpenseChart;
