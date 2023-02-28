import Filter from "./Filter";
import FieldItem from "./FieldItem";
import "./Fields.css";
import { useState } from "react";

const Fields = ({expenses}) => {

  const [year, setYear] = useState("2023");
  const [month, setMonth] = useState("");

  const handleSelectYear = (yr) => {
    setYear(yr);
  };

  const handleSelectMonth = (mo) => {
    setMonth(mo);
  };

  const filteredByYear = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  });


  const filteredByMonth = filteredByYear.filter(expense => {
    return expense.date.getMonth().toString() === month;
  })

  

  return (
    <div className="fields width-[600px] bg-slate-400 p-1 rounded-xl">
      <Filter onSelectYear={handleSelectYear} onSelectMonth={handleSelectMonth} yr={year} mo={month} />
      <div className="list">
        <ul className="flex flex-col gap-3 h-[300px] overflow-y-scroll p-2" id="no-scroll">
        {filteredByMonth.map(x => {
          return <FieldItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
        })}
          </ul>
      </div>
    </div>
  );
};

export default Fields;


