import { useState, Suspense } from "react";

const Segment = ({ tabs, defaultActiveTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const TabComponent = activeTabData?.component;

  return (
    <div className="w-full">
      <div className="flex w-fit shrink-0 gap-6 border-b border-[#E5E5E5] h-7">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className="cursor-pointer"
          >
            <p
              className={`w-full ${
                activeTab === tab.id
                  ? "text-[#9A85FF] font-medium border-b-2 border-[#9A85FF] pb-2"
                  : "text-[#737373] hover:text-[#262626]"
              }`}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Suspense
          fallback={
            <div className="w-full h-64 flex items-center justify-center">
              Loading content...
            </div>
          }
        >
          {TabComponent}
        </Suspense>
      </div>
    </div>
  );
};

export default Segment;
