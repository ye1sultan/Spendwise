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
      <Title title={"Settings"} />
      <div className="w-[555px] h-[50px] bg-[#381C46] bg-opacity-10 rounded-[30px] flex justify-center items-center self-start relative mb-[90px]">
        {tabButtons.map((tab, index) => (
          <button
            key={index}
            className={`w-[33.33%] h-full rounded-[30px] text-[22px] font-medium`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
        <span
          style={{ left: selectedTab === "profile" ? "0%" : selectedTab === "preferences" ? "33.33%" : "66.66%" }}
          className="w-[33.33%] h-full bg-[#9F75D6] bg-opacity-80 rounded-[30px] transition-all ease-in-out duration-300 absolute -z-10 top-0"
        ></span>

      </div>
      {renderContent()}
    </>
  );
};

export default Settings;
