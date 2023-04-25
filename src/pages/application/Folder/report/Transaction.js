const Transaction = ({ name, value, icon, color, percentage, type }) => {
    return (
        <div className="w-[560px] flex flex-col justify-center items-center mb-6">
            <div className="w-full flex justify-between items-center ">
                <div className="flex justify-center items-center">
                    <div className="w-[50px] h-[50px] rounded-full mr-4 flex justify-center items-center" style={{ backgroundColor: color }} >
                        {icon}
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[20px] font-semibold">
                            {name}
                        </div>
                        <div className="text-[18px] text-[#443A3A]">
                            Percentage
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <div className="font-medium text-[22px]" style={{ color: type === 'incomes' ? '#34C05C' : '#EA1A1A' }}>
                        {type === 'expenses' ? '- ' + value : value}
                    </div>
                    <div className="text-[20px] text-[#443A3A]">
                        {percentage}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;