const Balance = () => {
    return <div className="balance shadow-md shadow-sky-400 rounded-xl">
        <div className="total-bal flex justify-around items-center text-center py-2 w-[600px]">
            <div className="flex flex-col">
            <h1 className="font-extrabold text-6xl">₹87100</h1>
            <p className="tracking-wide text-xl mt-1 font-bold text-sky-500">Total Balance</p>
            </div>

            <div className="balance-cards flex flex-col gap-4">
                <div className="card w-[200px] bg-green-400 p-2 rounded-md shadow-md">
                    <h1 className="text-white font-bold text-xl">₹8000</h1>
                    <p className="text-white font-medium text-l">Income of Month</p>
                </div>

                <div className="card w-[200px] bg-red-400 p-2 rounded-md shadow-md">
                    <h1 className="text-white font-bold text-xl">₹983</h1>
                    <p className="text-white font-medium text-l">Expenses of Month</p>
                </div>
            </div>

        </div>
    </div>
};

export default Balance;