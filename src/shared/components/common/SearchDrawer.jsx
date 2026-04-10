import { useState } from "react";
import CommonDrawer from "../ui/Drawer";
import { Locations, Services } from "./HeroSection";
import CustomCalendar from "./Calendar";

const SearchDrawer = ({ showSearchDrawer, setShowSearchDrawer }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [selections, setSelections] = useState({
    what: "",
    where: "",
    when: ""
  });

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
                className="flex gap-2 py-[10px] px-[20px] rounded-full bg-white border border-black w-full cursor-pointer hover:bg-gray-50 transition-colors"
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
                  {input.id === 3 && (
                    <CustomCalendar onSelectDate={handleDateSelect} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </CommonDrawer>
    </>
  );
};

export default SearchDrawer;
