const NoGoalsContent = () => {
    return (
        <>
            <svg width="84" height="61" viewBox="0 0 84 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_70_450)">
                    <rect x="37.75" y="11.75" width="33.5" height="23.5" rx="4.25" fill="white" stroke="#696969" stroke-width="1.5" />
                    <line x1="25.75" y1="5" x2="25.75" y2="74" stroke="#696969" stroke-width="1.5" />
                </g>
                <defs>
                    <clipPath id="clip0_70_450">
                        <rect width="84" height="61" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className="text-center">
                <div className="text-[24px]">
                    Ops! You have no registered goals this month.
                </div>
                <div className="text-[20px] text-[#59595A]">
                    Improve your finances now!
                </div>
            </div>
            <button className="uppercase w-[269px] h-[52px] bg-[#9F75D6] bg-opacity-90 rounded-[30px] text-white text-[20px] mb-[60px]">
                SET MY GOALS
            </button>
        </>

    );
}

export default NoGoalsContent;