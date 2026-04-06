import { useState, lazy, Suspense } from "react";
import Segment from "../../../shared/components/common/Segment";
const PersonalInfo = lazy(() => import("../components/PersonalInfo"));
const Overview = lazy(() => import("../components/Overview"));
const SecurityAndLoginSettings = lazy(
  () => import("../components/SecurityAndLoginSettings")
);
const Notifications = lazy(() => import("../components/Notifications"));

const Proflie = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const tabs = [
    {
      id: 1,
      label: "Overview",
      component: <Overview />
    },
    {
      id: 2,
      label: "Personal Info",
      component: <PersonalInfo />
    },
    {
      id: 3,
      label: "Security and login settings",
      component: <SecurityAndLoginSettings />
    },
    {
      id: 4,
      label: "Notifications",
      component: <Notifications />
    }
  ];

  return (
    <div className="flex flex-col w-full items-center h-full overflow-auto py-11 relative z-10 overflow-x-hidden">
      <div className="flex flex-col gap-10 w-[72%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold! text-foreground leading-11">
            Profile Overview
          </h1>
          <p className="text-[16px] font-normal text-muted-foreground leading-6 mb-11">
            Manage your personal details, cars, and service preferences in one
            place.
          </p>
        </div>
        <Segment
          tabs={tabs}
          defaultActiveTab={activeComponent}
          onTabChange={setActiveComponent}
        />
      </div>
    </div>
  );
};

export default Proflie;
