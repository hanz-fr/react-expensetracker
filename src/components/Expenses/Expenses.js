import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseCount from "./ExpenseCount";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Container from "../UI/Container";

const Expenses = (props) => {
  
  const currentYear = new Date().getFullYear();
  const [filterInfoText, setFilterText] = useState('2020, 2021, & 2022');

  /* Filter year state */
  const [filteredYear, setFilteredYear] = useState(currentYear);

  /* Total amount of the expenses */
  const sum = props.items.reduce((accumulator, object) => {
    return accumulator + parseFloat(object.amount);
  }, 0);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* this code below is just me playing around with state */
  /* Derived state / computed state */
  let percentage = "0%"

  if (filteredYear === '2023') {
    percentage = "85%";
  } else if (filteredYear === '2022') {
    percentage = "2%";
  } else if (filteredYear === '2021') {
    percentage = "45%";
  } else if (filteredYear === '2020') {
    percentage = "15%";
  } else {
    percentage = "0%";
  }

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
        <div className="flex flex-row gap-5 justify-between">
          <ExpenseTotal total={sum} />
          <ExpenseCount count={props.items.length} />
        </div>
        <div className="my-3"></div> {/* Small Spacer */}
        {/* Expenses, inside a Container */}
        <div className="h-96 overflow-y-scroll scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thin scrollbar-thumb-[#6C6C6C] scrollbar-track-[#3E3E3E]">
          {props.items.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Expenses;
