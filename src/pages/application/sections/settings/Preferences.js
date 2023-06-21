import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown } from "react-icons/bi";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

const Preferences = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [langDropDown, setLangDropDown] = useState(false);
    const [modeDropDown, setModeDropDown] = useState(false);

    const [selectedLang, setSelectedLang] = useState(localStorage.getItem("lang"));

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    const handleLangClick = (lang) => {

        if (lang === "English") {
            changeLanguage("en");

            localStorage.setItem("lang", "English");
            setSelectedLang(lang);
            setLangDropDown(false);
        }

        if (lang === "Русский") {
            changeLanguage("ru");

            localStorage.setItem("lang", "Русский");
            setSelectedLang(lang);
            setLangDropDown(false);
        }

        if (lang === "Қазақша") {
            changeLanguage("kz");

            localStorage.setItem("lang", "Қазақша");
            setSelectedLang(lang);
            setLangDropDown(false);
        }
    }

    const [selectedMode, setSelectedMode] = useState(localStorage.getItem("mode"));

    const handleModeClick = (mode) => {
        if (mode === "Light") {
            localStorage.setItem("mode", "Light Mode");

            setSelectedMode("Light Mode");
            setModeDropDown(false);
        }
        if (mode === "Dark") {
            localStorage.setItem("mode", "Dark Mode");

            setSelectedMode("Dark Mode");
            setModeDropDown(false);
        }
    }

    return (
        <div className="self-start max-w-[970px] w-full bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px] flex flex-col sm:flex-row justify-between items-center">
            <form className="flex flex-col h-full w-full justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
                <div className="w-full h-full flex flex-wrap gap-5 flex-col sm:flex-row justify-between items-start mb-[60px]">
                    <div className="max-w-[300px] w-full relative flex flex-col justify-center items-start">
                        <div className="self-start capitalize text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#696969] font-medium mb-2 flex justify-center items-center">
                            <IoLanguageOutline className="text-[15px] lg:text-[25px] mr-2" color="#696969" />
                            {t("settings.preferences.language")}
                        </div>
                        <button
                            onClick={() => setLangDropDown(!langDropDown)}
                            className="self-start w-full flex justify-between items-center text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium border-b-[1px] border-[#000] pl-4 py-2">
                            {selectedLang}
                            <BiChevronDown className="text-[15px] lg:text-[25px]" />
                        </button>
                        {langDropDown && (
                            <div className="flex flex-col absolute top-full mt-2 w-full bg-white border-[1px] border-[#CED4DA] rounded-xl shadow-lg overflow-hidden z-50">
                                <button
                                    onClick={() => handleLangClick('English')}
                                    className="w-full px-4 py-2 text-left text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium hover:bg-gray-100 focus:outline-none">
                                    English
                                </button>
                                <button
                                    onClick={() => handleLangClick('Қазақша')}
                                    className="w-full px-4 py-2 text-left text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium hover:bg-gray-100 focus:outline-none">
                                    Қазақша
                                </button>
                                <button
                                    onClick={() => handleLangClick('Русский')}
                                    className="w-full px-4 py-2 text-left text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium hover:bg-gray-100 focus:outline-none">
                                    Русский
                                </button>
                            </div>)}
                    </div>

                    <div className="max-w-[300px] w-full relative flex flex-col justify-center items-start">
                        <div className="self-start capitalize text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#696969] font-medium mb-2 flex justify-center items-center">
                            <MdOutlineDarkMode className="text-[15px] lg:text-[25px] mr-2" color="#696969" />
                            {t("settings.preferences.appearance.title")}
                        </div>
                        <button
                            onClick={() => setModeDropDown(!modeDropDown)}
                            className="capitalize self-start w-full flex justify-between items-center text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium border-b-[1px] border-[#000] pl-4 py-2">
                            {t(`settings.preferences.appearance.${selectedMode}`)}
                            <BiChevronDown className="text-[15px] lg:text-[25px]" />
                        </button>
                        {modeDropDown && (
                            <div className="flex flex-col absolute top-full mt-2 w-full bg-white border-[1px] border-[#CED4DA] rounded-xl shadow-lg overflow-hidden z-50">
                                <button
                                    onClick={() => handleModeClick('Light')}
                                    className="capitalize w-full px-4 py-2 text-left text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium hover:bg-gray-100 focus:outline-none">
                                    {t("settings.preferences.appearance.Light Mode")}
                                </button>
                                <button
                                    onClick={() => handleModeClick('Dark')}
                                    className="capitalize w-full px-4 py-2 text-left text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium hover:bg-gray-100 focus:outline-none">
                                    {t("settings.preferences.appearance.Dark Mode")}
                                </button>
                            </div>)}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Preferences;