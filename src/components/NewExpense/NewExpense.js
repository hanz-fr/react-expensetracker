import React from 'react'

import Container from '../UI/Container';
import ExpenseForm from './ExpenseForm';
import Logo from '../UI/Logo';
/* FYI, this is a form input if u forgot */
const NewExpense = (props) => {

  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    /* Forward data to App.js through 'onAddExpense' function */
    props.onAddExpense(expenseData);
  }

  return (
    <div className="drop-shadow-lg absolute w-full">
      <Container className="border-b-4 bg-[#E6E6E6] rounded-xl">
        <Logo />
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
      </Container>
    </div>
  )
}

export default NewExpense;