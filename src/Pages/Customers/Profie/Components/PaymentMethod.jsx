import { Dropdown, Tag } from "antd";
import MenuIcon from "../../../../assets/svg/menu-icon.svg?react";
import Edit from "../../../../assets/svg/edit-2.svg?react";
import Delete from "../../../../assets/svg/delete.svg?react";
import TickSquare from "../../../../assets/svg/tick-square.svg?react";
import Card from "../../../../assets/svg/card.svg?react";
import Plus from "../../../../assets/svg/add.svg?react";
import CardImage from "../../../../assets/Images/cards.svg?react";
import Button from "../../../../ui/Button/Button";
const PaymentMethod = () => {
  const paymentData = [
    {
      id: 1,
      image: "/Images/hero-image.png",
      cardHolderName: "Adeel Abid",
      cardNumber: "4859 4859 4859 4859",
      expiryDate: "12/24",
      Tag: "Default",
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <div className="flex w-full justify-between gap-2">
          <p className="text-[13px]! text-foreground! font-normal">Default</p>
          <TickSquare />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex w-full justify-between gap-2">
          <p className="text-[13px]! text-foreground! font-normal">Edit</p>
          <Edit className="text-foreground/70" />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex w-full justify-between gap-2">
          <p className="text-[13px]! text-foreground! font-normal">Delete</p>
          <Delete />
        </div>
      ),
    },
  ];
  return (
    <div className="flex w-full gap-16">
      <div className="flex w-[60%] flex-col gap-2">
        {paymentData?.map((payment) => (
          <div
            key={payment?.id}
            className="bg-muted-background hover:bg-white p-6 rounded-2xl flex justify-between"
          >
            <div className="flex gap-5">
              <img
                src={payment?.image}
                alt="payment"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-center gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-xs! font-medium! text-muted-foreground">
                    Paypal
                  </p>
                  <h1 className="flex items-center gap-2 text-sm! font-medium! text-foreground">
                    <Card /> {payment?.cardHolderName}
                  </h1>
                  <div className="flex gap-3 items-center">
                    <h1 className="text-sm! font-medium! text-muted-foreground">
                      {payment?.cardNumber}
                    </h1>
                    <span className="w-1.5 h-1 bg-background/30 rounded-full"></span>
                    <p className="text-sm! font-medium! text-muted-foreground">
                      Expiry: {payment?.expiryDate}
                    </p>
                  </div>
                </div>
                <Tag className="w-fit" variant="solid" color={"processing"}>
                  {payment?.Tag}
                </Tag>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <span className="cursor-pointer">
                  <MenuIcon className="text-muted-foreground" />
                </span>
              </Dropdown>
            </div>
          </div>
        ))}
        <Button
          type={"primary"}
          label={"Add new payment"}
          prefixIcon={<Plus className="text-white" />}
          className={"mt-4!"}
        />
      </div>
      <div className="w-[40%]">
        <CardImage />
      </div>
    </div>
  );
};

export default PaymentMethod;
