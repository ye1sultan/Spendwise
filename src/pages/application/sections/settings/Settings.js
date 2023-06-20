import { useState } from "react";

import Title from "../../components/Title";

import MyProfile from "./MyProfile";
import Preferences from "./Preferences";
import Security from "./Security";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState("profile");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const tabButtons = [
    { label: "My Profile", value: "profile" },
    { label: "Preferences", value: "preferences" },
    { label: "Security", value: "security" },
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
      {/* max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[340px] */}
      <Title title={"Settings"} />
      <div className="max-w-[330px] md:max-w-[390px] lg:max-w-[510px] w-full h-[30px] sm:h-[40px] md:h-[50px] bg-opacity-10 rounded-full flex justify-center items-center self-start relative mb-[50px] bg-[#381C46]">
        {tabButtons.map((tab, index) => (
          <button
            key={index}
            className={`w-[33.33%] h-full rounded-full text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
        <span style={{ left: selectedTab === "profile" ? "0%" : selectedTab === "preferences" ? "33.33%" : "66.66%" }} className="w-[33.33%] h-full bg-[#BFA2E5] bg-opacity-80 rounded-[30px] transition-all ease-in-out duration-300 absolute -z-10 top-0"
        ></span>
      </div>
      {renderContent()}
    </>
  );
};

export default Settings;
