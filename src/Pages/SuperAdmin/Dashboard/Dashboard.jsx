import AreaChart from "../../../Components/Charts/AreaChart";
import Button from "../../../ui/Button/Button";
import FilterIcon from "../../../assets/svg/filter.svg?react";
import TotalUser from "../../../assets/svg/total-user.svg?react";
import ActiveCustomer from "../../../assets/svg/active-customer.svg?react";
import PolygonInc from "../../../assets/svg/polygon.svg?react";
import PolygonDec from "../../../assets/svg/polygon-2.svg?react";
import DetailIcon from "../../../assets/svg/eye-2.svg?react";
import EmptyView from "./Components/EmptyView";
import { DataTable } from "../../../ui/DataTable/DataTable";
import { useState } from "react";
import BusinessDetailDrawer from "./Components/BusinessDetailDrawer/BusinessDetailDrawer";
import RejectReasonDrawer from "./Components/RejectReasonDrawer/RejectReasonDrawer";

const Dashboard = () => {
  const [showDetailDrawer, setShowDetailDrawer] = useState(false);
  const [rejectDrawer, setRejectDrawer] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const data = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Business name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Owner",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Service category",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Submitted on",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Location",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Details",
      align: "center",
      key: "details",
      render: (_, record) => (
        <div className="flex items-center justify-center w-full">
          <DetailIcon
            onClick={() => {
              setShowDetailDrawer(true);
              setSelectedBusiness(record);
            }}
          />
        </div>
      ),
    },
  ];
  return (
    // <div className="flex flex-col gap-6 w-full h-full! justify-start items-center">
    <div className="flex w-full justify-center h-full overflow-auto">
      <div className="mt-11 w-full max-w-[72%]">
        {/* Header Section */}
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-2xl font-bold! text-foreground">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <Button
              label={"Filter"}
              type={"primary"}
              prefixIcon={<FilterIcon />}
              className={
                "bg-muted-background! text-foreground! font-medium! border! border-border! rounded-lg! h-9!"
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full mt-6">
          <div className="w-[24.2%] bg-muted-background rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col min-w-65">
            <div className="flex items-center gap-3">
              <div className="flex w-10 h-10 justify-center items-center shrink-0 rounded-lg bg-[#DCFCE7]">
                <TotalUser className="w-5 h-5 text-success" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Total Users
                </h2>
              </div>
            </div>

            <div className="mt-4 flex-1">
              <div className="flex items-end">
                <div className="flex items-center gap-1 mb-2">
                  <PolygonInc className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">+10%</span>
                </div>
                <div className="h-18.75 w-30">
                  <AreaChart color={"#16A34A"} />
                </div>
                <div className="flex w-full justify-end">
                  <h1 className="text-[32px] text-muted-foreground font-semibold!">
                    10
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24.2%] bg-muted-background rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col min-w-65">
            <div className="flex items-center gap-3">
              <div className="flex w-10 h-10 justify-center items-center shrink-0 rounded-lg bg-[#EDE9FA]">
                <ActiveCustomer className="w-5 h-5 text-danger" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Active Customers
                </h2>
              </div>
            </div>

            <div className="mt-4 flex-1">
              <div className="flex items-end">
                <div className="flex items-center gap-1 mb-2">
                  <PolygonDec className="w-4 h-4 text-danger" />
                  <span className="text-sm font-medium text-danger">+10%</span>
                </div>
                <div className="h-18.75 w-30">
                  <AreaChart color="#EF4444" />
                </div>
                <div className="flex w-full justify-end">
                  <h1 className="text-[32px] text-muted-foreground font-semibold!">
                    10
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24.2%] bg-muted-background rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col min-w-65">
            <div className="flex items-center gap-3">
              <div className="flex w-10 h-10 justify-center items-center shrink-0 rounded-lg bg-[#DCFCE7]">
                <TotalUser className="w-5 h-5 text-success" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Total Users
                </h2>
              </div>
            </div>

            <div className="mt-4 flex-1">
              <div className="flex items-end">
                <div className="flex items-center gap-1 mb-2">
                  <PolygonInc className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">+10%</span>
                </div>
                <div className="h-18.75 w-30">
                  <AreaChart color={"#16A34A"} />
                </div>
                <div className="flex w-full justify-end">
                  <h1 className="text-[32px] text-muted-foreground font-semibold!">
                    10
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24.2%] bg-muted-background rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col min-w-65">
            <div className="flex items-center gap-3">
              <div className="flex w-10 h-10 justify-center items-center shrink-0 rounded-lg bg-[#DCFCE7]">
                <TotalUser className="w-5 h-5 text-success" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Total Users
                </h2>
              </div>
            </div>

            <div className="mt-4 flex-1">
              <div className="flex items-end">
                <div className="flex items-center gap-1 mb-2">
                  <PolygonInc className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">+10%</span>
                </div>
                <div className="h-18.75 w-30">
                  <AreaChart color={"#16A34A"} />
                </div>
                <div className="flex w-full justify-end">
                  <h1 className="text-[32px] text-muted-foreground font-semibold!">
                    10
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-6">
          {data?.length >= 1 ? (
            <div className="flex flex-col gap-3 w-full">
              <h1 className="text-[16px] font-semibold! text-foreground">
                New Partner’s Request
              </h1>
              <DataTable data={data} columns={columns} pagination={false} />
            </div>
          ) : (
            <EmptyView />
          )}
        </div>
      </div>
      {showDetailDrawer && (
        <BusinessDetailDrawer
          setShowDetailDrawer={setShowDetailDrawer}
          selectedBusiness={selectedBusiness}
          rejectDrawer={rejectDrawer}
          setRejectDrawer={setRejectDrawer}
        />
      )}
      {rejectDrawer && <RejectReasonDrawer setRejectDrawer={setRejectDrawer} />}
    </div>
  );
};

export default Dashboard;
