import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  /* Product Props */
  const title = props.title;
  const amount = props.amount;

  return (
    /* Card */
    <Card>
      <div className="flex justify-between px-10 py-5">
        {/* Date */}
        <div className="flex gap-14">
          <ExpenseDate date={props.date} />
          {/* Title */}
          <div className="my-auto">
            <p className="w-48 text-white text-sm font-light">{title}</p>
          </div>
        </div>
        <div className="mx-20"></div>
        {/* Spacer */}
        {/* Price */}
        <div className="my-auto font-normal text-white bg-[#00CCBF] text-center px-5 py-2 w-24 rounded-sm">
          ${amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
