import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /* Product Props */
  const amount = props.amount;

  const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  /* click event handler */
  const clickHandler = () => {
    setTitle('Untitled');
  }

  return (
    /* Card */
    <Card>
      <div className="flex justify-between px-6 py-5">
        {/* Date */}
        <div className="flex gap-14">
          <ExpenseDate date={props.date} />
          {/* Title */}
          <div className="my-auto">
            <p className="w-48 text-white text-sm font-normal">{title}</p>
          </div>
        </div>
        <div className="mx-20"></div>
        {/* Spacer */}
        {/* Price */}
        <div className="my-auto font-normal text-white bg-[#00CCBF] text-center px-5 py-2 w-24 rounded-sm">
          ${amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
