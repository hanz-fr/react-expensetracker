function ExpenseTotal(props) {

  return (
    <div className="flex basis-2/3 justify-between px-5 py-2 bg-[#373737] rounded-lg">
      <div className="text-base text-white">Total :</div>
      <div className="text-base font-bold text-white">${props.total.toFixed(1)}</div>
    </div>
  );
}

export default ExpenseTotal;
