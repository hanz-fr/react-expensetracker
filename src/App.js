import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 298.21, date: new Date(2021, 2, 19),},
    { title: "Playstation", amount: 499.99, date: new Date(2021, 3, 30),},
    { title: "Something", amount: 100.10, date: new Date(2021, 5, 2),},
  ];

  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </div>
  );
}

export default App;
