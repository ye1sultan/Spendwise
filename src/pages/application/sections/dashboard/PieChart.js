import { Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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

        const fontSize = (chart.chartArea.height / 200).toFixed(2);
        ctx.font = fontSize + "em Montserrat";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const text2 = "Total";
        const text1 = `${totalExpense.toLocaleString()} ₸`;
        const lineHeight = 28;
        const totalHeight = lineHeight * 2;

        ctx.fillText(text1, centerX, centerY - totalHeight / 4);
        ctx.fillText(text2, centerX, centerY + totalHeight / 4);
    },
};

Chart.register(centerTextPlugin);

const PieChart = ({ transactions = [] }) => {
    const categories = [
        { name: "Clothing", color: "#D942A6" },
        { name: "Health", color: "#19AD50" },
        { name: "Beauty", color: "#75C5D6" },
        { name: "Home", color: "#9CC741" },
        { name: "Supermarket", color: "#E1B136" },
        { name: "Education", color: "#DB2647" },
        { name: "Restaurant", color: "#EB9499" },
        { name: "Transport", color: "#8DE7AE" },
        { name: "Travel", color: "#F67730" },
        { name: "Services", color: "#A17BD0" },
        { name: "Electronics", color: "#3391D0" },
        { name: "Recreation", color: "#8D66E2" },
        { name: "Others", color: "#AEAEAE" },
        { name: "Salary", color: "#6681DF" },
        { name: "Gift", color: "#B6415D" },
        { name: "Investment", color: "#2DB252" },
        { name: "Rewards", color: "#EDBC3E" },
        { name: "Other", color: "#AEAEAE" },
    ];


    const findCategoryColor = (name) => {
        const category = categories.find((category) => category.name === name);
        return category ? category.color : "#AEAEAE";
    };

    const data = {
        datasets: [
            {
                data: transactions.map((transaction) => Math.abs(transaction.amount)),
                backgroundColor: transactions.map((transaction) => findCategoryColor(transaction.category)),
                borderWidth: 3,
                borderColor: '#ffffff',
            },
        ],
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            centerText: centerTextPlugin,
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleFont: {
                    size: 24,
                    weight: "bold",
                    family: "Montserrat",
                },
                titleColor: "#ffffff",
                titleSpacing: 4,
                titleMarginBottom: 10,
                bodyFont: {
                    size: 20,
                    weight: "normal",
                    family: "Montserrat",
                },
                bodyColor: "#ffffff",
                bodySpacing: 4,
                borderWidth: 1,
                borderColor: "#ffffff",
                borderRadius: 8,
                padding: 20,
                callbacks: {
                    title: (context) => {
                        const index = context[0].dataIndex;
                        return transactions[index].description;
                    },
                    label: (context) => {
                        const index = context.dataIndex;
                        const value = transactions[index].amount;
                        return `${value.toLocaleString()} ₸`;
                    },
                },
            },
        },
        elements: {
            arc: {
                borderRadius: 10,
            },
        },
        legend: {
            display: false,
        }
    };

    return (
        <div
            className='
                lg:max-w-[350px] lg:max-h-[350px] 
                md:max-w-[300px] md:max-h-[300px] 
                sm:max-w-[250px] sm:max-h-[250px] 
                max-w-[200px] max-h-[200px] 
                w-full h-full flex justify-center items-center'>
            <Doughnut
                data={data}
                options={options}
                style={{ width: `350px`, height: `350px`, }}
            />
        </div>
    );
}

export default PieChart;