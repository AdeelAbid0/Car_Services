import { useState, useRef, useEffect } from "react";
import SearchIcon from "../../../assets/svg/search.svg?react";
import HeroSendIcon from "../../../assets/svg/hero-send.svg?react";
import LocationIcon from "../../../assets/svg/location.svg?react";
import RouteIcon from "../../../assets/svg/route.svg?react";
import InputText from "../ui/InputText";
import CustomCalendar from "./Calendar";
import { Button } from "antd";
export const Services = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 items-center bg-white rounded-2xl w-full p-3 sm:p-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
        return (
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center min-w-21 min-h-21 rounded-xl bg-background border border-[#D8D4FF]">
              <LocationIcon />
            </div>
            <h1 className="text-muted-foreground text-xs font-normal">
              oil change
            </h1>
          </div>
        );
      })}
    </div>
  );
};
export const Locations = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center bg-white rounded-2xl w-full p-5">
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <InputText
          placeholder={"Search place"}
          className={"max-w-75 rounded-full!"}
        />
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0 sm:justify-between">
            <div className="flex items-center gap-2 sm:gap-5 w-full sm:w-[49%] bg-background p-1 rounded-2xl">
              <div className="flex justify-center items-center w-14 h-14 rounded-md bg-white">
                <LocationIcon />
              </div>
              <div className="flex flex-col gap-2 w-[49%] bg-background">
                <h1 className="text-foreground text-[13px] font-medium">
                  Nearby
                </h1>
                <p className="text-[10px] font-normal text-muted-foreground">
                  Find What’s around you
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-5 w-full sm:w-[49%] bg-background p-1 rounded-2xl">
              <div className="flex justify-center items-center w-14 h-14 rounded-md bg-white">
                <RouteIcon />
              </div>
              <div className="flex flex-col gap-2 flex-1 bg-background">
                <h1 className="text-foreground text-[13px] font-medium">
                  Google Maps
                </h1>
                <p className="text-[10px] font-normal text-muted-foreground">
                  Choose on maps
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-muted-foreground text-[10px] font-normal">
              Suggestions
            </label>
            {[1, 2, 3].map(item => {
              return (
                <div className="flex flex-col gap-1  mt-2.5">
                  <h1 className="text-[13px] font-normal text-foreground">
                    F-8 Markaz, Islamabad
                  </h1>
                  <p className="font-normal text-muted-foreground text-[10px]">
                    Mehmand Car Garage
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [heroHeight, setHeroHeight] = useState("100vh");
  const heroRef = useRef(null);

  const searchInputs = [
    {
      id: 1,
      label: "What",
      placeholder: "Search your service"
    },
    {
      id: 2,
      label: "Where",
      placeholder: "Choose location"
    },
    {
      id: 3,
      label: "When",
      placeholder: "Select date"
    }
  ];

  useEffect(() => {
    if (activeTab === 3) {
      setHeroHeight("auto");
      setTimeout(() => {
        if (heroRef.current) {
          const totalHeight = heroRef.current.scrollHeight;
          setHeroHeight(`${totalHeight}px`);
        }
      }, 100);
    } else {
      setHeroHeight("100vh");
    }
  }, [activeTab]);

  return (
    <div className="relative" ref={heroRef}>
      <div className="fixed inset-0 z-0">
        <img
          src="/Images/hero-image.png"
          alt=""
          className="w-full h-screen object-cover"
          id="hero-image"
        />

        <div className="hidden lg:flex absolute inset-0 left-31 right-31 justify-between z-10">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              key={index}
              className="w-[11%] h-full bg-linear-to-b from-transparent via-white/3 to-transparent"
            ></div>
          ))}
        </div>
        <div className="hidden md:block absolute z-10 bottom-9 right-4 lg:right-15">
          <HeroSendIcon className="w-auto h-auto" />
        </div>
        <div className="hidden md:block absolute z-10 bottom-22 left-4 lg:left-15 w-[35%] lg:w-[24%]">
          <div className="flex gap-3 items-start">
            <span className="shrink-0 h-8 border-[3px] border-primary"></span>
            <p className="text-[14px] font-medium text-white leading-5">
              Book trusted car services, compare prices, and manage everything
              online.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 pt-2 sm:pt-4">
        <div className="relative w-full h-auto px-3 sm:px-8 md:px-12 lg:px-18 py-3 sm:py-6 z-10">
          <div className="relative z-10">
            <div className="flex w-full justify-center text-center">
              <h1 className="font-anton max-w-full sm:max-w-fit md:max-w-217.5 text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[70px]! 2xl:text-[100px]! font-normal text-center leading-[120%] uppercase">
                All <span className="text-primary">your car services</span>
                <br />
                in one place
              </h1>
            </div>

            {/* Text below heading - Mobile only */}
            <div className="flex md:hidden w-full justify-center text-center pt-3 sm:pt-4 mb-8">
              <div className="flex flex-col gap-2 sm:gap-3 items-center max-w-xs sm:max-w-sm">
                <span className="shrink-0  w-full border-[1px] border-primary mt-1"></span>
                <p className="text-xs sm:text-sm font-medium text-white leading-4 sm:leading-5">
                  Book trusted car services, compare prices, and manage
                  everything online.
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center px-2 sm:px-4 md:px-0">
              <div
                className="flex w-full sm:w-[90%] md:w-[75%] lg:w-[53%] flex-col items-center mt-2 sm:mt-4 md:mt-6 lg:mt-4 2xl:mt-10 md:mb-0 relative z-20 gap-0 max-w-full md:max-w-156"
                onMouseLeave={() => {
                  setActiveTab(null);
                }}
              >
                <div className="flex flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-1.5 sm:p-1 w-full relative z-30 gap-1 sm:gap-0">
                  {searchInputs.map((input, index) => (
                    <div
                      key={input.id}
                      className="flex-1 sm:flex-none text-center items-center flex sm:items-center"
                      onMouseEnter={() => setActiveTab(input.id)}
                    >
                      <div
                        className={`shrink-0 px-2 sm:px-10 py-1.5 sm:py-2 rounded-xl sm:rounded-full transition-colors duration-300 cursor-pointer w-full ${
                          activeTab === input.id
                            ? "bg-background"
                            : "hover:bg-background"
                        }`}
                      >
                        <p className="text-muted-foreground text-[9px] sm:text-xs font-normal">
                          {input.label}
                        </p>
                        <p
                          className={`font-normal text-[10px] sm:text-sm ${
                            activeTab === input.id
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                        >
                          {input.placeholder}
                        </p>
                      </div>
                      {index < searchInputs.length && (
                        <div className="hidden sm:block h-6 border-l border-muted-background mx-1" />
                      )}
                    </div>
                  ))}
                  <Button
                    type="primary"
                    className="w-8 h-8 sm:w-auto sm:h-12 sm:ml-4 flex items-center justify-center rounded-lg sm:rounded-full! cursor-pointer transition-colors shrink-0"
                  >
                    <SearchIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white shrink-0" />
                  </Button>
                </div>

                {/* Dropdown Content */}
                <div className="relative w-full">
                  {activeTab === 1 && (
                    <div className="absolute top-1 left-0 right-0 z-40">
                      <Services />
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="absolute top-1 left-0 right-0 z-40">
                      <Locations />
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div className="absolute top-1 left-0 right-0 z-40">
                      <CustomCalendar />
                    </div>
                  )}
                </div>

                {/* Send Icon below search - Mobile only */}
                <div className="flex md:hidden w-full z-10 bottom-9 justify-center items-center pt-6 pb-2">
                  <HeroSendIcon className="w-19 h-19 sm:w-auto sm:h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
