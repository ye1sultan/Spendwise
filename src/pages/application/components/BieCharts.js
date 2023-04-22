import Goal from "../folder/goals/Goal.js";
import NoBieChartContent from "./NoBieChartContent.js";
import NoGoalsContent from "./NoGoalsContent.js";

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

const BieCharts = (props) => {
    const initialData = {
        "2023-02": {
            expenses: [
                {
                    name: "Health",
                    value: 30980,
                    percentage: "50.00%",
                    color: "#9CC741",
                    icon: 'earth',
                },
                {
                    name: "Clothing",
                    value: 20030,
                    percentage: "50.00%",
                    color: "#D942A6",
                    icon: 'car',
                },
                {
                    name: "Games",
                    value: 15080,
                    percentage: "50.00%",
                    color: "#F67730",
                    icon: 'cart',
                },
            ],
            incomes: 123456,
        },
    };

    let content = props.content;
    let title = props.title;
    let onClick = props.onClick;
    let onExpenseClick = props.onExpenseClick;
    let onGoalClick = props.onGoalClick;

    const getTotalExpense = (data) => {
        return data.datasets[0].data.reduce((acc, val) => acc + val, 0);
    };

    const data = {
        datasets: [
            {
                data: initialData["2023-02"].expenses.map((expense) => expense.value),
                backgroundColor: initialData["2023-02"].expenses.map((expense) => expense.color),
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
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            <div className="flex flex-col justify-between items-center w-[723px] h-[328px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white pt-[25px] px-[15px]">
                {
                    (() => {
                        if (title === 'Expenses by category') {
                            return (
                                <div className="max-w-[350px] max-h-[350px]">
                                    <Doughnut
                                        data={data}
                                        options={options}
                                        style={{ width: '250px', height: '250px' }}
                                    />
                                    <button
                                        className="text-[24px] text-[#590CC0] uppercase w-full h-[50px]" onClick={onExpenseClick}>
                                        See more
                                    </button>
                                </div>
                            );
                        }
                        if (title !== "Goals") {
                            if (!content) {
                                return <NoBieChartContent onClick={onClick} />;
                            } else {
                                return <NoBieChartContent onClick={onClick} />;
                            }
                        } else {
                            if (!content) {
                                return <NoGoalsContent />;
                            } else {
                                return (
                                    <>
                                        <Goal name={content[0].name} deadline={content[0].deadline} amount={content[0].amount} totalAmount={content[0].totalAmount} color={content[0].color} icon={content[0].icon} />
                                        <button
                                            className="text-[24px] text-[#590CC0] uppercase w-full" onClick={onGoalClick}>
                                            See more
                                        </button>
                                    </>
                                );
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default BieCharts;