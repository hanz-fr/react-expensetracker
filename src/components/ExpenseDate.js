function ExpenseDate(props) {
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col text-center w-16">
      <div className="font-bold text-white text-3xl">{date}</div>
      <div className="text-white text-sm">{month}</div>
      <div className="text-white text-sm">{year}</div>
    </div>
  );
}

export default ExpenseDate;
