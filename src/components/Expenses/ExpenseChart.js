import React from "react";

import Container from "../UI/Container";
import ChartBar from "../UI/ChartBar";

const ExpenseChart = () => {
  return (
    <div>
      <Container className="bg-[#373737] border-[6px] border-[#2e2e2e] flex justify-around rounded-xl">
        <ChartBar month={'Jan'} />
        <ChartBar month={'Feb'} />
        <ChartBar month={'Mar'} />
        <ChartBar month={'Apr'} />
        <ChartBar month={'May'} />
        <ChartBar month={'Jun'} />
        <ChartBar month={'Jul'} />
        <ChartBar month={'Aug'} />
        <ChartBar month={'Sep'} />
        <ChartBar month={'Oct'} />
        <ChartBar month={'Nov'} />
        <ChartBar month={'Des'} />
      </Container>
    </div>
  );
};

export default ExpenseChart;