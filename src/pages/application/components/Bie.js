import { ReactComponent as Current } from "./Svgs/Current.svg";
import { ReactComponent as Incomes } from "./Svgs/Incomes.svg";
import { ReactComponent as Expenses } from "./Svgs/Expenses.svg";
import { ReactComponent as Monthly } from "./Svgs/Monthly.svg";

const Bie = (props) => {

    let title = props.title;
    let amount = props.amount;
    let svg = props.svg;

    return (
        <div className="flex flex-col justify-between items-start w-[297px] h-[138px] rounded-[30px] bg-white border-[1px] border-[#AEAEAE] relative p-[25px]">
            <div className="text-[24px] font-medium">
                {title}
            </div>
            <div className="text-[24px] font-medium">
                {amount}
            </div>
            {
                (() => {
                    switch (svg) {
                        case 'current': return <Current />
                        case 'incomes': return <Incomes />
                        case 'expenses': return <Expenses />
                        case 'monthly': return <Monthly />
                        default: return null;
                    }
                })()
            }
        </div>
    );
}

export default Bie;