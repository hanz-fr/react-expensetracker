import React from 'react'

import Container from '../UI/Container';
import ExpenseForm from './ExpenseForm';
import Logo from '../UI/Logo';
/* FYI, this is a form input if u forgot */
const NewExpense = (props) => {

  let z_index = 'z-0';

  if(props.formDisplay === 'show') {
    z_index = 'z-10';
  }

  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    /* Forward data to App.js through 'onAddExpense' function */
    props.onAddExpense(expenseData);
  }

  const onFormCancelHandler = () => {
    props.onFormCancel();
    z_index = 'z-0';
  }

  let classes = 'drop-shadow-lg absolute w-full ' + z_index;

  return (
    <div className={classes}>
      <Container className="border-b-4 bg-[#E6E6E6] rounded-xl">
        <Logo />
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} formDisplay={props.formDisplay} onFormCancel={onFormCancelHandler} />
      </Container>
    </div>
  )
}

export default NewExpense;