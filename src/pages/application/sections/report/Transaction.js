import { useTranslation } from "react-i18next";

const Transaction = ({ name, value, icon, color, percentage, type }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className="max-w-[560px] w-full flex flex-col justify-center items-center mb-6">
            <div className="w-full flex justify-between items-center ">
                <div className="flex justify-center items-center">
                    <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full mr-4 relative flex-shrink-0" style={{ backgroundColor: color }} >
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            {icon}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-semibold">
                            {t(`dashboard.pie.category.${name}`)}
                        </div>
                        <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
                            {t("rep.percentage")}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <div className={`font-medium text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] ${type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                        {type === 'expense' ? '- ' + value : value}
                    </div>
                    <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                        {percentage}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transaction;