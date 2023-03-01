import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Fields from "./components/Fields";
import Form from "./components/Form";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: "Invested in Gold ETF",
    amount: '-983',
    date: new Date("2023-02-06"),
  },
  {
    id: 'e2',
    title: "Electricity Bill",
    amount: 2789,
    date: new Date("2023-02-10"),
  },
  {
    id: 'e3',
    title: "Sample",
    amount: 500,
    date: new Date("2022-02-16"),
  },
  {
    id: 'e4',
    title: "Bought books",
    amount: 1100,
    date: new Date("2023-02-26"),
  },
  {
    id: 'e5',
    title: "Salary for March",
    amount: 8000,
    date: new Date("2023-03-04"),
  },

]

function App() {

  // state for balances
  const [balance, setBalance] = useState(87100);

  const [monthExp, setMonthExp] = useState(0);
  const [monthIncome, setMonthIncome] = useState(8000);


  // state for updating the expenses array
  const [initialExpenses, setInitialExpenses] = useState(INITIAL_EXPENSES);

  // add new field to the initial expenses array
  const addNewField = (field) => {
    
    setInitialExpenses(pV => {
      return [field, ...pV];
    });

  };

  return <div className="flex flex-col gap-8 justify-center items-center mb-8">
    <Form handleNewField={addNewField} />
    <Balance />
    <Fields expenses={initialExpenses} />
  </div>;
}

export default App;


