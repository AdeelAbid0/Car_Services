import InputText from "../../../../ui/InputText/InputText";
import UserIcon from "../../../../assets/svg/user.svg?react";
import LocationPlaceholder from "../../../../assets/svg/location-placeholder.svg?react";
import EditIcon from "../../../../assets/svg/edit-2.svg?react";
import { useState } from "react";
import CommonSelect from "../../../../ui/SelectWrap/Select";
import Button from "../../../../ui/Button/Button";

const categories = [
  { label: "Home", value: "Home" },
  { label: "Automotive", value: "Automotive" },
];

const BusinessInfo = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    category: undefined,
    location: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4 max-w-[50%]">
      <div className="flex flex-col gap-2 mt-8">
        <InputText
          label={"Business Name"}
          placeholder={"Enter business name"}
          prefixIcon={<UserIcon />}
          value={formData.businessName}
          onChange={(e) => handleInputChange("businessName", e.target.value)}
        />
        <div className="w-full">
          <CommonSelect
            label={"Category"}
            placeholder="Select category"
            className="w-full h-12 rounded-lg"
            value={formData.category}
            options={categories}
            onChange={(value) => handleInputChange("category", value)}
            prefixIcon={<UserIcon />}
          />
        </div>
        <InputText
          label={"Location"}
          placeholder={"Enter location"}
          prefixIcon={<LocationPlaceholder />}
          value={formData.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
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

export default BusinessInfo;
