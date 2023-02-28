import Filter from "./Filter";
import FieldItem from "./FieldItem";
import "./Fields.css";

const Fields = ({expenses}) => {
  

  return (
    <div className="fields width-[600px] bg-slate-400 p-1 rounded-xl">
      <Filter />
      <div className="list">
        <ul className="flex flex-col gap-3 h-[300px] overflow-y-scroll" id="no-scroll">
        {expenses.map(x => {
          return <FieldItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
        })}
          </ul>
      </div>
    </div>
  );
};

export default Fields;


