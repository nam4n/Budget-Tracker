import "./App.css";
import Balance from "./components/Balance";
import Fields from "./components/Fields";
import Form from "./components/Form";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: "Invested in Gold ETF",
    amount: 983,
    date: new Date("2023-02-06"),
  },
  {
    id: 'e2',
    title: "Electricity Bill",
    amount: 2789,
    date: new Date("2023-02-16"),
  },
  {
    id: 'e3',
    title: "Sample",
    amount: 500,
    date: new Date("2023-02-10"),
  },
  {
    id: 'e4',
    title: "Bought books",
    amount: 1100,
    date: new Date("2023-02-26"),
  },
]

function App() {
  return <div className="flex flex-col gap-8 justify-center items-center">
    <Form />
    <Balance />
    <Fields expenses={INITIAL_EXPENSES} />
  </div>;
}

export default App;
