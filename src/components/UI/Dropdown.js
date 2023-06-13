import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div></div>
  );
};

export default Dropdown;
