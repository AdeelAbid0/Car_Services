import { useState, lazy, Suspense } from "react";
import ArrowRightIcon from "../../../assets/svg/arrow-right.svg?react";
import Segment from "../../../components/Segment";

// Lazy load components
const NewRequests = lazy(() => import("./Components/NewRequests"));
const ActiveJobs = lazy(() => import("./Components/ActiveJobs"));
const Ratings = lazy(() => import("./Components/Ratings"));

const PartnerDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const tabs = [
    {
      id: 1,
      label: "New requests",
      component: <NewRequests />,
    },
    {
      id: 2,
      label: "Active jobs",
      component: <ActiveJobs />,
    },
    {
      id: 3,
      label: "Ratings",
      component: <Ratings />,
    },
  ];
  return (
    <div className="flex w-full justify-center items-start">
      <div className="mt-11 w-full max-w-[72%]">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-2xl font-bold! text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <div className="flex items-center px-4 py-1.75 gap-2 bg-foreground rounded-lg cursor-pointer hover:bg-foreground/80 transition-colors">
              <p className="text-white font-normal text-sm">PKR 23,600</p>
              <span className="h-3 border border-foreground/80 "></span>
              <p className="text-white font-normal text-sm">Earnings</p>
              <ArrowRightIcon className="text-white" />
            </div>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="w-full h-96 flex items-center justify-center">
              Loading dashboard...
            </div>
          }
        >
          <div className="w-full my-6">
            <Segment
              tabs={tabs}
              defaultActiveTab={activeComponent}
              onTabChange={setActiveComponent}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default PartnerDashboard;
