import { useState, lazy, Suspense } from "react";
import Segment from "../../../Components/Segment/Segment";

const PersonalInfo = lazy(() => import("./Components/PersonalInfo"));
const BusinessInfo = lazy(() => import("./Components/BusinessInfo"));
const Services = lazy(() => import("./Components/Services"));
const Gallery = lazy(() => import("./Components/Gallery"));
const AvailabilityStatus = lazy(
  () => import("./Components/AvailabilityStatus"),
);
const AccountsAndSettings = lazy(
  () => import("./Components/AccountsAndSettings"),
);

const Profile_Partner = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "Personal Info",
      component: <PersonalInfo />,
    },
    {
      id: 2,
      label: "Business Info",
      component: <BusinessInfo />,
    },
    {
      id: 3,
      label: "Services",
      component: <Services />,
    },
    {
      id: 4,
      label: "Gallery",
      component: <Gallery />,
    },
    {
      id: 5,
      label: "Availability Status",
      component: <AvailabilityStatus />,
    },
    {
      id: 6,
      label: "Accounts and Settings",
      component: <AccountsAndSettings />,
    },
  ];

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
        <Segment
          tabs={tabs}
          defaultActiveTab={activeComponent}
          onTabChange={setActiveComponent}
        />
      </div>
    </div>
  );
};

export default Profile_Partner;
