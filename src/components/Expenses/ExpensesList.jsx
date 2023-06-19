import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  if (props.items.length < 1) {
    return (
      <div className="h-full align-middle text-center" style={divStyle}>
        <div className="block">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle mx-auto text-[#EEB97B] fade-in-animation"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <p className="text-white font-thin fade-in-animation mt-1">No expenses yet</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
};

export default ExpensesList;
