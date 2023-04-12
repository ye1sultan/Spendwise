import Bie from "../components/Bie";
import BieCharts from "../components/BieCharts";

import Title from "../components/Title";

const Dashboard = () => {
    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount="0.00₸" svg="current" />
                <Bie title="Incomes" amount="0.00₸" svg="incomes" />
                <Bie title="Expenses" amount="0.00₸" svg="expenses" />
                <Bie title="Monthly balance" amount="0.00₸" svg="monthly" />
            </div>
            <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts content="none" title="Expenses by category" />
                <BieCharts content="none" title="Incomes by category" />
                <BieCharts content="none" title="Monthly balance" />
                <BieCharts content="none" title="Goals" />
            </div>
        </>
    );
}

export default Dashboard;