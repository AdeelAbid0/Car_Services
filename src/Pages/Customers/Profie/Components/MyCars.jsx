import { useState } from "react";
import { Dropdown } from "antd";
import MenuIcon from "../../../../assets/svg/menu-icon.svg?react";
import Edit from "../../../../assets/svg/edit-2.svg?react";
import Delete from "../../../../assets/svg/delete.svg?react";
import Plus from "../../../../assets/svg/add.svg?react";
import Button from "../../../../ui/Button/Button";
import CommonDrawer from "../../../../ui/Drawer/Drawer";
import InputText from "../../../../ui/InputText/InputText";
import UploadImage from "../../../../Components/UploadImage/UploadImage";
import UploadIcon from "../../../../assets/svg/upload-cloud.svg?react";
const MyCars = () => {
  const [addNewCar, setAddNewCar] = useState(false);
  const carsData = [
    {
      id: 1,
      image: "/Images/hero-image.png",
      name: "Honda Civic",
      year: "2022",
      variant: "Sedan",
      regCity: "Islamabad",
      licensePlate: "2022",
      fuelType: "Petrol",
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
  const handleUpload = () => {
    console.log("handle upload");
  };
  return (
    <div className="flex flex-col gap-2 max-w-[50%]">
      {carsData?.map((car) => (
        <div
          key={car?.id}
          className="bg-muted-background hover:bg-white p-6 rounded-2xl flex justify-between"
        >
          <div className="flex gap-5">
            <img
              src={car?.image}
              alt="car"
              className="w-27 h-27 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-center gap-3.5">
              <div className="flex flex-col gap-0.5">
                <h1 className="text-[20px]! font-bold! text-foreground">
                  {car?.name}
                </h1>
                <p className="text-[13px]! font-normal text-muted-foreground">
                  {car?.year}
                </p>
              </div>
              <div className="flex gap-5">
                <div>
                  <label className="text-xs! font-medium! text-muted-foreground">
                    Variant
                  </label>
                  <p className="text-sm! font-medium! text-foreground">
                    {car?.variant}
                  </p>
                </div>
                <div>
                  <label className="text-xs! font-medium! text-muted-foreground">
                    Registration City
                  </label>
                  <p className="text-sm! font-medium! text-foreground">
                    {car?.regCity}
                  </p>
                </div>
                <div>
                  <label className="text-xs! font-medium! text-muted-foreground">
                    License Plate
                  </label>
                  <p className="text-sm! font-medium! text-foreground">
                    {car?.licensePlate}
                  </p>
                </div>
                <div>
                  <label className="text-xs! font-medium! text-muted-foreground">
                    Fuel Type
                  </label>
                  <p className="text-sm! font-medium! text-foreground">
                    {car?.fuelType}
                  </p>
                </div>
              </div>
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
        label={"Add new car"}
        prefixIcon={<Plus className="text-white" />}
        className={"mt-4!"}
        onClick={() => {
          setAddNewCar(true);
        }}
      />
      <div>
        <CommonDrawer
          title={"Add new car"}
          description={
            "Enter your car details to get accurate service recommendations and pricing."
          }
          open={addNewCar}
          onClose={() => setAddNewCar(false)}
          footerButtonLabel={"Save"}
        >
          <div className="flex flex-col gap-4">
            <InputText label={"Car"} placeholder={"Enter car name"} />
            <InputText label={"Model"} placeholder={"Enter car model"} />
            <InputText label={"Variant"} placeholder={"Enter car variant"} />
            <InputText
              label={"Registration City"}
              placeholder={"Enter car registration city"}
            />
            <InputText
              label={"Fuel Type"}
              placeholder={"Enter car fuel type"}
            />
            <InputText
              label={"License Plate"}
              placeholder={"Enter car license plate"}
            />
            <UploadImage
              svg={<UploadIcon />}
              title={"Upload"}
              description={"Images must be in JPEG or PNG - 10mb max"}
              handleUpload={handleUpload}
            />
          </div>
        </CommonDrawer>
      </div>
    </div>
  );
};

export default MyCars;
