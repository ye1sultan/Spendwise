const BieCharts = () => {
    return (
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#696969] font-medium">
                Expenses by category
            </div>
            <div className="flex flex-col justify-between items-center w-[723px] h-[328px] rounded-[30px] bg-white pt-[25px] px-[20px]">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 30V7.5" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M49.4848 18.75L10.5137 41.25" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.8752 34.1133C6.90103 28.8413 7.83831 23.3947 10.5187 18.7516C13.1991 14.1085 17.4471 10.5731 22.4997 8.78027V25.6698L7.8752 34.1133Z" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30.0005 7.5C33.9425 7.50073 37.8152 8.53713 41.2307 10.5054C44.6462 12.4737 47.4846 15.3048 49.4617 18.7151C51.4389 22.1255 52.4853 25.9955 52.4962 29.9375C52.5072 33.8795 51.4823 37.7552 49.5241 41.1765C47.566 44.5979 44.7433 47.4447 41.3388 49.4319C37.9343 51.4191 34.0675 52.477 30.1255 52.4996C26.1835 52.5223 22.3048 51.5088 18.8777 49.5608C15.4506 47.6128 12.5954 44.7986 10.5981 41.4" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="text-center">
                    <div className="text-[24px]">
                        Oops! You don't have any registered expense this month.
                    </div>
                    <div className="text-[20px] text-[#59595A]">
                        Register the expenses made this month using the (+) button to check your charts.
                    </div>
                </div>
                <button className="text-[24px] text-[#590CC0] uppercase w-full h-[70px] border-t-[1px] border-t-black">
                    See more
                </button>
            </div>
        </div>
    );
}

export default BieCharts;