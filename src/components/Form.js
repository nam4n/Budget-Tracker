import React, { useState } from "react";

const Form = () => {
  const [isForm, setIsForm] = useState(false);

  const handleShowForm = () => {
    setIsForm(true);
  };

  const handleHideForm = () => {
    setIsForm(false);
  };

  return (
    <form className="input-form mt-8 rounded-xl shadow-sm shadow-sky-400 w-[600px]">
      {isForm ? (
        <div className="p-4">
          <div className="title-amount flex">
            <div className="input-title flex flex-col gap-2 mx-4">
              <label className="text-xl font-bold text-sky-500 tracking-wide">
                Title
              </label>
              <input
                type="text"
                placeholder="Add Title"
                className="p-2 rounded-md border border-solid w-[250px]"
              />
            </div>

            <div className="input-amount flex flex-col gap-2 mx-4">
              <label className="text-xl font-bold text-sky-500 tracking-wide">
                Amount
              </label>
              <input
                type="number"
                placeholder="Add Amount"
                className="p-2 rounded-md border border-solid w-[250px]"
              />
            </div>
          </div>

          <div className="date mt-4">
            <div className="input-date flex flex-col gap-2 mx-4">
              <label className="text-xl font-bold text-sky-500 tracking-wide">
                Date
              </label>
              <input
                type="date"
                className="p-2 rounded-md border border-solid w-[250px]"
              />
            </div>
          </div>

          <div className="submit-button mt-4 flex justify-end gap-4">
            <button type="button" onClick={handleHideForm} className="text-sky-400 text-xl font-bold py-1 px-8 rounded-md bg-white border border-sky-400 hover:scale-105 hover:shadow-md">
              Cancel
            </button>
            <button type="submit" className="text-white text-xl font-bold py-1 px-10 rounded-md bg-sky-400 hover:scale-105 hover:shadow-md">
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-[600px] p-4">
          <button className="text-white text-xl font-bold py-2 px-6 rounded-md bg-sky-400 hover:scale-105 hover:shadow-md" onClick={handleShowForm}>
            Add Expense
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
