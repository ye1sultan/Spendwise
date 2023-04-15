const Expense = (props) => {
    return (
        <div className="w-[560px] flex flex-col justify-center items-center mb-6">
            <div className="w-full flex justify-between items-center ">
                <div className="flex justify-center items-center">
                    <div className="w-[50px] h-[50px] rounded-full mr-4" style={{ backgroundColor: props.color }} ></div>
                    <div className="flex flex-col">
                        <div className="text-[20px] font-semibold">
                            {props.name}
                        </div>
                        <div className="text-[20px] text-[#443A3A]">
                            Percentage
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <div className="text-[#EA1A1A] font-medium text-[22px]">
                        {'- ' + props.value}
                    </div>
                    <div className="text-[20px] text-[#443A3A]">
                        {props.percentage}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expense;