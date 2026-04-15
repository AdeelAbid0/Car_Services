import { useState, Suspense } from "react";

const Segment = ({ tabs, defaultActiveTab, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabChange = tabId => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  const TabComponent = activeTabData?.component;

  return (
    <div className="w-full ">
      <div className="flex w-fit shrink-0 gap-6 border-b border-border min-h-7 h-auto mb-4">
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className="cursor-pointer"
          >
            <p
              className={`w-full text-[13px] md:text-sm leading-[100%] ${
                activeTab === tab.id
                  ? "text-primary md:font-medium border-b-2 border-primary pb-2"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>
      <Suspense
        fallback={
          <div className="w-full h-64 flex items-center justify-center mt-4">
            Loading content...
          </div>
        }
      >
        {TabComponent}
      </Suspense>
    </div>
  );
};

export default Segment;
