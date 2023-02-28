const Filter = ({onSelectYear, onSelectMonth, yr, mo}) => {

  const handleYearChange = e => {
    onSelectYear(e.target.value);
  };

  const handleMonthChange = e => {
    onSelectMonth(e.target.value);
  }

  return (
    <div className="filter w-[600px] p-2 rounded-xl flex justify-between items-center text-white mb-2">
      <p className="font-extrabold text-2xl ">Filter By</p>

      <div className="filter-selects flex gap-2">
        <div className="flex flex-col">
          <label className="text-lg font-bold">Year</label>
          <select className="text-black hover:cursor-pointer p-1 text-lg font-semibold rounded-sm" onChange={handleYearChange} value={yr}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold">Month</label>
          <select className="text-black hover:cursor-pointer p-1 text-lg font-semibold rounded-sm" onChange={handleMonthChange} value={mo}>
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
