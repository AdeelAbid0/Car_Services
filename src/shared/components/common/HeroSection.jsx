import { useState, useRef, useEffect } from "react";
import SearchIcon from "../../../assets/svg/search.svg?react";
import HeroSendIcon from "../../../assets/svg/hero-send.svg?react";
import LocationIcon from "../../../assets/svg/location.svg?react";
import RouteIcon from "../../../assets/svg/route.svg?react";
import InputText from "../ui/InputText";
import CustomCalendar from "./Calendar";
import { Button } from "antd";
import CommonDrawer from "../ui/Drawer";
export const Services = ({ onSelectService }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-3 items-center md:bg-white rounded-2xl w-full p-3 sm:p-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
        return (
          <div
            className="flex w-full md:flex-col md:bg-transparent bg-primary-hover items-center gap-2 md:border-none border border-primary rounded-xl md:rounded-none p-2 md:p-0 cursor-pointer"
            onClick={() => onSelectService("Oil Change")}
          >
            <div className="flex justify-center items-center w-6 h-6 md:min-w-21 md:min-h-21 rounded-xl md:bg-background md:border border-[#D8D4FF]">
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
export const Locations = ({ onSelectLocation }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center md:bg-white rounded-2xl w-full p-5">
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <div className="hidden md:block w-full">
          <InputText
            placeholder={"Search place"}
            className={" max-w-75 rounded-full!"}
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0 sm:justify-between">
            <div className="flex items-center gap-2 sm:gap-5 w-full sm:w-[49%] bg-white md:bg-background p-1 rounded-2xl">
              <div className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-md md:bg-white bg-primary-hover">
                <LocationIcon />
              </div>
              <div className="flex flex-col md:gap-2 gap-1 w-[49%] bg-white md:bg-background">
                <h1 className="text-foreground text-[13px] font-medium">
                  Nearby
                </h1>
                <p className="text-[10px] font-normal text-muted-foreground">
                  Find What’s around you
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-5 w-full sm:w-[49%] bg-white md:bg-background p-1 rounded-2xl">
              <div className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-md md:bg-white bg-primary-hover">
                <RouteIcon />
              </div>
              <div className="flex flex-col md:gap-2 flex-1 bg-white md:bg-background">
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
                <div
                  className="flex flex-col gap-1  mt-2.5 cursor-pointer"
                  onClick={() => onSelectLocation("F-8 Markaz, Islamabad")}
                >
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
export const SearchDrawer = ({
  showSearchDrawer,
  setShowSearchDrawer,
  selections,
  setSelections
}) => {
  const [activeTab, setActiveTab] = useState(null);

  const searchInputs = [
    {
      id: 1,
      label: "What",
      placeholder: "Search your service",
      key: "what"
    },
    {
      id: 2,
      label: "Where",
      placeholder: "Choose location",
      key: "where"
    },
    {
      id: 3,
      label: "When",
      placeholder: "Select date",
      key: "when"
    }
  ];

  const handleTabClick = id => {
    setActiveTab(activeTab === id ? null : id);
  };

  const handleServiceSelect = serviceName => {
    setSelections({ ...selections, what: serviceName });
    setActiveTab(2);
  };

  const handleLocationSelect = locationName => {
    setSelections({ ...selections, where: locationName });
    setActiveTab(3);
  };

  const handleDateSelect = date => {
    setSelections({ ...selections, when: date });
    setActiveTab(null);
  };

  const handleClearAll = () => {
    setSelections({ ...selections, what: "", where: "", when: "" });
    setActiveTab(null);
  };

  return (
    <>
      <CommonDrawer
        open={showSearchDrawer}
        title={"Search"}
        onClose={() => setShowSearchDrawer(false)}
        width={"100%"}
        footerButtonPrimaryLabel={"Search"}
        footerButtonSecondaryLabel={"Clear All"}
        footerButtonSecondaryClick={handleClearAll}
      >
        <div className="flex flex-col w-full gap-3">
          {searchInputs.map(input => (
            <div key={input.id} className="w-full">
              {/* Tab Header */}
              <div
                onClick={() => handleTabClick(input.id)}
                className="flex gap-2 py-2.5 px-5 rounded-full bg-white border border-black w-full cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs text-muted-foreground">
                  {input.label}
                </span>
                |
                <span className="text-xs text-foreground font-medium">
                  {selections[input.key] || input.placeholder}
                </span>
              </div>

              {/* Tab Content */}
              {activeTab === input.id && (
                <div className="mt-3 mb-3 w-full">
                  {input.id === 1 && (
                    <Services onSelectService={handleServiceSelect} />
                  )}
                  {input.id === 2 && (
                    <Locations onSelectLocation={handleLocationSelect} />
                  )}
                  {input.id === 3 && <CustomCalendar />}
                </div>
              )}
            </div>
          ))}
        </div>
      </CommonDrawer>
    </>
  );
};
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [heroHeight, setHeroHeight] = useState("100vh");
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);
  const [selections, setSelections] = useState({
    what: "",
    where: "",
    when: ""
  });
  const heroRef = useRef(null);

  const searchInputs = [
    {
      id: 1,
      label: "What",
      placeholder: "Search your service",
      key: "what"
    },
    {
      id: 2,
      label: "Where",
      placeholder: "Choose location",
      key: "where"
    },
    {
      id: 3,
      label: "When",
      placeholder: "Select date",
      key: "when"
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
        <div className="block absolute z-10 mb-3 bottom-15 sm:bottom-9 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-4 lg:right-15">
          <HeroSendIcon className="w-20 h-20 xs:w-auto xs:h-auto" />
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
              <h1 className="font-anton max-w-full sm:max-w-fit md:max-w-217.5 text-white text-3xl xs:text-4xl md:text-5xl lg:text-[70px]! 2xl:text-[100px]! font-normal text-center leading-[120%] uppercase">
                All <span className="text-primary">your car services</span>
                <br />
                in one place
              </h1>
            </div>

            {/* Text below heading - Mobile only */}
            <div className="flex md:hidden max-w-62.5 mx-auto justify-center text-center pt-2 sm:pt-4 mb-8 mt-3.5">
              <div className="flex flex-col gap-1 sm:gap-2 items-center w-full">
                <span className="shrink-0  w-full border border-primary"></span>
                <p className="text-[12px] sm:text-sm font-medium text-white leading-4.5">
                  Book trusted car services, compare prices, and manage
                  everything online.
                </p>
              </div>
            </div>

            <div className="flex w-full justify-center px-2 sm:px-4 md:px-0">
              <div
                className="flex justify-center gap-3 items-center md:hidden bg-white rounded-full w-[75%] p-3 mb-6 outline-2 outline-primary outline-offset-1"
                onClick={() => setShowSearchDrawer(true)}
              >
                <SearchIcon className="w-4 h-4 text-foreground" />
                <p className="text-[13px] text-foreground leading-5">
                  Start your search
                </p>
              </div>
              <div
                className="hidden md:flex w-full sm:w-[90%] md:w-[75%] lg:w-[53%] flex-col items-center mt-2 sm:mt-4 md:mt-6 lg:mt-4 2xl:mt-10 md:mb-0 relative z-20 gap-0 max-w-full md:max-w-156"
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
                          {selections[input.key] || input.placeholder}
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
                      <Services
                        onSelectService={serviceName =>
                          setSelections({ ...selections, what: serviceName })
                        }
                      />
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="absolute top-1 left-0 right-0 z-40">
                      <Locations
                        onSelectLocation={locationName =>
                          setSelections({ ...selections, where: locationName })
                        }
                      />
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
      <div className="flex w-full relative">
        <SearchDrawer
          showSearchDrawer={showSearchDrawer}
          setShowSearchDrawer={setShowSearchDrawer}
          selections={selections}
          setSelections={setSelections}
        />
      </div>
    </div>
  );
};

export default HeroSection;
