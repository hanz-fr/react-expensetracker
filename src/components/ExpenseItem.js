import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  /* Product Props */
  const title = props.title;
  const amount = props.amount;

  return (
    /* Container */
    <div className="bg-[#3E3E3E] rounded-lg mx-10 my-3">
      <div className="flex justify-between px-10 py-5">
        {/* Date */}
        <div className="flex gap-14">
          <ExpenseDate date={props.date}/>
          {/* Title */}
          <div className="my-auto">
            <p className="text-white text-lg">{title}</p>
          </div>
        </div>
        {/* Price */}
        <div className="my-auto font-normal text-white bg-[#00CCBF] text-center py-2 w-24 rounded-sm">
          ${amount}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
