const ExpenseTotal = (props) => {

  return (
    <div className="flex basis-1/2 md:basis-2/3 justify-between px-5 py-2 bg-[#373737] rounded-lg">
      <div className="text-xs md:text-sm text-white">Total :</div>
      <div className="text-xs md:text-sm font-bold text-white font-equinox">${props.total.toFixed(1)}</div>
    </div>
  );
}

export default ExpenseTotal;
