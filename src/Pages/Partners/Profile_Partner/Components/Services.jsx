import { useState } from "react";
import InputText from "../../../../ui/InputText/InputText";
import EditIcon from "../../../../assets/svg/edit.svg?react";
import Button from "../../../../ui/Button/Button";

const Services = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherService, setOtherService] = useState("");

  const servicesList = [
    { id: 1, name: "Individual", description: "Solo professional" },
    { id: 2, name: "Small Shop", description: "1-5 employees" },
    { id: 3, name: "Medium Shop", description: "6-20 employees" },
    { id: 4, name: "Service Center", description: "20+ employees" },
    { id: 5, name: "Individual", description: "Solo professional" },
    { id: 6, name: "Small Shop", description: "1-5 employees" },
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleOtherServiceChange = (e) => {
    setOtherService(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 max-w-[50%]">
      <div className="flex flex-col gap-2 mt-8">
        <p className="flex w-full justify-start text-foreground font-semibold text-[16px] leading-6">
          Select Services
        </p>
        <div className="grid grid-cols-2 gap-3">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col items-start p-4 rounded-xl border cursor-pointer transition-all ${
                selectedServices.includes(service.id)
                  ? "border-[#BCB1FF] bg-[#EAE8FF]"
                  : "border-[#E5E5E5] bg-white"
              }`}
              onClick={() => handleServiceToggle(service.id)}
            >
              <span className="text-[16px] leading-5 text-foreground font-medium">
                {service.name}
              </span>
              <span className="text-muted-foreground leading-5 text-sm font-normal">
                {service.description}
              </span>
            </div>
          ))}
        </div>
        <div>
          <InputText
            label="Other"
            placeholder="Other service name"
            prefixIcon={<EditIcon />}
            value={otherService}
            onChange={handleOtherServiceChange}
          />
        </div>
        <Button
          type={"primary"}
          label={"Edit"}
          prefixIcon={<EditIcon className="stroke-white!" />}
          className={"mt-4!"}
        />
      </div>
    </div>
  );
};

export default Services;
