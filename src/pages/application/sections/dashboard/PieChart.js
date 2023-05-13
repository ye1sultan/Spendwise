import { Chart } from 'chart.js';
import 'chartjs';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

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
        { name: "Clothing", icon: <AiOutlineShop size={25} color="#ffffff" />, color: "#D942A6" },
        { name: "Health", icon: <TbHealthRecognition size={25} color="#ffffff" />, color: "#19AD50" },
        { name: "Beauty", icon: <AiOutlineHeart size={25} color="#ffffff" />, color: "#75C5D6" },
        { name: "Home", icon: <AiOutlineHome size={25} color="#ffffff" />, color: "#9CC741" },
        { name: "Supermarket", icon: <AiOutlineShoppingCart size={25} color="#ffffff" />, color: "#E1B136" },
        { name: "Education", icon: <BiBookAlt size={25} color="#ffffff" />, color: "#DB2647" },
        { name: "Restaurant", icon: <RiRestaurant2Line size={25} color="#ffffff" />, color: "#EB9499" },
        { name: "Transport", icon: <AiOutlineCar size={25} color="#ffffff" />, color: "#8DE7AE" },
        { name: "Travel", icon: <BsAirplaneEngines size={25} color="#ffffff" />, color: "#F67730" },
        { name: "Services", icon: <MdOutlineMiscellaneousServices size={25} color="#ffffff" />, color: "#A17BD0" },
        { name: "Electronics", icon: <BsLaptop size={25} color="#ffffff" />, color: "#3391D0" },
        { name: "Recreation", icon: <FaPray size={25} color="#ffffff" />, color: "#8D66E2" },
        { name: "Others", icon: <BsThreeDots size={25} color="#ffffff" />, color: "#AEAEAE" },
        { name: "Salary", icon: <IoWalletSharp size={25} color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift size={25} color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar size={25} color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin size={25} color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots size={25} color="#ffffff" />, color: "#AEAEAE" },
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
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Set the background color of the tooltip
                titleFont: {
                    size: 24, // Set the font size for the title
                    weight: "bold", // Set the font weight for the title
                    family: "Montserrat", // Set the font family for the title
                },
                titleColor: "#ffffff", // Set the font color for the title
                titleSpacing: 4, // Set the space between title lines
                titleMarginBottom: 10, // Set the space between the title and body
                bodyFont: {
                    size: 20, // Set the font size for the body
                    weight: "normal", // Set the font weight for the body
                    family: "Montserrat", // Set the font family for the body
                },
                bodyColor: "#ffffff", // Set the font color for the body
                bodySpacing: 4, // Set the space between body lines
                borderWidth: 1, // Set the border width
                borderColor: "#ffffff", // Set the border color
                borderRadius: 8, // Set the border radius
                padding: 20, // Set the padding around the tooltip
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
                borderRadius: 10, // Set the border radius to make the segments rounder
            },
        },
        legend: {
            display: false,
        }
    };

    return (
        <div className='lg:max-w-[350px] lg:max-h-[350px] md:max-w-[300px] md:max-h-[300px] sm:max-w-[250px] sm:max-h-[250px] max-w-[200px] max-h-[200px] w-full h-full flex justify-center items-center'>
            <Doughnut
                data={data}
                options={options}
                style={
                    {
                        width: `350px`,
                        height: `350px`,
                    }
                }
            />
        </div>
    );
}

export default PieChart;