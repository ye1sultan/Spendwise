const BarChart = ({ expense, income }) => {
    const total = Math.abs(expense) + income;
    const incomePercentage = (income / total) * 100;
    const expensePercentage = (Math.abs(expense) / total) * 100;

    return (
        <div className="w-full h-full flex justify-between items-center">
            <div className="w-1/2 h-[300px]  flex flex-row justify-center items-center">
                <div
                    className="w-[4vw] lg:w-[40px] bg-[#22A447] rounded-[1vw] lg:rounded-[10px] mr-[4vw] lg:mr-6"
                    style={{
                        height: `${incomePercentage}%`,
                    }}
                ></div>
                <div
                    className="w-[4vw] lg:w-[40px] bg-[#E81E1E] rounded-[1vw] lg:rounded-[10px]"
                    style={{
                        height: `${expensePercentage}%`,
                    }}
                ></div>
            </div>
            <div className="text-md sm:text-xl md:text-2xl flex flex-col justify-center items-center h-full w-1/2 pr-4">
                <div className="flex flex-row justify-between items-center w-full mb-4">
                    <div>Incomes</div>
                    <div className="text-[#34C05C] font-semibold">{income + " ₸"}</div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mb-2">
                    <div>Expenses</div>
                    <div className="text-[#EA1A1A] font-semibold">{expense + " ₸"}</div>
                </div>
                <hr className="w-full h-[2px] bg-[#000000] mb-2" />
                <div className="flex flex-row justify-between items-center w-full">
                    <div>Balance</div>
                    <div className="font-semibold">{income + expense + " ₸"}</div>
                </div>
            </div>
        </div>
    );
}

export default BarChart;