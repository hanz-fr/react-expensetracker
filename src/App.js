import React, {useState} from 'react';

import "./App.css";
import "preline";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import NewExpenseHeader from "./components/NewExpense/NewExpenseHeader";
import Separator from "./components/UI/Separator";
import Dropdown from "./components/UI/Dropdown";

const DUMMY_EXPENSES = [
    
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /* A function simply to handle new expense retrieved from NewExpense component */
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col relative w-[768px]">
        <NewExpense onAddExpense={addExpenseHandler} />
        <NewExpenseHeader />
        <Separator />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
