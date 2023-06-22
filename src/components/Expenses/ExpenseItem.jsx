import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /* Product Props */
  const amount = props.amount;

  return (
    /* Card */
    <Card>
      <div className="flex justify-between md:w-auto px-2 md:px-6 py-3 md:py-5">
        {/* Date */}
        <div className="flex gap-2 md:gap-14">
          <ExpenseDate date={props.date} />
          {/* Title */}
          <div className="my-auto">
            <p className="w-20 truncate md:w-56 text-white text-xs md:text-sm font-normal">{props.title}</p>
          </div>
        </div>
        {/* Price */}
        <div className="my-auto font-normal text-xs md:text-base text-ellipsis overflow-hidden text-white bg-[#00CCBF] text-center px-2 md:px-5 py-2 w-16 md:w-24 rounded-sm">
          ${amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
