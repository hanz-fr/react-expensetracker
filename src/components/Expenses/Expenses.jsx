import React, { useState } from "react";

import ExpenseTotal from "./ExpenseTotal";
import ExpensesList from "./ExpensesList";
import ExpenseCount from "./ExpenseCount";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Container from "../UI/Container";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();

  /* Filter year state */
  const [filteredYear, setFilteredYear] = useState(currentYear);

  /* Total amount of the expenses */
  const sum = props.items.reduce((accumulator, object) => {
    return accumulator + parseFloat(object.amount);
  }, 0);

  /* Filter year handler */
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* Filter expenses based on year filter */
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Container className="border-b-8 bg-[#E6E6E6] flex flex-col gap-3 rounded-xl">
      {/* Expense filter and chart */}
      <ExpenseFilter
        selectedFilterYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart />
      <Container className="bg-[#2D2D2D] rounded-xl">
        {/* Expenses Total and Count */}
        <div className="flex flex-row gap-2 md:gap-5 justify-between">
          <ExpenseTotal total={sum} />
          <ExpenseCount count={props.items.length} />
        </div>
        <div className="my-3"></div> {/* Small Spacer */}
        {/* Expenses, inside a Container */}
        <div className="h-96 overflow-y-scroll scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thin scrollbar-thumb-[#6C6C6C] scrollbar-track-[#3E3E3E]">
          <ExpensesList items={filteredExpenses}/>
        </div>
      </Container>
    </Container>
  );
};

export default Expenses;
