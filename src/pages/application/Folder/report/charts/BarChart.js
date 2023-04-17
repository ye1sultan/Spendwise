const BarChart = (props) => {
    let incomes = props.incomes;
    let expenses = props.expenses;

    function formatValue(value) {
        const stringValue = value.toString();
        const parts = [];

        for (let i = stringValue.length - 1, j = 0; i >= 0; i--, j++) {
            if (j % 3 === 0 && j !== 0) {
                parts.unshift(' ');
            }

            parts.unshift(stringValue.charAt(i));
        }

        return parts.join('') + ' ₸';
    }
    const total = incomes + expenses;
    const incomePercentage = (incomes / total) * 100;
    const expensePercentage = (expenses / total) * 100;

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-[-200px]">
                <div className="w-full h-[400px] flex justify-center items-end">
                    <div style={{ height: `${incomePercentage}%` }} className="w-[40px] bg-[#22A447] rounded-[30px] mr-20"></div>
                    <div style={{ height: `${expensePercentage}%` }} className="w-[40px] bg-[#E81E1E] rounded-[30px]"></div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="text-[24px] mr-8">
                        {`${incomePercentage.toFixed(2)}%`}
                    </div>
                    <div className="text-[24px]">
                        {`${expensePercentage.toFixed(2)}%`}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between items-center w-[450px] mb-6">
                    <div className="text-[24px] font-medium">
                        Incomes
                    </div>
                    <div className="text-[24px] font-semibold text-[#34C05C]">
                        {formatValue(incomes)}
                    </div>
                </div>
                <div className="flex justify-between items-center w-[450px] mb-3">
                    <div className="text-[24px] font-medium">
                        Expenses
                    </div>
                    <div className="text-[24px] font-semibold text-[#EA1A1A]">
                        {formatValue(expenses)}
                    </div>
                </div>
                <hr className="w-[450px] h-[2px] bg-[#000000] bg-opacity-80 mb-3" />
                <div className="flex justify-between items-center w-[450px] mb-3">
                    <div className="text-[24px] font-medium">
                        Balance
                    </div>
                    <div className={`text-[24px] font-semibold ${(incomes - expenses) > 0 ? 'text-[#34C05C]' : 'text-[#EA1A1A]'}`}>
                        {formatValue(incomes - expenses)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BarChart;