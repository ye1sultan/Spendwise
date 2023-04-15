import { Doughnut } from "react-chartjs-2";
import Expense from "../report/Expense";

const PieChart = (props) => {
    const pieData = {
        labels: [],
        datasets: [
            {
                data: props.data,
                backgroundColor: props.color,
                borderWidth: 3,
                borderRadius: 10
            },
        ],
    };

    return (
        <>
            <div className="w-[350px]">
                <Doughnut
                    data={pieData}
                />
            </div>
            <div className="flex flex-col ">
                {props.expenses.map((expense, index) => (
                    <Expense key={index} name={expense.name} value={expense.value} color={expense.color} percentage={expense.percentage} />
                ))}
            </div>
        </>
    );
}

export default PieChart;