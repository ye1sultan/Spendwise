import { AiFillDelete } from 'react-icons/ai';
import { BsCheckAll } from 'react-icons/bs';

const Goal = (props) => {

    let name = props.name;
    let icon = props.icon;
    let deadline = props.deadline;
    let totalAmount = props.totalAmount;
    let amount = props.amount;
    let color = props.color;

    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }

    let progress = getPercent(amount, totalAmount);

    return (
        <div className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] m-[30px] p-[30px] flex flex-col justify-between items-start">
            <div className="flex justify-start items-center w-full">
                <div className="w-[50px] h-[50px] bg-[#19AD50] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]">
                    {icon}
                </div>
                <div className="text-[25px] font-medium text-[#4E4949]">
                    {name}
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="">
                    <div className="text-[20px] font-medium text-[#979393]">
                        Till
                    </div>
                    <div className="text-[25px] font-medium text-[#4E4949]">
                        {deadline}
                    </div>
                </div>
                <div className="text-[36px] font-medium">
                    {progress + " %"}
                </div>
            </div>
            <div className="w-full h-[20px] bg-[#EEECEC] rounded-[10px]">
                <div className="h-full bg-[#19AD50] bg-opacity-50 rounded-[10px]"  style={{ width: progress + "%" }}></div>
            </div>
            <div className="text-[16px] font-semibold text-[#696969]">
                {`₸ ${amount} / ₸ ${totalAmount}`}
            </div>
            <div className="w-full flex justify-end items-center">
                <button>
                    <AiFillDelete color="#474448" size={35} />
                </button>
                <button>
                    <BsCheckAll color="#474448" size={35} />
                </button>
            </div>
        </div>
    );
}

export default Goal;