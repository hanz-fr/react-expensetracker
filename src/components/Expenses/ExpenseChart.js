import React from "react";

import Container from "../UI/Container";
import ChartBar from "../UI/ChartBar";

const ExpenseChart = (props) => {

  
  return (
    <div>
      <Container className="bg-[#373737] border-[6px] border-zinc-800 flex justify-between md:justify-around md:gap-0 rounded-xl py-5 px-[10px]">
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
