import { useState, lazy, Suspense } from "react";

const PersonalInfo = lazy(() => import("./Components/PersonalInfo"));
const MyCars = lazy(() => import("./Components/MyCars"));
const Address = lazy(() => import("./Components/Address"));
const PaymentMethod = lazy(() => import("./Components/PaymentMethod"));
const Settings = lazy(() => import("./Components/Settings"));

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Personal Info",
      Component: PersonalInfo,
    },
    {
      id: 2,
      title: "My Cars",
      Component: MyCars,
    },
    {
      id: 3,
      title: "Saved Address",
      Component: Address,
    },
    {
      id: 4,
      title: "Saved Payment Methods",
      Component: PaymentMethod,
    },
    {
      id: 5,
      title: "Accounts and Settings",
      Component: Settings,
    },
  ];

  const ActiveComponent = tabs.find(
    (item) => item.id === selectedTab,
  )?.Component;

  return (
    <div className="flex flex-col w-full items-center h-full overflow-auto py-11 relative z-10 overflow-x-hidden">
      <div className="flex flex-col gap-10 w-[72%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold! text-[#262626] leading-11">
            Profile Overview
          </h1>
          <p className="text-[16px] font-normal text-[#737373] leading-6 mb-11">
            Manage your personal details, cars, and service preferences in one
            place.
          </p>
        </div>
        <div className="flex w-full gap-6 border-b border-[#E5E5E5]">
          {tabs.map((item) => (
            <div
              key={item.id}
              className={`pb-2 cursor-pointer ${
                selectedTab === item.id
                  ? "border-b-[1.5px] border-[#9A85FF]"
                  : ""
              }`}
              onClick={() => setSelectedTab(item.id)}
            >
              <h2
                className={`text-sm font-medium ${
                  selectedTab === item.id ? "text-[#9A85FF]" : "text-[#737373]"
                }`}
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        <Suspense
          fallback={
            <div className="flex w-full h-full justify-center items-center">
              Loading...
            </div>
          }
        >
          {ActiveComponent && <ActiveComponent />}
        </Suspense>
      </div>
    </div>
  );
};

export default Profile;
