import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 298.21, date: new Date(2021, 2, 19) },
    { title: "Upgrade PC part to a better components", amount: 499.99, date: new Date(2021, 3, 27),},
    { title: "Something", amount: 100.1, date: new Date(2021, 5, 2) },
    { title: "Artifact", amount: 942.5, date: new Date(2021, 11, 1) },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <NewExpense />
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
