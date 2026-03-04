import { useState } from "react";
import ArrowRightIcon from "../../../assets/svg/arrow-right.svg?react";
import SearchIcon from "../../../assets/svg/search-normal.svg?react";
import PlusIcon from "../../../assets/svg/add.svg?react";
import CardImage from "../../../assets/Images/cards.svg?react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import InputText from "../../../ui/InputText/InputText";
import Button from "../../../ui/Button/Button";

const My_Wallet = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const paymentsData = {
    all: [
      {
        id: 1,
        name: "QuickLube",
        date: "20 Apr 2022, 06:55 PM",
        amount: "PKR 4,500",
        icon: <CardImage className="w-full h-full object-cover rounded-xl" />,
      },
      {
        id: 2,
        name: "AutoCare Workshop",
        date: "15 Apr 2022, 02:30 PM",
        amount: "PKR 2,800",
        icon: <CardImage className="w-full h-full object-cover rounded-xl" />,
      },
    ],
    regular: [
      {
        id: 1,
        name: "QuickLube",
        date: "20 Apr 2022, 06:55 PM",
        amount: "PKR 4,500",
        icon: <CardImage className="w-full h-full object-cover rounded-xl" />,
      },
    ],
  };

  const currentData = paymentsData[activeTab] || [];

  return (
    <div className="flex w-full justify-center">
      <div className="mt-11 w-full max-w-[72%]">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-2xl font-bold! text-[#262626]">My Wallet</h1>
            <p className="text-[16px] text-[#737373] font-normal">
              Verified workshops and providers ready to care for your car.{" "}
            </p>
          </div>
          <div
            className="flex items-center px-4 py-1.75 gap-2 bg-[#262626] rounded-lg cursor-pointer hover:bg-[#404040] transition-colors"
            onClick={() => {
              navigate(ROUTES.BOOKINGS);
            }}
          >
            <p className="flex gap-2 items-center text-white font-normal text-sm">
              My Bookings <ArrowRightIcon className="text-white" />
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between mt-8">
          <div className="flex flex-col gap-4 w-[30%]">
            <CardImage />
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-2 items-center w-full bg-white rounded-[10px] py-6">
                <div className="flex flex-col gap-1">
                  <p className="text-[#737373] font-medium! text-sm!">
                    Your Balance
                  </p>
                  <h1 className="text-[#262626] font-semibold! text-[20px]">
                    PKR 524.00
                  </h1>
                </div>
                <div className="flex w-full gap-5 justify-center">
                  <p className="text-xs! text-[#737373] font-medium!">
                    Currency:{" "}
                    <span className="font-semibold! text-[#262626] text-sm!">
                      PKR
                    </span>
                  </p>
                  <p className="text-xs! text-[#737373] font-medium!">
                    Staus:{" "}
                    <span className="font-semibold! text-[#9A85FF] text-sm!">
                      Active
                    </span>
                  </p>
                </div>
              </div>
              <Button
                type="default"
                label={" Add New Card"}
                prefixIcon={<PlusIcon />}
                className={"bg-white! rounded-lg!"}
                onClick={() => {
                  navigate(ROUTES.PAYMENT);
                }}
              />
            </div>
          </div>
          <div className="w-[60%]">
            <h1 className="text-2xl font-bold! text-[#262626]">
              Payment History
            </h1>

            <div className="w-full mt-6">
              <div className="flex w-full justify-between">
                <div className="flex gap-8">
                  <button
                    className={`relative pb-4 cursor-pointer text-[16px] font-medium transition-colors ${
                      activeTab === "all"
                        ? "text-[#9A85FF]!"
                        : "text-[#737373]! hover:text-[#262626]!"
                    }`}
                    onClick={() => setActiveTab("all")}
                  >
                    All Payments
                    {activeTab === "all" && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9A85FF] z-10"></div>
                    )}
                  </button>
                  <button
                    className={`relative pb-4 cursor-pointer text-[16px] font-medium transition-colors ${
                      activeTab === "regular"
                        ? "text-[#9A85FF]!"
                        : "text-[#737373]! hover:text-[#262626]!"
                    }`}
                    onClick={() => setActiveTab("regular")}
                  >
                    Regular Payments
                    {activeTab === "regular" && (
                      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9A85FF] z-10"></div>
                    )}
                  </button>
                </div>
                <div>
                  <InputText
                    prefixIcon={<SearchIcon className="w-4! h-4!" />}
                    placeholder="Search"
                    className={"h-8! rounded-lg! placeholder:text-[8px]!"}
                  />
                </div>
              </div>
              <div className="border-b border-[#E5E5E5]"></div>
            </div>

            <div className="py-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-[14px] font-medium text-[#737373] pb-3">
                    Today
                  </h3>
                  <div className="flex flex-col gap-2">
                    {currentData
                      .filter((item) => item.date.includes("Apr 2022"))
                      .map((item) => (
                        <div
                          key={item.id}
                          className="flex w-full p-3 bg-[#F9F9F9] hover:bg-white cursor-pointer transition-colors rounded-xl"
                        >
                          <div className="flex items-center w-full gap-4">
                            <div className="flex shrink-0 w-12 h-12 rounded-xl bg-gray-100">
                              {item.icon}
                            </div>
                            <div className="flex flex-col gap-1">
                              <h1 className="text-[18px] font-semibold text-[#262626]">
                                {item.name}
                              </h1>
                              <p className="font-medium text-sm text-[#737373]">
                                {item.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex w-full justify-end items-center">
                            <h1 className="text-[16px] font-medium text-[#262626]">
                              {item.amount}
                            </h1>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {currentData.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="text-center">
                      <div className="text-[60px] mb-4">📄</div>
                      <h3 className="text-[18px] font-medium text-[#262626] mb-2">
                        No payments found
                      </h3>
                      <p className="text-[14px] text-[#737373]">
                        {activeTab === "all"
                          ? "You haven't made any payments yet."
                          : "You don't have any regular payments."}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_Wallet;
