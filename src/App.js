import "./App.css";
import Balance from "./components/Balance";
import Fields from "./components/Fields";
import Form from "./components/Form";

function App() {
  return <div className="flex flex-col gap-8 justify-center items-center">
    <Form />
    <Balance />
    <Fields />
  </div>;
}

export default App;
