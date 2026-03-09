import { useState, lazy, Suspense } from "react";
import Segment from "../../../Components/Segment/Segment";
const Payout = lazy(() => import("./Components/Payout"));
const Overview = lazy(() => import("./Components/Overview"));

const Payments_Partner = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "Overview",
      component: <Overview />,
    },
    {
      id: 2,
      label: "Payout",
      component: <Payout />,
    },
  ];

  return (
    <div className="flex flex-col w-full items-center h-full overflow-auto py-11 relative z-10 overflow-x-hidden">
      <div className="flex flex-col gap-10 w-[72%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold! text-foreground leading-11">
            Payments and Payouts
          </h1>
          <p className="text-[16px] font-normal text-muted-foreground leading-6 mb-11">
            Track your earnings, manage payout methods, and view transaction
            history in one place.
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

export default Payments_Partner;
