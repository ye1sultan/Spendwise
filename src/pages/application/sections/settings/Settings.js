import { useState } from "react";

import Title from "../../components/Title";

import MyProfile from "./MyProfile";
import Preferences from "./Preferences";
import Security from "./Security";
import { useTranslation } from "react-i18next";

const Settings = () => {
	const { t, i18n } = useTranslation();

	const [selectedTab, setSelectedTab] = useState("profile");

	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};

	const tabButtons = [
		{ label: t("settings.profile.title"), value: "profile" },
		{ label: t("settings.preferences.title"), value: "preferences" },
		{ label: t("settings.security.title"), value: "security" },
	];

	const renderContent = () => {
		switch (selectedTab) {
			case "profile":
				return <MyProfile />;
			case "preferences":
				return <Preferences />;
			case "security":
				return <Security />;
			default:
				return null;
		}
	};

	return (
		<>
			<Title title={t("sidebar.settings")} />
			<div className={`max-w-full md:max-w-[420px] lg:max-w-[550px] w-full py-[10px] bg-opacity-10 rounded-full flex justify-center items-center self-start relative mb-[50px] 
			${localStorage.getItem("mode") === "Light Mode" ? 'bg-[#381C46]' : 'bg-[#BCB8B8]'}
			${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}`}>
				{tabButtons.map((tab, index) => (
					<button
						key={index}
						className={`z-50 w-[33.33%] h-full rounded-full text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium capitalize`}
						onClick={() => handleTabClick(tab.value)}
					>
						{tab.label}
					</button>
				))}
				<span
					style={{ left: selectedTab === "profile" ? "0%" : selectedTab === "preferences" ? "33.33%" : "66.66%" }}
					className={`${localStorage.getItem("mode") === "Light Mode" ? "-z-10" : "z-10"} w-[33.33%] h-full bg-[#BFA2E5] bg-opacity-80 rounded-[30px] transition-all ease-in-out duration-300 absolute top-0`}
				></span>
			</div>
			{renderContent()}
		</>
	);
};

export default Settings;
