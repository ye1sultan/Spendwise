const BarChart = ({ expenses, incomes }) => {
    const total = Math.abs(expenses) + incomes;
    const incomePercentage = ((incomes / total) * 100).toFixed(2) + "%";
    const expensePercentage = ((Math.abs(expenses) / total) * 100).toFixed(2) + "%";

    return (
        <div className="w-full h-full flex flex-col sm:flex-row justify-evenly items-center sm:pr-[40px]">
            <div className="w-full sm:w-[50%] h-[200px] md:h-[300px] lg:h-[400px] flex flex-row justify-center items-center">
                <div className="h-full flex flex-col justify-end items-center mr-6">
                    <div
                        className="w-[40px] bg-[#22A447] rounded-[10px]"
                        style={{
                            height: incomePercentage,
                            minHeight: '10px',
                        }}
                    ></div>
                    <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                        {incomePercentage}
                    </div>
                </div>
                <div className="h-full flex flex-col justify-end items-center">
                    <div
                        className="w-[40px] bg-[#E81E1E] rounded-[10px]"
                        style={{
                            height: expensePercentage,
                            minHeight: '10px',
                        }}
                    ></div>
                    <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                        {expensePercentage}
                    </div>
                </div>
            </div>
            <div className="mt-[40px] sm:mt-0 text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] flex flex-col justify-center items-center h-full w-full sm:w-[40%]">
                <div className="flex flex-row justify-between items-center w-full mb-4">
                    <div>Incomes</div>
                    <div className="text-[#34C05C] font-semibold">{incomes}</div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mb-2">
                    <div>Expenses</div>
                    <div className="text-[#EA1A1A] font-semibold">{expenses}</div>
                </div>
                <hr className="w-full h-[2px] bg-[#000000] mb-2" />
                <div className="flex flex-row justify-between items-center w-full">
                    <div>Balance</div>
                    <div className="font-semibold">{incomes + expenses}</div>
                </div>
            </div>
        </div>
    );
}

export default BarChart;