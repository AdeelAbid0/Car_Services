import { Upload, message } from "antd";

const UploadImage = ({ svg, title, description, onFileSelect }) => {
  // Allowed file types
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

  const beforeUpload = file => {
    const isImage = allowedTypes.includes(file.type);
    if (!isImage) {
      message.error("You can only upload PNG or JPG files!");
      return Upload.LIST_IGNORE;
    }

    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("Image must be smaller than 10MB!");
      return Upload.LIST_IGNORE;
    }

    if (onFileSelect) {
      onFileSelect(file);
    }

    return false;
  };

  const props = {
    accept: ".png,.jpg,.jpeg",
    beforeUpload: beforeUpload,
    showUploadList: false,
    maxCount: 1,
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <div className="flex w-full bg-muted-background p-1.25 rounded-2xl">
      <Upload {...props} className="w-full! [&_.ant-upload]:w-full!">
        <div className="flex w-full! flex-col gap-6 items-center justify-center border border-border h-auto rounded-[10.5px] py-10 cursor-pointer">
          <div className="flex w-14.5 h-14.5 justify-center items-center rounded-[11px] border-[2.4px] border-white bg-linear-to-b from-[#CFC6F8] to-transparent">
            {svg}
          </div>
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-foreground text-sm font-medium">{title}</h1>
            <p className="text-sm text-muted-foreground leading-4.5">
              {description}
            </p>
            {/* <p className="text-xs text-[#999999] mt-2">
              Supports: PNG, JPG (Max 5MB)
            </p> */}
          </div>
        </div>
      </Upload>
    </div>
  );
};

export default UploadImage;
