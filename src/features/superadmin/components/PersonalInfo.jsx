import { useState } from "react";
import InputText from "../../../shared/components/ui/InputText";
import UserIcon from "../../../assets/svg/user.svg?react";
import PhoneIcon from "../../../assets/svg/call-filled.svg?react";
import EditIcon from "../../../assets/svg/edit-2.svg?react";
import MailIcon from "../../../assets/svg/mail-placeholder.svg?react";
import FlagIcon from "../../../assets/svg/flag.svg?react";
import Button from "../../../shared/components/ui/Button";

const PersonalInfo = () => {
  const [imageUrl, setImageUrl] = useState("/Images/hero-image.png");

  const handleChange = ({ file }) => {
    const uploadedFile = file.originFileObj;
    if (!uploadedFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(uploadedFile);
  };

  return (
    <div className="flex flex-col gap-4 max-w-[38%]">
      <div className="flex flex-col gap-2.5">
        <InputText
          label="Full Name"
          name="fullName"
          prefixIcon={<UserIcon />}
          placeholder={"Enter full name"}
        />
        <InputText
          label="Phone"
          name="phone"
          prefixIcon={<PhoneIcon />}
          placeholder={"+92365898475"}
        />
        <InputText
          label="Email"
          name="email"
          prefixIcon={<MailIcon />}
          placeholder={"Enter email"}
        />
        <InputText
          label="Country"
          name="country"
          prefixIcon={<FlagIcon />}
          placeholder={"Enter country"}
        />
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

export default PersonalInfo;
