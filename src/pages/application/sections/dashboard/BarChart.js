const BarChart = ({ expense, income }) => {
    const total = Math.abs(expense) + income;
    const incomePercentage = (income / total) * 100;
    const expensePercentage = (Math.abs(expense) / total) * 100;

    return (
        <div className="w-full h-full min-h-[200px] 2xl:min-h-[300px] flex justify-between items-center pr-[20px] 2xl:pr-[40px] 2xl:pb-[20px]">
            <div className="w-[50%] h-full flex flex-row justify-center items-center">
                <div
                    className="w-[20px] 2xl:w-[40px] bg-[#22A447] rounded-[5px] 2xl:rounded-[10px] mr-4 2xl:mr-6"
                    style={{
                        height: `${incomePercentage}%`,
                        transition: 'height 1s ease',
                    }}
                ></div>
                <div
                    className="w-[20px] 2xl:w-[40px] bg-[#E81E1E] rounded-[5px] 2xl:rounded-[10px]"
                    style={{
                        height: `${expensePercentage}%`,
                        transition: 'height 1s ease',
                    }}
                ></div>
            </div>
            <div className="text-[16px] 2xl:text-[24px] flex flex-col justify-center items-center h-full w-[50%]">
                <div className="flex flex-row justify-between items-center w-full mb-4">
                    <div>Incomes</div>
                    <div className="text-[#34C05C] font-semibold">{income}</div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mb-2">
                    <div>Expenses</div>
                    <div className="text-[#EA1A1A] font-semibold">{expense}</div>
                </div>
                <hr className="w-full h-[2px] bg-[#000000] mb-2" />
                <div className="flex flex-row justify-between items-center w-full">
                    <div>Balance</div>
                    <div className="font-semibold">{income + expense}</div>
                </div>
            </div>
        </div>
    );
}

export default BarChart;