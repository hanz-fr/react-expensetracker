function ExpenseCount(props) {
  return (
    <div className="flex basis-1/3 justify-between px-5 py-2 bg-[#373737] rounded-lg">
      <div className="text-base text-white">Count :</div>
      <div className="text-base font-bold text-white">{props.count}</div>
    </div>
  );
}

export default ExpenseCount;
