import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
    const barData = {
        labels: [],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    
    return (
        <>
            <div>
                {/* <Bar data={barData} /> */}
            </div>
            <div className="flex flex-col justify-center items-center w-[450px]">
                <div className="flex justify-between items-center w-full mb-[25px]">
                    <div className="text-[24px] font-medium">
                        Incomes
                    </div>
                    <div className="text-[24px] font-semibold text-[#34C05C]">
                        {props.income + " ₸"}
                    </div>
                </div>
                <div className="flex justify-between items-center w-full mb-[25px]">
                    <div className="text-[24px] font-medium">
                        Expenses
                    </div>
                    <div className="text-[24px] font-semibold text-[#EA1A1A]">
                        {props.expense + " ₸"}
                    </div>
                </div>
                <hr className="w-[450px] h-[2px] bg-black mb-[25px]" />
                <div className="flex justify-between items-center w-full mb-[25px]">
                    <div className="text-[24px] font-medium">
                        Balance
                    </div>
                    <div className="text-[24px] font-semibold text-[#000000]">
                        {props.income - props.expense + " ₸"}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BarChart;