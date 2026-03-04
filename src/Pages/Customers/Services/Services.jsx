import InputText from "../../../ui/InputText/InputText";
import SearchIcon from "../../../assets/svg/search-normal.svg?react";
import DummyIcon from "../../../assets/svg/dummy.svg?react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingModal from "../../../Components/BookingModal/BookingModal";
const Services = () => {
  const navigate = useNavigate();
  const [serviceCategory, setServiceCategory] = useState(1);
  const [selectedService, setSelectedService] = useState();
  const [servicesData, setServicesData] = useState([]);
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
        { id: 22, name: "Tire Rotation", icon: <DummyIcon /> },
      ],
    },
    {
      id: 2,
      name: "Tire Rotation",
      subServices: [
        { id: 1, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 2, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 3, name: "Tire Rotation", icon: <DummyIcon /> },
      ],
    },
    {
      id: 3,
      name: "Brake Service",
      subServices: [
        { id: 1, name: "Brake Service", icon: <DummyIcon /> },
        { id: 2, name: "Brake Service", icon: <DummyIcon /> },
        { id: 3, name: "Brake Service", icon: <DummyIcon /> },
      ],
    },
    {
      id: 4,
      name: "Engine Diagnostics",
      subServices: [
        { id: 1, name: "Engine Diagnostics", icon: <DummyIcon /> },
        { id: 2, name: "Engine Diagnostics", icon: <DummyIcon /> },
        { id: 3, name: "Engine Diagnostics", icon: <DummyIcon /> },
      ],
    },
    {
      id: 5,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> },
      ],
    },
    {
      id: 6,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> },
      ],
    },
    {
      id: 7,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> },
      ],
    },
  ];
  useEffect(() => {
    if (serviceCategory) {
      const service = carServices.find((s) => s.id === serviceCategory);
      setServicesData(service?.subServices || []);
    }
  }, [serviceCategory]);
  return (
    <>
      <div className="flex w-full justify-center h-full overflow-auto">
        <div className="flex w-[72%] flex-col gap-6 h-full py-11">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#262626] text-2xl! font-bold!">Services</h1>
            <p className="text-[#737373] text-[16px] font-normal">
              Top car services chosen by customers near you.
            </p>
          </div>
          <div className="flex w-full">
            <InputText placeholder={"Search"} prefixIcon={SearchIcon} />
          </div>
          <div className="flex w-fit gap-6 border-b border-[#E5E5E5]">
            {carServices.map((service) => (
              <div
                key={service.id}
                className={`pb-2  ${
                  serviceCategory === service?.id
                    ? "border-b-[1.5px] border-[#9A85FF]"
                    : ""
                }`}
                onClick={() => {
                  setServiceCategory(service?.id);
                }}
              >
                <h2 className="cursor-pointer text-[#737373] text-sm font-medium">
                  {service.name}
                </h2>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-wrap gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`flex flex-col gap-2 justify-center items-center rounded-xl w-38  h-30 cursor-pointer bg-[#FAFAFA] hover:bg-white ${
                  selectedService === service?.id
                    ? "bg-white border border-[#9A85FF]"
                    : ""
                }`}
                onClick={() => {
                  setSelectedService(service?.id);
                  setShowBookingModal(true);
                }}
              >
                {service.icon}
                <p className="cursor-pointer text-[#737373] text-sm font-medium leading-4">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full relative">
        <BookingModal
          showBookingModal={showBookingModal}
          setShowBookingModal={setShowBookingModal}
        />
      </div>
    </>
  );
};

export default Services;
