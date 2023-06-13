import React from 'react'

import Container from '../UI/Container';
import Logo from '../UI/Logo';
import Button from '../UI/Button';

const NewExpenseHeader = () => {
  return (
    <div>
        <Container className="border-b-4 bg-[#E6E6E6] flex justify-between drop-shadow-lg rounded-xl" >
            <Logo />
            <Button className="text-sm px-5 py-3 h-fit my-auto" isTextButton={false} text={"Add new expenses +"} />
        </Container>
    </div>
  )
}

export default NewExpenseHeader;