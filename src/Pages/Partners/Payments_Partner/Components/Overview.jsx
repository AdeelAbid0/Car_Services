import AccountDetailCard from "../../../../Components/AccountDetailCard/AccountDetailCard";
import CardPrimary from "../../../../assets/svg/card-primary.svg?react";
import CardSecondary from "../../../../assets/svg/card-secondary.svg?react";
import WalletIcon from "../../../../assets/svg/wallet-minus.svg?react";
import EyeIcon from "../../../../assets/svg/eye-2.svg?react";
import FilterIcon from "../../../../assets/svg/filter.svg?react";
import DummyIcon from "../../../../assets/svg/dummy.svg?react";
import Hashtag from "../../../../assets/svg/hashtag.svg?react";
import Calendar from "../../../../assets/svg/calendar.svg?react";
import Timer from "../../../../assets/svg/timer.svg?react";
import Service from "../../../../assets/svg/service.svg?react";
import Money from "../../../../assets/svg/money.svg?react";
import Clock from "../../../../assets/svg/clock.svg?react";
import User from "../../../../assets/svg/user.svg?react";
import Mail from "../../../../assets/svg/mail.svg?react";
import Call from "../../../../assets/svg/call-filled.svg?react";
import Location from "../../../../assets/svg/location-2.svg?react";
import Button from "../../../../ui/Button/Button";
import { Table } from "antd";
import { useState } from "react";
import CommonDrawer from "../../../../ui/Drawer/Drawer";

const Overview = () => {
  const [openDetailDrawer, setOpenDetailDrawer] = useState(false);
  const dataSource = [
    {
      id: 1,
      invoiceId: "PT-12345",
      service: "Change Oil",
      customer: "Meer Hadi",
      date: "14 july",
      netAmount: "PKR 4,000",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceId",
      key: "invoiceId",
      align: "center",
    },
    {
      title: "Services",
      dataIndex: "service",
      key: "service",
      align: "center",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Net Amount",
      dataIndex: "netAmount",
      key: "netAmount",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (text) => (
        <div className="flex justify-center items-center">
          <span className="text-[#2E82FF] text-xs font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: "Summary",
      key: "summary",
      align: "center",
      render: (record) => (
        <div
          className="cursor-pointer flex justify-center items-center"
          onClick={() => {
            setOpenDetailDrawer((prev) => !prev);
          }}
        >
          <EyeIcon />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-5 ">
        <AccountDetailCard icon={<DummyIcon />} image={<CardPrimary />}>
          <div className="flex flex-col gap-2">
            <label className="font-medium! text-sm text-[#737373]">
              Available balance
            </label>
            <h1 className="text-2xl font-bold! text-[#262626]">73,500</h1>
            <Button
              type={"primary"}
              label="Withdraw"
              prefixIcon={<WalletIcon />}
              className={"h-8!"}
            />
          </div>
        </AccountDetailCard>
        <AccountDetailCard icon={<DummyIcon />} image={<CardSecondary />}>
          <div className="flex flex-col gap-2">
            <label className="font-medium! text-sm text-[#737373]">UBL</label>
            <h3 className="text-[#262626] font-medium! text-sm!">Adeel Abid</h3>
            <div className="flex items-center gap-3 text-[#737373] font-medium! text-sm!">
              <label>4242 4242 4242 4242</label>
              <span className="w-1 h-1 rounded-full bg-[#737373]"></span>
              <p>Expiry: 16/29</p>
            </div>
            <div>
              <span className="text-[#9A85FF] font-medium! text-sm! hover:text-[#9A85FF]/80 cursor-pointer">
                Change
              </span>
            </div>
          </div>
        </AccountDetailCard>
      </div>
      <div className="flex flex-col gap-4 w-full mt-4">
        <div className="flex w-full justify-between items-center ">
          <h1 className="text-[#262626] font-semibold! text-[16px]!">
            Invoices
          </h1>
          <div className="flex gap-2.5 borde border-[#E5E5E5] bg-[#FAFAFA] rounded-lg px-2.5 py-2 cursor-pointer hover:bg-white">
            <FilterIcon />
            <p>Filters</p>
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          className="w-full! [&_.ant-table-thead>tr>th]:text-center [&_.ant-table-tbody>tr>td]:text-center"
        />
      </div>
      <CommonDrawer
        open={openDetailDrawer}
        onClose={() => setOpenDetailDrawer(false)}
        title="Summary"
        footerButtonPrimaryLabel="Save PDF"
        footerButtonSecondaryLabel="Delete"
        footerButtonSecondaryType={"danger"}
      >
        <div>
          <p>Invoice</p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Hashtag />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                INV-2026-00485
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Calendar />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                12 Jan 2026
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Timer />
              </div>
              <h1 className="text-[#22C55E] text-xs! font-medium!">Paid</h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>Services</p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Service />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                Brake inspection and repair
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Calendar />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                12 Jan 2026
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Clock />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">4:30 PM</h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Money />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">PKR 4000</h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>Customer details</p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <User />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">Ali Raza</h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Mail />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                aliraza@gmail.com
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Call />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                03360999054
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Location />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                G-8 Markaz, Islamabad
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>Payment information</p>
          <div className="flex flex-col gap-1.5 mt-2.5">
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Money />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">Online </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Hashtag />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                TXN-986547
              </h1>
            </div>
            <div className="flex w-full bg-[#FAFAFA] rounded-lg  gap-4 items-center p-0.5 h-10! ">
              <div className="flex w-9 h-9 shrink-0 justify-center items-center bg-[#F5F5F5] rounded-lg">
                <Calendar />
              </div>
              <h1 className="text-[#262626] text-xs! font-medium!">
                11 Jan 2026
              </h1>
            </div>
          </div>
        </div>
      </CommonDrawer>
    </div>
  );
};

export default Overview;
