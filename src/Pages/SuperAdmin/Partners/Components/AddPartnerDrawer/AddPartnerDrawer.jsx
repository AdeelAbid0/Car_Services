import { useState } from "react";
import CommonDrawer from "../../../../../ui/Drawer/Drawer";
import InputText from "../../../../../ui/InputText/InputText";
import UserIcon from "../../../../../assets/svg/user.svg?react";
import EmailIcon from "../../../../../assets/svg/mail-placeholder.svg?react";
import PhoneIcon from "../../../../../assets/svg/call-filled.svg?react";
import LocationPlaceholder from "../../../../../assets/svg/location-placeholder.svg?react";
import EditIcon from "../../../../../assets/svg/edit.svg?react";
import UploadIcon from "../../../../../assets/svg/upload-cloud.svg?react";
import InputTextArea from "../../../../../ui/InputTextArea/InputTextArea";
import UploadImage from "../../../../../components/UploadImage";
export const Basic = () => {
  return (
    <div className="flex flex-col gap-3">
      <InputText
        label={"Full name"}
        placeholder={"Enter full name"}
        prefixIcon={<UserIcon />}
        // value={formData.fullName}
        onChange={(e) => handleInputChange("fullName", e.target.value)}
      />
      <InputText
        label={"Email"}
        placeholder={"Enter email"}
        prefixIcon={<EmailIcon />}
        // value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
      />
      <InputText
        label={"Phone"}
        placeholder={"Enter phone"}
        prefixIcon={<PhoneIcon />}
        // value={formData.phone}
        onChange={(e) => handleInputChange("phone", e.target.value)}
      />
    </div>
  );
};
export const Business = () => {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <InputText
        label={"Business Name"}
        placeholder={"Enter business name"}
        prefixIcon={<UserIcon />}
        // value={formData.businessName}
        // onChange={(e) => handleInputChange("businessName", e.target.value)}
      />
      <InputText
        label={"Location"}
        placeholder={"Enter location"}
        prefixIcon={<LocationPlaceholder />}
        // value={formData.location}
        // onChange={(e) => handleInputChange("location", e.target.value)}
      />
      <div className="flex flex-col gap-2">
        <p className="flex w-full justify-start text-foreground font-semibold text-[16px] leading-6">
          Map pin selection
        </p>
        <div className="flex w-full rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26582.945925006887!2d73.14608095274605!3d33.60872299289165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0851d92db3%3A0x66f28b1327836ee2!2sGulberg%20Greens%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1767599039578!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl max-h-27.5"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export const Services = () => {
  const servicesList = [
    { id: 1, name: "Individual" },
    { id: 2, name: "Small Shop" },
    { id: 3, name: "Medium Shop" },
    { id: 4, name: "Service Center" },
    { id: 5, name: "Individual" },
    { id: 6, name: "Small Shop" },
  ];
  return (
    <div className="flex flex-col gap-2 mt-6">
      <div className="grid grid-cols-1 gap-3">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-start p-4 rounded-xl border cursor-pointer transition-all border-border bg-white"
            // onClick={() => handleServiceToggle(service.id)}
          >
            <span className="text-[16px] leading-5 text-foreground font-medium">
              {service.name}
            </span>
          </div>
        ))}
      </div>
      <div>
        <InputText
          label={"other"}
          placeholder={"Other service name"}
          prefixIcon={<EditIcon />}
        />
      </div>
    </div>
  );
};
export const Gallery = () => {
  const handleUpload = () => {
    console.log("handle upload");
  };
  return (
    <div className="flex flex-col gap-2 mt-6">
      <div>
        <UploadImage
          svg={<UploadIcon />}
          title={"Upload"}
          description={"Images must be in JPEG or PNG - 10mb max"}
          handleUpload={handleUpload}
        />
      </div>
      <div>
        <InputTextArea
          placeholder={"Write description"}
          prefix={<EditIcon />}
          rows={4}
        />
      </div>
    </div>
  );
};
const AddPartnerDrawer = ({ addPartnerDrawer, setAddPartnerDrawer }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const STEPS = [
    {
      id: 1,
      label: "Basic",
      component: <Basic />,
    },
    {
      id: 2,
      label: "Business",
      component: <Business />,
    },
    {
      id: 3,
      label: "Services",
      component: <Services />,
    },
    {
      id: 4,
      label: "Gallery",
      component: <Gallery />,
    },
  ];
  return (
    <div>
      <CommonDrawer
        open={addPartnerDrawer}
        onClose={() => {
          setAddPartnerDrawer(false);
          setCurrentStep(1);
        }}
        title={"Add Partner"}
        footerButtonPrimaryLabel={`${currentStep === STEPS.length ? "Save" : "Continue"}`}
        footerButtonSecondaryLabel={currentStep > 1 ? "Back" : ""}
        footerButtonSecondaryType={"default"}
        footerButtonPrimaryClick={() => {
          if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1);
          }
        }}
        footerButtonSecondaryClick={() => {
          setCurrentStep(currentStep - 1);
        }}
      >
        <div className="flex w-full justify-between">
          {STEPS.map((step) => (
            <div key={step.id} className="cursor-pointer flex flex-col gap-1.5">
              <p
                className={`text-sm! font-medium! transition-all duration-500 ${currentStep >= step.id ? "text-primary" : "text-muted-foreground opacity-50"}`}
              >
                {step.label}
              </p>
              <div
                className={`h-1.5 min-w-22 rounded-full ${
                  currentStep >= step.id ? "bg-primary" : "bg-border"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-end mt-1">
          <p className="text-primary">
            Step {currentStep}/{STEPS.length}
          </p>
        </div>
        <div className="mt-5">
          {STEPS?.find((item) => item?.id === currentStep)?.component}
        </div>
      </CommonDrawer>
    </div>
  );
};
export default AddPartnerDrawer;
