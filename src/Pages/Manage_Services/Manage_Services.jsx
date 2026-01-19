import { useState } from "react";
import AddIcon from "../../assets/svg/add.svg?react";
import Button from "../../ui/Button/Button";
import CommonDrawer from "../../ui/Drawer/Drawer";
import CommonSelect from "../../ui/SelectWrap/Select";
import InputText from "../../ui/InputText/InputText";

const Manage_Services = () => {
  const [addServiceDrawer, setAddServiceDrawer] = useState(false);
  return (
    <div className="w-full">
      <div className="flex w-full justify-center items-start">
        <div className="mt-11 w-full max-w-[72%]">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-1 justify-center">
              <h1 className="text-2xl font-bold! text-[#262626]">
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
        </div>
      </div>

      {/* Card */}

      {/* Add service Drawer */}
      <div className="w-full">
        <CommonDrawer
          open={addServiceDrawer}
          onClose={() => setAddServiceDrawer(false)}
          title="Add Service"
          footerButtonLabel={"Save"}
        >
          <div className="flex flex-col gap-3">
            <div className="flex w-full ">
              <CommonSelect
                label={"Services"}
                defaultValue={[]}
                placeholder={"Select service"}
                mode="multiple"
              />
            </div>
            <div className="flex w-full ">
              <CommonSelect
                label={"Category"}
                defaultValue={[]}
                placeholder={"Select category"}
              />
            </div>
            <div className="flex w-full ">
              <CommonSelect
                label={"Duration"}
                defaultValue={[]}
                placeholder={"Select service"}
              />
            </div>
            <div className="flex w-full ">
              <InputText label={"Price"} placeholder={"Select service"} />
            </div>
            <div className="flex w-full ">
              <CommonSelect
                label={"Status"}
                defaultValue={[]}
                placeholder={"Select service"}
              />
            </div>
          </div>
        </CommonDrawer>
      </div>
    </div>
  );
};

export default Manage_Services;
