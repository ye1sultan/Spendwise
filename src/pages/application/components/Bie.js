import { ReactComponent as Current } from "./svgs/Current.svg";
import { ReactComponent as Incomes } from "./svgs/Incomes.svg";
import { ReactComponent as Expenses } from "./svgs/Expenses.svg";
import { ReactComponent as Monthly } from "./svgs/Monthly.svg";

const Bie = (props) => {

    let title = props.title;
    let amount = props.amount;
    let svg = props.svg;

    return (
        <div className="flex flex-col justify-between items-start w-[297px] h-[138px] rounded-[30px] bg-white border-[1px] border-[#AEAEAE] relative p-[25px]">
            <div className="text-[24px] font-medium">
                {title}
            </div>
            <div className="absolute right-4 top-[50%] translate-y-[-50%]" >
                {
                    (() => {
                        switch (svg) {
                            case 'current': return <Current />;
                            case 'incomes': return <Incomes />;
                            case 'expenses': return <Expenses />;
                            case 'monthly': return <Monthly />;
                            default: return null;
                        }
                    })()
                }
            </div>
            <div className="text-[24px] font-medium">
                {amount}
            </div>
        </div>
    );
}

export default Bie;