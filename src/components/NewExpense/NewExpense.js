import React from 'react'

import Container from '../UI/Container';
import ExpenseForm from './ExpenseForm';
import Logo from '../UI/Logo';
/* FYI, this is a form input if u forgot */
const NewExpense = () => {
  return (
    <div>
      <Container className="border-b-4 bg-[#E6E6E6]">
        <Logo />
        <ExpenseForm />
      </Container>
    </div>
  )
}

export default NewExpense;