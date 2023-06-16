import React from "react";

import Container from "../UI/Container";
import ChartBar from "../UI/ChartBar";

const ExpenseChart = (props) => {

  
  return (
    <div>
      <Container className="bg-[#373737] border-[6px] border-[#2e2e2e] flex justify-around rounded-xl">
        <ChartBar percentage={props.percentage} month={"Jan"} />
        <ChartBar percentage={props.percentage} month={"Feb"} />
        <ChartBar percentage={props.percentage} month={"Mar"} />
        <ChartBar percentage={props.percentage} month={"Apr"} />
        <ChartBar percentage={props.percentage} month={"May"} />
        <ChartBar percentage={props.percentage} month={"Jun"} />
        <ChartBar percentage={props.percentage} month={"Jul"} />
        <ChartBar percentage={props.percentage} month={"Aug"} />
        <ChartBar percentage={props.percentage} month={"Sep"} />
        <ChartBar percentage={props.percentage} month={"Oct"} />
        <ChartBar percentage={props.percentage} month={"Nov"} />
        <ChartBar percentage={props.percentage} month={"Des"} />
      </Container>
    </div>
  );
};

export default ExpenseChart;
