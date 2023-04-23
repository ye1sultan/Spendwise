import NoContent from "./NoContent.js";

const BieCharts = (props) => {
    let content = props.content;
    let title = props.title;

    const initialData = {
        "2023-02": {
            expenses: [
                {
                    name: "Health",
                    value: 30980,
                    percentage: "50.00%",
                    color: "#9CC741",
                    icon: 'earth',
                },
                {
                    name: "Clothing",
                    value: 20030,
                    percentage: "50.00%",
                    color: "#D942A6",
                    icon: 'car',
                },
                {
                    name: "Games",
                    value: 15080,
                    percentage: "50.00%",
                    color: "#F67730",
                    icon: 'cart',
                },
            ],
            incomes: 123456,
        },
    };

    return (
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            <div className="flex flex-col justify-between items-center w-[723px] h-[328px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white pt-[25px] px-[15px]">
                {
                    (() => {
                        if (title === 'Expenses by category') {
                            if (content) {
                                return (
                                    <div className="max-w-[350px] max-h-[350px]">
                                        Some Content
                                    </div>
                                );
                            } else {
                                return <NoContent is={'expense'} />;
                            }
                        }
                        if (title === 'Incomes by category') {
                            if (content) {
                                return (
                                    <div className="max-w-[350px] max-h-[350px]">
                                        Some Content
                                    </div>
                                );
                            } else {
                                return <NoContent is={'income'} />;
                            }
                        }
                        if (title === 'Monthly balance') {
                            if (content) {
                                return (
                                    <div className="max-w-[350px] max-h-[350px]">
                                        Some Content
                                    </div>
                                );
                            } else {
                                return <NoContent is={'month'} />;
                            }
                        }
                        if (title === 'Goals') {
                            if (content) {
                                return (
                                    <div className="max-w-[350px] max-h-[350px]">
                                        Some Content
                                    </div>
                                );
                            } else {
                                return <NoContent is={'goal'} />;
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default BieCharts;