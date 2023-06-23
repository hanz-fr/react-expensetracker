import React, { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
  /* States */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const currentDate = new Date().toJSON().slice(0, 10);

  /* Datepicker handler */
  let [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  /* Listener & Handler */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  // NOTE : the date handler is already handled by DatePicker plugin.
  /* const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }; */

  const submitHandler = (event) => {
    event.preventDefault(); // disable form submitting to development server

    console.log(new Date(dateValue.startDate));

    /* Date IF NULL handler */
    let date;
    if(dateValue.startDate == null) {
      date = new Date(currentDate);
    } else {
      date = new Date(dateValue.startDate);
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: date,
    };

    /* Execute the function to pass expense data to NewExpense */
    props.onSubmitExpenseData(expenseData);

    /* Clear the form input after submitting the form */
    setEnteredTitle("");
    setEnteredAmount("");
    setDateValue({
      startDate: null,
      endDate: null,
    });
  };

  const cancelButtonHandler = () => {
    props.onFormCancel();
  };

  let formDisplay;
  if (props.formDisplay === "show") {
    formDisplay = "flex";
  } else {
    formDisplay = "hidden";
  }

  const formClasses = formDisplay + " flex-col gap-5 mt-2";

  return (
    <form onSubmit={submitHandler} className={formClasses}>
      <div className="grid grid-cols-2 gap-4">
        {/* Title */}
        <div>
          <input
            className="form-input"
            type="text"
            placeholder="Title"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          />
        </div>

        {/* Amount */}
        <input
          className="form-input"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
          onChange={amountChangeHandler}
          value={enteredAmount}
          required
        />

        {/* Date */}
        <div>
          <Datepicker
            inputClassName={"date-input text-sm md:text-lg"}
            primaryColor={"teal"}
            useRange={false}
            asSingle={true}
            value={dateValue}
            readOnly={true}
            displayFormat={"DD/MM/YYYY"}
            onChange={handleValueChange}
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          isTextButton={true}
          text={"Cancel"}
          onButtonClick={cancelButtonHandler}
        />
        <Button type={"submit"} isTextButton={false} text={"Add"} />
      </div>
    </form>
  );
};

export default ExpenseForm;
