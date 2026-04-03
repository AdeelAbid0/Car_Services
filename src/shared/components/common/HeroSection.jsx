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
    <div className="flex flex-wrap gap-3 items-center bg-white rounded-2xl w-[full] p-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
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
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-5 w-[49%] bg-background p-1 rounded-2xl">
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
            <div className="flex items-center gap-5 w-[49%] bg-background p-1 rounded-2xl">
              <div className="flex justify-center items-center w-14 h-14 rounded-md bg-white">
                <RouteIcon />
              </div>
              <div className="flex flex-col gap-2 w-[49%] bg-background">
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
            {[1, 2, 3].map((item) => {
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

        <div className="absolute inset-0 left-31 right-31 flex justify-between z-10">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              key={index}
              className="w-[11%] h-full bg-linear-to-b from-transparent via-white/3 to-transparent"
            ></div>
          ))}
        </div>
        <div className="absolute z-10 bottom-9 right-15">
          <HeroSendIcon />
        </div>
        <div className="absolute z-10 bottom-22 left-15 w-[24%]">
          <div className="flex gap-3 items-center">
            <span className="h-8 border-[3px] border-primary"></span>
            <p className="text-[14px] font-medium text-white leading-5">
              Book trusted car services, compare prices, and manage everything
              online.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 pt-4">
        <div className="relative w-full h-auto px-18 py-6 z-10">
          <div className="relative z-10">
            <div className="flex w-full justify-center text-center">
              <h1 className="font-anton max-w-217.5 text-white text-[70px]! 2xl:text-[100px]! font-normal text-center leading-[120%] uppercase">
                All <span className="text-primary">your car services</span>
                <br />
                in one place
              </h1>
            </div>

            <div className="flex w-full justify-center">
              <div
                className="flex w-[53%] flex-col items-center mt-4 2xl:mt-10 relative z-20 gap-0 max-w-156"
                onMouseLeave={() => {
                  setActiveTab(null);
                }}
              >
                <div className="flex items-center bg-white rounded-full p-1 w-full relative z-30">
                  {searchInputs.map((input, index) => (
                    <div
                      key={input.id}
                      className="flex text-center items-center"
                      onMouseEnter={() => setActiveTab(input.id)}
                    >
                      <div
                        className={`shrink-0 px-10 py-2 rounded-full transition-colors duration-300 cursor-pointer ${
                          activeTab === input.id
                            ? "bg-background"
                            : "hover:bg-background"
                        }`}
                      >
                        <p className="text-muted-foreground text-xs font-normal">
                          {input.label}
                        </p>
                        <p
                          className={`font-normal text-sm ${
                            activeTab === input.id
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                        >
                          {input.placeholder}
                        </p>
                      </div>
                      {index < searchInputs.length && (
                        <div className="h-6 border-l border-muted-background mx-1" />
                      )}
                    </div>
                  ))}
                  <Button
                    type="primary"
                    className="ml-4 w-12 h-12 flex items-center justify-center rounded-full! cursor-pointer transition-colors"
                  >
                    <SearchIcon className="w-6 h-6 text-white shrink-0" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
