import { useState } from "react";
import Header from "../Header/Header";
import SearchIcon from "../../assets/svg/search.svg?react";
import HeroSendIcon from "../../assets/svg/hero-send.svg?react";
import { Button } from "antd";
import CustomCalendar from "./Components/Calendar";
import Locations from "./Components/Locations";
import Services from "./Components/Services";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const searchInputs = [
    {
      id: 1,
      label: "What",
      placeholder: "Search your service",
    },
    {
      id: 2,
      label: "Where",
      placeholder: "Choose location",
    },
    {
      id: 3,
      label: "When",
      placeholder: "Select date",
    },
  ];

  return (
    <div className="relative bg-[url('/Images/hero-image.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen h-auto overflow-auto px-18 py-6 relative z-10">
      <div className="absolute h-[calc(100vh-40px)] bottom-0 top-0 left-31 right-31 flex justify-between z-0">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div
            key={index}
            className="w-[11%]  bg-linear-to-b from-transparent via-white/3 to-transparent"
          ></div>
        ))}
      </div>
      <div className="relative z-10">
        <Header />
        <div className="flex w-full justify-center text-center mt-24 ">
          <h1 className="font-anton max-w-217.5 text-white text-[100px] font-normal text-center leading-[120%] uppercase">
            All <span className="text-[#9A85FF]">your car services</span> <br />
            in one place
          </h1>
        </div>

        <div className="flex w-full flex-col items-center mt-10 relative z-20 gap-2">
          <div className="flex items-center bg-white rounded-full p-1 max-w-[53%] relative">
            {searchInputs.map((input, index) => (
              <div key={input.id} className="flex text-center items-center">
                <div
                  onClick={() => setActiveTab(input.id)}
                  className={`px-7 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
                    activeTab === input.id
                      ? "bg-[#F4F2FF]"
                      : "hover:bg-[#F4F2FF]"
                  }`}
                >
                  <p className="text-[#737373] text-xs font-normal">
                    {input.label}
                  </p>
                  <p
                    className={`font-normal text-sm ${
                      activeTab === input.id
                        ? "text-[#9A85FF]"
                        : "text-[#262626]"
                    }`}
                  >
                    {input.placeholder}
                  </p>
                </div>

                {index < searchInputs.length && (
                  <div className="h-6 border-l border-[#F5F5F5] mx-1" />
                )}
              </div>
            ))}
            <Button
              type="primary"
              className="ml-4 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-colors"
            >
              <SearchIcon className="w-6 h-6 text-white shrink-0" />
            </Button>
          </div>
          {activeTab === 1 && <Services />}
          {activeTab === 2 && <Locations />}
          {activeTab === 3 && <CustomCalendar />}
        </div>
      </div>
      <div className="absolute z-10 bottom-10 right-15">
        <HeroSendIcon />
      </div>
    </div>
  );
};

export default HeroSection;
