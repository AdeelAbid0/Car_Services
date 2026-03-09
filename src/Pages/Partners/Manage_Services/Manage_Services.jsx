import { useState } from "react";
import AddIcon from "../../../assets/svg/add.svg?react";
import Button from "../../../ui/Button/Button";
import MoreIcon from "../../../assets/svg/more.svg?react";
import EditIcon from "../../../assets/svg/edit-2.svg?react";
import DeleteIcon from "../../../assets/svg/delete.svg?react";
import { Dropdown } from "antd";
import AddServicesDrawer from "./Components/AddServicesDrawer";
import CommonModal from "../../../ui/Modal/Modal";

const Manage_Services = () => {
  const [addServiceDrawer, setAddServiceDrawer] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <div className="flex w-full gap-3 justify-between items-center">
          <p className="text-xs font-normal! text-foreground">Edit</p>
          <EditIcon />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex w-full gap-3 justify-between items-center">
          <p className="text-xs font-normal! text-foreground">Delete</p>
          <DeleteIcon />
        </div>
      ),
    },
  ];

  const handleMenuClick = (e) => {
    console.log("Menu item clicked:", e.key);
    setDropdownOpen(false);
    if (e.key === "2") {
      setDeleteModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-center items-start">
        <div className="mt-11 w-full max-w-[72%]">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-1 justify-center">
              <h1 className="text-2xl font-bold! text-foreground">
                Manage Services
              </h1>
            </div>
            <div className="flex items-center">
              <Button
                type={"primary"}
                label={"Add Service"}
                onClick={() => {
                  setAddServiceDrawer(true);
                }}
                prefixIcon={<AddIcon />}
                className="rounded-lg! h-8!"
              />
            </div>
          </div>
          {/* Card */}
          <div className="flex w-full justify-between rounded-2xl bg-white hover:bg-white p-6 cursor-pointer mt-6">
            <div className="flex gap-4 w-[90%]">
              <div className="w-83.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-2 p-4 ">
                <p className="text-muted-foreground font-medium! text-xs">
                  Services
                </p>

                <div className="flex items-center w-full gap-2 flex-wrap">
                  <div className="bg-white rounded-full">
                    <p className="px-2.5 py-1.5 text-xs! font-medium text-foreground">
                      Interior Cleaning
                    </p>
                  </div>
                  <div className="bg-white rounded-full">
                    <p className="px-2.5 py-1.5 text-xs! font-medium text-foreground">
                      Battery Replacement
                    </p>
                  </div>
                  <div className="bg-white rounded-full">
                    <p className="px-2.5 py-1.5 text-xs! font-medium text-foreground">
                      Interior Cleaning
                    </p>
                  </div>
                  <p className="text-xs font-medium! text-muted-foreground">
                    +3
                  </p>
                </div>
              </div>
              <div className="w-33.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-4 justify-center items-center ">
                <img
                  src="/Images/hero-image.png"
                  alt=""
                  className="w-7 h-7 object-cover"
                />
                <h1 className="text-foreground text-sm!  font-semibold!">
                  User Name
                </h1>
              </div>
              <div className="w-33.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-4 justify-center items-center ">
                <img
                  src="/Images/hero-image.png"
                  alt=""
                  className="w-7 h-7 object-cover"
                />
                <h1 className="text-foreground text-sm!  font-semibold!">
                  Service
                </h1>
              </div>
              <div className="w-33.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-4 justify-center items-center ">
                <img
                  src="/Images/hero-image.png"
                  alt=""
                  className="w-7 h-7 object-cover"
                />
                <h1 className="text-foreground text-sm!  font-semibold!">
                  Time remaining
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between w-[10%] relative">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                <p className="text-xs font-medium! text-success">Active</p>
              </div>

              {/* Dropdown Menu */}
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
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors">
                  <MoreIcon className="w-5 h-5 text-gray-600" />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {/* Add service Drawer */}
      <AddServicesDrawer
        addServiceDrawer={addServiceDrawer}
        setAddServiceDrawer={setAddServiceDrawer}
      />
      {/* Delete Modal */}
      <div className="flex w-[31%]">
        <CommonModal
          open={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          className="bg-white!"
        >
          <div className="flex flex-col gap-3 p-6">
            <div className="flex border-b border-border h-10 items-start">
              <h1 className="text-[20px] font-bold! text-foreground">
                Delete Service?
              </h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-foreground text-sm! font-normal leading-5">
                Are you sure you want to delete this service?
              </h2>
              <p className="text-muted-foreground text-sm! font-normal!">
                This action will remove it from your profile and customers will
                no longer be able to book it.
              </p>
            </div>
            <div className="flex gap-3 mt-5 w-full justify-end">
              <Button
                type={"default"}
                label={"Cancel"}
                className={"h-10!"}
                onClick={() => setDeleteModalOpen(false)}
              />
              <Button
                type={"primary"}
                label={"Delete"}
                className={"bg-danger! h-10!"}
                onClick={() => setDeleteModalOpen(false)}
              />
            </div>
          </div>
        </CommonModal>
      </div>
    </div>
  );
};

export default Manage_Services;
