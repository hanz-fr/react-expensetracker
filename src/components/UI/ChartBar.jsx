import React from "react";

const ChartBar = (props) => {

  /* 
  chart formula for determining the bar height

  x = sum of all expenses, all month (100%)
  y = sum of expenses each month
  z = percentage each month : (1/x * y) * 100
  */


  /* chart bar formula from udemy */
  let barHeight = '0%';

  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
  <div className="flex flex-col gap-3">
      <div className="chart-bar mx-auto">
        <div className="bg-[#00CCBF] overflow-hidden transition-all duration-500 rounded-t-[4px]" role="progressbar" style={{ height: barHeight }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="text-white font-light text-[10px] md:text-sm">{props.label}</div>
    </div>
  );
};

export default ChartBar;