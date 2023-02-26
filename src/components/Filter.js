const Filter = () => {
  return (
    <div className="filter w-[600px] p-2 rounded-xl flex justify-between items-center text-white mb-2">
      <p className="font-extrabold text-2xl ">Filter By</p>

      <div className="filter-selects flex gap-2">
        <div className="flex flex-col">
          <label className="text-lg font-bold">Year</label>
          <select className="text-black hover:cursor-pointer p-1 text-lg font-semibold rounded-sm ">
            <option value="1">2020</option>
            <option value="2">2021</option>
            <option value="3">2022</option>
            <option value="4">2023</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold">Month</label>
          <select className="text-black hover:cursor-pointer p-1 text-lg font-semibold rounded-sm ">
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
