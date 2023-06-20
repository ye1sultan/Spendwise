import { useTranslation } from "react-i18next";
import { BsFlag } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi"
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const NoContent = ({ is }) => {
    const { t, i18n } = useTranslation();

    const getNoContent = () => {
        if (is === 'expense') {
            return (
                <>
                    <div className="block my-4">
                        <FiPieChart className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
                    </div>
                    <div className="text-center mb-6">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 mb-2">
                            {t("dashboard.noContent.expenses.title")}
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A] px-4">
                            {t("dashboard.noContent.expenses.subtitle")}
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE]">
                        {t("dashboard.bieChart.see")}
                    </Link>
                </>
            );
        }

        if (is === 'income') {
            return (
                <>
                    <div className="block my-4">
                        <FiPieChart className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
                    </div>
                    <div className="text-center mb-6">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 mb-2">
                            {t("dashboard.noContent.incomes.title")}
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A] px-4">
                            {t("dashboard.noContent.incomes.subtitle")}
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE]">
                        {t("dashboard.bieChart.see")}
                    </Link>
                </>
            );
        }

        if (is === 'month') {
            return (
                <>
                    <div className="block my-4">
                        <MdSignalCellularAlt className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
                    </div>
                    <div className="text-center mb-6">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 mb-2">
                            {t("dashboard.noContent.monthly.title")}
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A] px-4">
                            {t("dashboard.noContent.monthly.subtitle")}
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE]">
                        {t("dashboard.bieChart.see")}
                    </Link>
                </>
            );
        }

        if (is === 'goal') {
            return (
                <div className="w-full h-full flex flex-col justify-evenly items-center">
                    <BsFlag className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
                    <div className="text-center">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 pb-2">
                            {t("dashboard.noContent.goals.title")}
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A]">
                            {t("dashboard.noContent.goals.subtitle")}
                        </div>
                    </div>
                    <Link
                        to="/application/goals"
                        className="flex justify-center items-center uppercase md:max-w-[270px] max-w-[200px] w-full md:h-14 sm:h-12 h-10 bg-[#9F75D6] bg-opacity-90 rounded-[30px] text-white lg:text-xl md:text-lg sm:text-base text-sm  mx-[5px]">
                        {t("dashboard.noContent.goals.setGoals")}
                    </Link>
                </div>
            );
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            {getNoContent()}
        </div>
    );
}

export default NoContent;