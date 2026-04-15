import SearchIcon from "../../../assets/svg/search-normal.svg?react";
import DummyIcon from "../../../assets/svg/dummy.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Segment from "../../../shared/components/common/Segment";
import { BookingDrawer } from "../components/BookingDrawer";
import InputText from "../../../shared/components/ui/InputText";
const Services = () => {
  const navigate = useNavigate();
  const [serviceCategory, setServiceCategory] = useState(1);
  const [selectedService, setSelectedService] = useState();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const carServices = [
    {
      id: 1,
      name: "All",
      subServices: [
        { id: 1, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 2, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 3, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 4, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 5, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 6, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 7, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 8, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 9, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 10, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 11, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 12, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 13, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 14, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 15, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 16, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 17, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 18, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 19, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 20, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 21, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 22, name: "Tire Rotation", icon: <DummyIcon /> }
      ]
    },
    {
      id: 2,
      name: "Tire Rotation",
      subServices: [
        { id: 1, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 2, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 3, name: "Tire Rotation", icon: <DummyIcon /> }
      ]
    },
    {
      id: 3,
      name: "Brake Service",
      subServices: [
        { id: 1, name: "Brake Service", icon: <DummyIcon /> },
        { id: 2, name: "Brake Service", icon: <DummyIcon /> },
        { id: 3, name: "Brake Service", icon: <DummyIcon /> }
      ]
    },
    {
      id: 4,
      name: "Engine Diagnostics",
      subServices: [
        { id: 1, name: "Engine Diagnostics", icon: <DummyIcon /> },
        { id: 2, name: "Engine Diagnostics", icon: <DummyIcon /> },
        { id: 3, name: "Engine Diagnostics", icon: <DummyIcon /> }
      ]
    },
    {
      id: 5,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> }
      ]
    },
    {
      id: 6,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> }
      ]
    },
    {
      id: 7,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> }
      ]
    }
  ];

  const ServicesGrid = ({ services }) => {
    return (
      <div className="flex w-full flex-wrap gap-[9px] md:gap-6">
        {services.map(service => (
          <div
            key={service.id}
            className={`flex md:flex-col gap-3 md:gap-2 justify-center items-center rounded-xl w-41 md:w-38 h-15 md:h-30 cursor-pointer bg-muted-background hover:bg-white ${
              selectedService === service?.id
                ? "bg-white border border-primary"
                : ""
            }`}
            onClick={() => {
              setSelectedService(service?.id);
              setShowBookingModal(true);
            }}
          >
            <div className="flex items-center justify-center w-7 h-7 md:w-auto md:h-auto">
              {service.icon}
            </div>
            <p className="cursor-pointer text-muted-foreground text-sm font-medium leading-6 md:leading-4">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const tabs = carServices.map(category => ({
    id: category.id,
    label: category.name,
    component: <ServicesGrid services={category.subServices} />
  }));

  return (
    <>
      <div className="flex w-full justify-center h-full overflow-auto">
        <div className="flex w-[90%] md:w-[72%] flex-col gap-4 md:gap-6 h-full py-4 md:py-11">
          <div className="flex flex-col gap-0.5 md:gap-1">
            <h1 className="text-foreground text-xl md:text-2xl! font-bold!">
              Services
            </h1>
            <p className="text-muted-foreground text-[12px] md:text-[16px] font-normal">
              Top car services chosen by customers near you.
            </p>
          </div>
          <div className="flex w-full">
            <InputText placeholder={"Search"} prefixIcon={<SearchIcon />} />
          </div>
          <div className="w-full overflow-x-auto">
            <Segment
              tabs={tabs}
              defaultActiveTab={serviceCategory}
              onTabChange={setServiceCategory}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full relative">
        <BookingDrawer
          showBookingDrawer={showBookingModal}
          setShowBookingDrawer={setShowBookingModal}
        />
        {/* <BookingModal
          showBookingModal={showBookingModal}
          setShowBookingModal={setShowBookingModal}
        /> */}
      </div>
    </>
  );
};

export default Services;
