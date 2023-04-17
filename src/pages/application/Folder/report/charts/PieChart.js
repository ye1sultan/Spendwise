import Expense from '../Expense';
import { Chart } from 'chart.js';
import 'chartjs';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const getTotalExpense = (data) => {
    return data.datasets[0].data.reduce((acc, val) => acc + val, 0);
};

const centerTextPlugin = {
    id: "centerText",
    afterDraw: (chart) => {
        const totalExpense = getTotalExpense(chart.data);
        const ctx = chart.ctx;
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        ctx.font = "24px Montserrat";
        ctx.fillStyle = "#EA1A1A";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const text1 = "Total";
        const text2 = `${totalExpense.toLocaleString()} ₸`;
        const lineHeight = 28;
        const totalHeight = lineHeight * 2;

        ctx.fillText(text1, centerX, centerY - totalHeight / 4);
        ctx.fillText(text2, centerX, centerY + totalHeight / 4);
    },
};

Chart.register(centerTextPlugin);

const PieChart = (props) => {
    let expenses = props.expenses;

    const getTotalExpense = (data) => {
        return data.datasets[0].data.reduce((acc, val) => acc + val, 0);
    };

    const centerTextPlugin = {
        id: 'centerText',
        afterDraw: (chart) => {
            const ctx = chart.ctx;
            const totalExpense = getTotalExpense(chart.data);

            // Set the font size, family, and style
            ctx.font = '24px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Calculate the center coordinates
            const x = chart.chartArea.left + chart.chartArea.width / 2;
            const y = chart.chartArea.top + chart.chartArea.height / 2;

            // Display the total expense value
            ctx.fillText(`${totalExpense} T Total`, x, y);
        },
    };

    const data = {
        datasets: [
            {
                data: expenses.map((expense) => expense.value),
                backgroundColor: expenses.map((expense) => expense.color),
                borderWidth: 2,
                borderColor: '#ffffff',
            },
        ],
    };


    const options = {
        cutout: '70%',
        plugins: {
            centerText: centerTextPlugin,
        },
        elements: {
            arc: {
                borderRadius: 10, // Set the border radius to make the segments rounder
            },
        },
        legend: {
            display: false,
        }
    };

    return (
        <>
            <div className="w-[50%] flex justify-center items-center">
                <div className="max-w-[350px] max-h-[350px]">
                    <Doughnut
                        data={data}
                        options={options}
                        style={{ width: '350px', height: '350px' }}
                    />
                </div>
            </div>
            <div className="w-[50%]">
                <div className="text-[32px] font-medium mb-6">
                    Expenses by category
                </div>
                <div className="">
                    {
                        expenses.map((expense, index) => (
                            <Expense key={index} name={expense.name} value={expense.value} icon={expense.icon} color={expense.color} percentage={expense.percentage} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default PieChart;