const Page2 = () => (
    <div className="flex flex-col items-center bg-[#EBF0FEBF] h-screen w-full">
        <div className="py-24 flex flex-col items-center justify-center w-full">
            <div className="font-inter text-[50px] w-[650px] items-center justify-center text-center font-semibold mb-40">
                Spend less time worrying and more time living life.
            </div>
            <div className="flex flex-row justify-around w-full">
                <div className="flex flex-col justify-center items-center text-center w-[400px]">
                    <div className="w-[64px] h-[64px] mb-8">
                        <img src="https://picsum.photos/64/64" alt=""/>
                    </div>
                    <div className="font-amiri text-[32px] font-bold mb-8">
                        Calculate your budget
                    </div>
                    <div className="font-amiri text-[24px] font-normal">
                        We give you the opportunity to set goals and calculate your budget. With this you can regularly share behind the process.
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center w-[400px]">
                    <div className="w-[64px] h-[64px] mb-8">
                        <img src="https://picsum.photos/64/64" alt=" "/>
                    </div>
                    <div className="font-amiri text-[32px] font-bold mb-8">
                        Generate monthly report 
                    </div>
                    <div className="font-amiri text-[24px] font-normal">
                        You can create your own weekly/monthly reports. This will help you see the full status of your finance.
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center w-[400px]">
                    <div className="w-[64px] h-[64px] mb-8">
                        <img src="https://picsum.photos/64/64" alt=""/>
                    </div>
                    <div className="font-amiri text-[32px] font-bold mb-8">
                        Real-time tracker
                    </div>
                    <div className="font-amiri text-[24px] font-normal">
                        Real-time expense tracking allows you to properly plan your expenses and adapt to changing needs.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Page2;