import { Dropdown, Tag } from "antd";
import MenuIcon from "../../../../assets/svg/menu-icon.svg?react";
import Edit from "../../../../assets/svg/edit-2.svg?react";
import Delete from "../../../../assets/svg/delete.svg?react";
import Plus from "../../../../assets/svg/add.svg?react";
import Button from "../../../../components/ui/Button";
const Address = () => {
  const addressData = [
    {
      id: 1,
      image: "/Images/hero-image.png",
      address: "House 25, Street 10, Sector G-11, Islamabad",
      phone: "+92 3XX XXX XXXX",
      Tag: "Home",
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <div className="flex w-full justify-between gap-2">
          <p className="text-[13px]! text-foreground! font-normal">Edit</p>
          <Edit className="text-foreground/70" />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex w-full justify-between gap-2">
          <p className="text-[13px]! text-foreground! font-normal">Delete</p>
          <Delete />
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-2 max-w-[50%]">
      {addressData?.map((address) => (
        <div
          key={address?.id}
          className="bg-muted-background hover:bg-white p-6 rounded-2xl flex justify-between"
        >
          <div className="flex gap-5">
            <img
              src={address?.image}
              alt="address"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-center gap-2">
              <div className="flex flex-col gap-0.5">
                <p className="text-xs! font-medium! text-muted-foreground">
                  Address
                </p>
                <h1 className="text-sm! font-medium! text-foreground">
                  {address?.address}
                </h1>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs! font-medium! text-muted-foreground">
                  Phone
                </p>
                <h1 className="text-sm! font-medium! text-foreground">
                  {address?.phone}
                </h1>
              </div>
              <Tag className="w-fit" variant="solid" color={"processing"}>
                {address?.Tag}
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
        label={"Add new address"}
        prefixIcon={<Plus className="text-white" />}
        className={"mt-4!"}
      />
    </div>
  );
};

export default Address;
