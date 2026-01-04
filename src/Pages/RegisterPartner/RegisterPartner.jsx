import { useState } from "react";
import InputText from "../../ui/InputText/InputText";
import AuthCardPartner from "../../Components/AuthCardPartner/AuthCardPartner";
import PartnerIcon from "../../assets/svg/partner.svg?react";
import UserIcon from "../../assets/svg/user.svg?react";
import EmailIcon from "../../assets/svg/mail-placeholder.svg?react";
// import BuildingIcon from "../../assets/svg/building.svg?react";
// import LocationIcon from "../../assets/svg/location.svg?react";
// import ImageIcon from "../../assets/svg/image.svg?react";

const RegisterPartner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    location: "",
    services: [],
    description: "",
    images: [],
  });

  const servicesList = [
    { id: 1, name: "Individual", description: "Solo professional" },
    { id: 2, name: "Small Shop", description: "1-5 employees" },
    { id: 3, name: "Medium Shop", description: "6-20 employees" },
    { id: 4, name: "Service Center", description: "20+ employees" },
    { id: 5, name: "Individual", description: "Solo professional" },
    { id: 6, name: "Small Shop", description: "1-5 employees" },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form logic here
      console.log("Form submitted:", formData);
      // Add your form submission logic
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(serviceId);
      if (isSelected) {
        return {
          ...prev,
          services: prev.services.filter((id) => id !== serviceId),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, serviceId],
        };
      }
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <InputText
              label={"Full name"}
              placeholder={"Enter full name"}
              prefixIcon={UserIcon}
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
            <InputText
              label={"Email"}
              placeholder={"Enter email"}
              prefixIcon={EmailIcon}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <InputText
              label={"Phone"}
              placeholder={"Enter phone"}
              prefixIcon={EmailIcon}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <InputText
              label={"Business Name"}
              placeholder={"Enter business name"}
              // prefixIcon={BuildingIcon}
              value={formData.businessName}
              onChange={(e) =>
                handleInputChange("businessName", e.target.value)
              }
            />
            <InputText
              label={"Location"}
              placeholder={"Enter location"}
              // prefixIcon={LocationIcon}
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
            <div className="flex flex-col gap-2">
              <p className="flex w-full justify-start text-[#171717] font-semibold text-[16px] leading-6">
                Map pin selection
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <p className="flex w-full justify-start text-[#171717] font-semibold text-[16px] leading-6">
              Select Services
            </p>
            <div className="grid grid-cols-2 gap-3">
              {servicesList.map((service) => (
                <div
                  key={service.id}
                  className={`flex flex-col items-start p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.services.includes(service.id)
                      ? "border-[#BCB1FF] bg-[#EAE8FF]"
                      : "border-[#E5E5E5] bg-white"
                  }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <span className="text-[16px] leading-5 text-[#262626] font-medium">
                    {service.name}
                  </span>
                  <span className="text-[#737373] leading-5 text-sm font-normal">
                    {service.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <div className="border-2 border-dashed border-[#9A85FF] rounded-2xl p-8 text-center bg-[#F4F2FF]">
              <div className="flex flex-col items-center gap-3">
                {/* <ImageIcon className="w-12 h-12 text-[#9A85FF]" /> */}
                <div>
                  <p className="text-[16px] text-[#262626] font-medium">
                    Drag & drop your images here
                  </p>
                  <p className="text-[14px] text-[#737373]">
                    or click to browse
                  </p>
                </div>
                <p className="text-[12px] text-[#737373]">
                  Supported formats: JPG, PNG, GIF (Max 5MB each)
                </p>
              </div>
            </div>

            <div className="mt-6">
              <InputText
                label={"Description"}
                placeholder={"Add service description..."}
                type="textarea"
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex w-full justify-center gap-2.5">
            <h1 className="font-bold!">Join as Partner</h1>
            <PartnerIcon />
          </div>
        );
      case 2:
        return "Your Business";
      case 3:
        return "Services";
      case 4:
        return "Gallery";
      default:
        return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Let's get to know you first";
      case 2:
        return "What services do you offer?";
      case 3:
        return "What services do you offer?";
      case 4:
        return "Add Your Service Images";
      default:
        return "";
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#EAE8FF]">
      <AuthCardPartner
        title={getStepTitle()}
        description={getStepDescription()}
        currentStep={currentStep}
        totalSteps={4}
        onNext={handleNext}
        onBack={handleBack}
      >
        {renderStepContent()}
      </AuthCardPartner>
    </div>
  );
};

export default RegisterPartner;
