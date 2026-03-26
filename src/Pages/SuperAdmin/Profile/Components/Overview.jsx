import { useState } from "react";
import { Upload } from "antd";
import InputText from "../../../../ui/InputText";
import UserIcon from "../../../../assets/svg/user.svg?react";
import UserTickIcon from "../../../../assets/svg/user-tick.svg?react";
import EditIcon from "../../../../assets/svg/edit-2.svg?react";
import AccountStatusIcon from "../../../../assets/svg/verify.svg?react";
import Button from "../../../../ui/Button";

const Overview = () => {
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
      <div className="flex gap-4 items-center mt-8">
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
          value="John Doe"
          prefixIcon={<UserIcon />}
          placeholder={"Enter full name"}
        />
        <InputText
          label="Role badge"
          name="roleBadge"
          value="Super Admin"
          prefixIcon={<UserTickIcon />}
          placeholder={"Enter role badge"}
          disabled
        />
        <InputText
          label="Account status"
          name="accountStatus"
          value="Active"
          prefixIcon={<AccountStatusIcon />}
          placeholder={"Enter account status"}
          className={" text-success!"}
          disabled
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

export default Overview;
