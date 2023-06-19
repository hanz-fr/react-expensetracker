const ExpenseCount = (props) => {
  return (
    <div className="flex basis-1/2 md:basis-1/3 justify-between px-5 py-2 bg-[#373737] rounded-lg">
      <div className="text-xs md:text-sm text-white">Count : </div>
      <div className="text-xs md:text-sm font-bold font-equinox text-white">{props.count}</div>
    </div>
  );
}

export default ExpenseCount;
