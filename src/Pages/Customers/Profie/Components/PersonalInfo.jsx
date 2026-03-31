import { useState } from "react";
import { Upload } from "antd";
import InputText from "../../../../components/ui/InputText";
import UserIcon from "../../../../assets/svg/user.svg?react";
import PhoneIcon from "../../../../assets/svg/call-filled.svg?react";
import EditIcon from "../../../../assets/svg/edit-2.svg?react";
import MailIcon from "../../../../assets/svg/mail-placeholder.svg?react";
import Button from "../../../../components/ui/Button";

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
    <div className="flex flex-col gap-4 max-w-[50%]">
      <div className="flex gap-4 items-center">
        <div className="flex gap-3 w-16 h-16 rounded-xl overflow-hidden cursor-pointer">
          <img
            src={imageUrl}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <Upload
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleChange}
        >
          <p className="text-xs! font-medium! text-primary cursor-pointer hover:text-primary/70">
            Change Image
          </p>
        </Upload>
      </div>
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
