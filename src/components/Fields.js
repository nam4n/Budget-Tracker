import Filter from "./Filter";
import FieldItem from "./FieldItem";

const Fields = ({ expenses }) => {
  

  return (
    <div className="fields width-[600px] bg-slate-400 p-1 rounded-xl">
      <Filter />
      <div className="list">
        <ul className="flex flex-col gap-3">
          {expenses.map(expense => (
            <FieldItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fields;
