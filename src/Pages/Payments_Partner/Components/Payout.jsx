import AccountDetailCard from "../../../Components/AccountDetailCard/AccountDetailCard";
import CardPrimary from "../../../assets/svg/card-primary.svg?react";
import CardSecondary from "../../../assets/svg/card-secondary.svg?react";
import MenuIcon from "../../../assets/svg/menu-icon.svg?react";
import DummyIcon from "../../../assets/svg/dummy.svg?react";
import EditIcon from "../../../assets/svg/edit-2.svg?react";
import DeleteIcon from "../../../assets/svg/delete.svg?react";
import Ticksquare from "../../../assets/svg/tick-square.svg?react";
import AddIcon from "../../../assets/svg/add.svg?react";
import CardImage from "../../../assets/Images/cards.svg?react";
import { Dropdown } from "antd";
import { useState } from "react";
import Button from "../../../ui/Button/Button";

const Payout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleMenuClick = (e) => {
    console.log("Menu item clicked:", e.key);
    setDropdownOpen(false);
    if (e.key === "2") {
      // setDeleteModalOpen(true);
    }
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="flex w-full gap-3 justify-between items-center">
          <Ticksquare />
          <p className="text-xs font-normal! text-[#262626]">
            Set for withdrawl
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex w-full gap-3  items-center">
          <EditIcon />
          <p className="text-xs font-normal! text-[#262626]">Edit</p>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex w-full gap-3  items-center">
          <DeleteIcon />
          <p className="text-xs font-normal! text-[#262626]">Delete</p>
        </div>
      ),
    },
  ];
  return (
    <div className="flex w-full gap-20">
      <div className="flex w-full flex-col gap-3">
        <AccountDetailCard icon={<DummyIcon />} image={<CardPrimary />}>
          <div className="flex flex-col gap-2">
            <label className="flex gap-3  items-center font-medium! text-sm text-[#737373]">
              UBL <span className="w-1 h-1 rounded-full bg-[#737373]"></span>
              <span className="text-[#9A85FF]">Linked</span>
            </label>
            <h3 className="text-[#262626] font-medium! text-sm!">Adeel Abid</h3>
            <div className="flex items-center gap-3 text-[#737373] font-medium! text-sm!">
              <label>4242 4242 4242 4242</label>
              <span className="w-1 h-1 rounded-full bg-[#737373]"></span>
              <p>Expiry: 16/29</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-1.5! h-1.5! rounded-full bg-[#9A85FF]"></span>
              <span className="text-[#9A85FF] font-medium! text-sm!">
                Verified
              </span>
            </div>
            <div className="absolute z-20 right-6 top-4 cursor-pointer">
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                }}
                placement="bottomRight"
                trigger={["click"]}
                open={dropdownOpen}
                onOpenChange={(open) => setDropdownOpen(open)}
              >
                <MenuIcon />
              </Dropdown>
            </div>
          </div>
        </AccountDetailCard>
        <AccountDetailCard icon={<DummyIcon />} image={<CardSecondary />}>
          <div className="flex flex-col gap-2">
            <label className="font-medium! text-sm text-[#737373]">
              Bank Alfalah
            </label>
            <h3 className="text-[#262626] font-medium! text-sm!">Adeel Abid</h3>
            <div className="flex items-center gap-3 text-[#737373] font-medium! text-sm!">
              <label>4242 4242 4242 4242</label>
              <span className="w-1 h-1 rounded-full bg-[#737373]"></span>
              <p>Expiry: 16/29</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-1.5! h-1.5! rounded-full bg-[#FBBF24]"></span>
              <span className="text-[#FBBF24] font-medium! text-sm!">
                Pending
              </span>
            </div>
            <div className="absolute z-20 right-6 top-4 hover:cursor-pointer">
              <MenuIcon />
            </div>
          </div>
        </AccountDetailCard>
        <Button
          prefixIcon={<AddIcon />}
          type={"primary"}
          label={"Add New Car"}
          className={"w-fit! h-8!"}
        />
      </div>
      <div>
        <CardImage />
      </div>
    </div>
  );
};

export default Payout;
