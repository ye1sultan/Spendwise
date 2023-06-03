import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

const Preferences = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [langDropDown, setLangDropDown] = useState(false);
    const [modeDropDown, setModeDropDown] = useState(false);

    const [selectedLang, setSelectedLang] = useState('English');

    const handleLangClick = (lang) => {
        setSelectedLang(lang);
        setLangDropDown(false);
    }

    const [selectedMode, setSelectedMode] = useState('Light Mode');

    const handleModeClick = (mode) => {
        setSelectedMode(mode);
        setModeDropDown(false);
    }

    return (
        <div className="self-start w-[80%] h-[485px] bg-white rounded-[30px] py-[65px] px-[55px]">
            <form className="flex flex-col h-full w-full justify-center items-center" onSubmit={handleSubmit}>
                <div className="w-full h-full flex justify-between items-start">
                    <div className="relative flex flex-col justify-center items-start w-[475px]">
                        <div className="self-start text-[24px] text-[#696969] font-medium mb-2">Language</div>
                        <button
                            onClick={() => setLangDropDown(true)}
                            className="w-full flex justify-between items-center text-[24px] font-medium border-b-[1px] border-[#000] pl-4 py-2">
                            {selectedLang}
                            <BiChevronDown size={25} />
                        </button>
                        <div
                            className={`absolute top-full mt-2 w-[220px] bg-white border-[1px] border-[#CED4DA] rounded-xl shadow-lg overflow-hidden
                                        ${langDropDown ? 'flex flex-col' : 'hidden'}`}
                            onMouseEnter={() => setLangDropDown(true)}
                            onMouseLeave={() => setLangDropDown(false)}>
                            <button
                                onClick={() => handleLangClick('English')}
                                className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                                English
                            </button>
                            <button
                                onClick={() => handleLangClick('Kazakh')}
                                className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                                Kazakh
                            </button>
                            <button
                                onClick={() => handleLangClick('Russian')}
                                className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                                Russian
                            </button>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-center items-start w-[475px]">
                        <div className="self-start text-[24px] text-[#696969] font-medium mb-2">Appearence</div>
                        <button
                            onClick={() => setModeDropDown(true)}
                            className="w-full flex justify-between items-center text-[24px] font-medium border-b-[1px] border-[#000] pl-4 py-2">
                            {selectedMode}
                            <BiChevronDown size={25} />
                        </button>
                        <div
                            className={`absolute top-full mt-2 w-[220px] bg-white border-[1px] border-[#CED4DA] rounded-xl shadow-lg overflow-hidden
                                        ${modeDropDown ? 'flex flex-col' : 'hidden'}`}
                            onMouseEnter={() => setModeDropDown(true)}
                            onMouseLeave={() => setModeDropDown(false)}>
                            <button
                                onClick={() => handleModeClick('Light Mode')}
                                className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                                Light Mode
                            </button>
                            <button
                                onClick={() => handleModeClick('Dark Mode')}
                                className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                                Dark Mode
                            </button>
                        </div>
                    </div>
                </div>
                <input className="uppercase w-[220px] h-[45px] rounded-[30px] text-white text-[18px] font-medium bg-[#9F75D6] bg-opacity-90" type="submit" value="Save changes" />
            </form>
        </div>
    );
}

export default Preferences;