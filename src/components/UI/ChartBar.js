import React from "react";

const ChartBar = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <div class="chart-bar mx-auto">
        <div class="bg-[#00CCBF] overflow-hidden" role="progressbar" style={{ height: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="text-white font-light text-sm">{props.month}</div>
    </div>
  );
};

export default ChartBar;
