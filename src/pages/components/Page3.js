const Page3 = () => (
    <div className="flex flex-col items-center bg-[#ffffff] h-screen w-full">
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div className="font-inter text-[50px] font-semibold">
                    Keep your budget up to date
                </div>
                <div className="font-amiri" text="32px">
                    With this site you can monitor your financial status at any time. It is very convenient.
                </div>
                <div>
                    <TryNowButton />
                </div>
            </div>
        </div>
    </div>
);

const TryNowButton = () => (
    <button className="w-[272px] h-[88px] rounded-[20px] text-[32px] text-white font-bold bg-[#19AD50CC] font-inter">
        Try Now
    </button>
);

export default Page3;