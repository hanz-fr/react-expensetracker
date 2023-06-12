import React, { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";
import Button from "../UI/Button";

const ExpenseForm = () => {

  /* Datepicker properties */
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <form action="" className="flex flex-col gap-5 mt-2">
      <div className="grid grid-cols-2 gap-4">
        {/* Title */}
        <div>
          <input className="form-input" type="text" placeholder="Title" />
        </div>

        {/* Amount */}
        <input
          className="form-input"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Amount"
        />

        {/* Date */}
        <div className="">
          <label className="text-[#848484]">Date</label>
          <Datepicker
            inputClassName={"date-input"}
            primaryColor={"teal"} 
            useRange={false}
            asSingle={true}
            value={value}
            readOnly={true}
            displayFormat={"DD/MM/YYYY"}
            onChange={handleValueChange}
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button isTextButton={true} text={"Cancel"}/>
        <Button isTextButton={false} text={"Add"} />
      </div>
    </form>
  );
};

export default ExpenseForm;
