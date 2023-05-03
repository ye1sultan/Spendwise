import Bie from "./Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";

const Dashboard = () => {
    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={0} svg="current" />
                <Bie title="Incomes" amount={0} svg="incomes" />
                <Bie title="Expenses" amount={0} svg="expenses" />
                <Bie title="Monthly balance" amount={0} svg="monthly" />
            </div>
            <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts title="Expenses by category" />
                <BieCharts title="Incomes by category" />
                <BieCharts title="Monthly balance" />
                <BieCharts title="Goals" />
            </div>
        </>
    );
}

export default Dashboard;