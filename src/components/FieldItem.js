import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const FieldItem = ({title, amount, date}) => {
//   let newDay = new Date();
//   const month = newDay
//     .toLocaleString("en-US", { month: "long" })
//     .trim()
//     .slice(0, 3);
//   const year = newDay.getFullYear();
//   const day = newDay.toLocaleString("en-US", { day: "2-digit" });

const month = date.toLocaleString("en-US", {month: "long"}).slice(0,3);
const day = date.toLocaleString("en-US", {day: "2-digit"});
const year = date.getFullYear();

  return (
    <li className="field shadow-sm shadow-sky-400 bg-slate-50 rounded-xl p-1 flex items-center justify-between gap-2 w-[600px]">
      <div className="field-date shadow-md flex flex-col justify-center items-center text-white bg-slate-400 py-2 px-4 rounded-xl">
        <p>{month}</p>
        <h1 className="font-extrabold text-2xl">{day}</h1>
        <p>{year}</p>
      </div>
      <div className="field-description flex justify-between w-full">
        <div className="field-title text-xl font-bold">
          {title}
        </div>
        <div className="field-amount bg-red-400 px-6 py-1 text-xl text-white font-bold rounded-lg mr-1">
          ₹{amount}
        </div>
      </div>
      <div className="field-actions flex gap-1 bg-white p-2 rounded-lg">
        <ModeEditIcon className="text-sky-400 hover:scale-125 hover:cursor-pointer" />
        <DeleteIcon className="text-red-600 hover:scale-125 hover:cursor-pointer" />
      </div>
    </li>
  );
};

export default FieldItem;
