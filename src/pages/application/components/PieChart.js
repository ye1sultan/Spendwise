import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

import { AiOutlineCar, AiOutlineHeart, AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsAirplaneEngines, BsLaptop, BsThreeDots } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiRestaurant2Line } from 'react-icons/ri';
import { IoWalletSharp } from 'react-icons/io5';
import { AiOutlineGift, AiOutlineStar } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { FaPray } from 'react-icons/fa';
import { TbHealthRecognition } from 'react-icons/tb';
import Transaction from '../sections/report/Transaction';

const getTotalExpense = (data) => {
    return data.datasets[0].data.reduce((acc, val) => acc + val, 0);
};

const centerTextPlugin = {
    id: "centerText",
    afterDraw: (chart) => {
        const total = getTotalExpense(chart.data);
        const ctx = chart.ctx;
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

        ctx.font = "24px Montserrat";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const text2 = "Total";
        const text1 = `${total.toLocaleString()} ₸`;
        const lineHeight = 28;
        const totalHeight = lineHeight * 2;

        ctx.fillText(text1, centerX, centerY - totalHeight / 4);
        ctx.fillText(text2, centerX, centerY + totalHeight / 4);
    },
};

Chart.register(centerTextPlugin);

const PieChart = ({ transactions, type }) => {
    const categories = [
        { name: "Clothing", icon: <AiOutlineShop className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#D942A6" },
        { name: "Health", icon: <TbHealthRecognition className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#19AD50" },
        { name: "Beauty", icon: <AiOutlineHeart className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#75C5D6" },
        { name: "Home", icon: <AiOutlineHome className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#9CC741" },
        { name: "Supermarket", icon: <AiOutlineShoppingCart className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#E1B136" },
        { name: "Education", icon: <BiBookAlt className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#DB2647" },
        { name: "Restaurant", icon: <RiRestaurant2Line className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#EB9499" },
        { name: "Transport", icon: <AiOutlineCar className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#8DE7AE" },
        { name: "Travel", icon: <BsAirplaneEngines className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#F67730" },
        { name: "Services", icon: <MdOutlineMiscellaneousServices className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#A17BD0" },
        { name: "Electronics", icon: <BsLaptop className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#3391D0" },
        { name: "Recreation", icon: <FaPray className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#8D66E2" },
        { name: "Others", icon: <BsThreeDots className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#AEAEAE" },
        { name: "Salary", icon: <IoWalletSharp className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots className="text-[15px] lg:text-[30px]" color="#ffffff" />, color: "#AEAEAE" },
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
                        return transactions[index].category;
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

    const getTransactions = () => {
        return transactions.map((transaction, index) => {
            const category = categories.find((category) => category.name === transaction.category);
            const percentage = Math.abs((transaction.amount / getTotalExpense(data) * 100).toFixed(2));

            return (
                <Transaction
                    key={index}
                    name={category.name}
                    value={Math.abs(transaction.amount).toLocaleString()}
                    icon={category.icon}
                    color={category.color}
                    percentage={`${percentage}%`}
                    type={transaction.transaction_type}
                />
            );
        });
    };

    return (
        <>
            <div className="w-[100%] sm:w-[50%] flex justify-center items-center">
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
            </div>
            {type && (<div className="w-[100%] sm:w-[50%] mt-[40px] sm:mt-0">
                <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium mb-6 capitalize">
                    <span className={type === 'incomes' ? 'text-green-500' : type === 'expenses' ? 'text-red-500' : ''}>{type}</span> by category
                </div>
                {getTransactions()}
            </div>)}
        </>
    );
}

export default PieChart;