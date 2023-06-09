import ExpenseItem from "./ExpenseItem";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseCount from "./ExpenseCount";

function Expenses(props) {
  /* Total amount of the expenses */
  const sum = props.items.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  return (
    <div className="bg-[#2D2D2D] p-5 rounded-lg">
      {/* Expenses Total and Count */}
      <div className="flex flex-row gap-5 justify-between">
        <ExpenseTotal total={sum} />
        <ExpenseCount count={props.items.length} />
      </div>
      <div className="my-3"></div> {/* Small Spacer */}
      {/* Expenses, inside a Container */}
      <div className="h-96 overflow-y-scroll scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thin scrollbar-thumb-[#9F9F9F] scrollbar-track-[#3E3E3E]">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      </div>
    </div>
  );
}

export default Expenses;
