import { Radio } from "antd";
import { useState } from "react";

const AvailabilityStatus = ({ onChange }) => {
  const [selectedStatus, setSelectedStatus] = useState("available");

  const handleStatusChange = status => {
    setSelectedStatus(status);
    console.log("Selected status:", status);

    if (onChange) {
      onChange(status);
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-[50%]">
      <div className="flex flex-col gap-2 mt-8 max-w-55">
        <label className="text-muted-foreground font-medium! text-xs!">
          Status
        </label>

        <div
          className="flex gap-2.5 items-center px-4 py-2 rounded-lg cursor-pointer transition-all bg-muted-background"
          onClick={() => handleStatusChange("available")}
        >
          <Radio
            checked={selectedStatus === "available"}
            rootClassName="[&_.ant-radio-inner]:!border-success [&_.ant-radio-checked_.ant-radio-inner]:!bg-success [&_.ant-radio-checked_.ant-radio-inner]:!border-success"
          />
          <p
            className={`text-sm! font-medium! leading-[129%] ${
              selectedStatus === "available"
                ? "text-success"
                : "text-foreground"
            }`}
          >
            Available now
          </p>
        </div>

        {/* Offline - Default */}
        <div
          className="flex gap-3 items-center px-4 py-2 rounded-lg cursor-pointer transition-all bg-muted-background"
          onClick={() => handleStatusChange("offline")}
        >
          <Radio checked={selectedStatus === "offline"} />
          <p className="text-sm! font-medium! text-foreground leading-[129%]">
            Offline
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;
