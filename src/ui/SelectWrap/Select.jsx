import { Select } from "antd";
import ChevronDown from "../../assets/svg/chevron-down.svg?react";

const CommonSelect = ({
  label,
  placeholder,
  defaultValue,
  mode,
  className,
}) => (
  <div className="flex w-full items-center flex-col gap-2">
    {label && (
      <p className="flex w-full justify-start text-[#171717] font-semibold text-[16px] leading-6">
        {label}
      </p>
    )}
    <Select
      suffixIcon={<ChevronDown className="w-5 h-5 text-[#171717]" />}
      //   defaultValue={["lucy"]}
      defaultValue={defaultValue}
      placeholder={placeholder}
      mode={mode}
      className={`w-full! rounded-lg border ${className ?? ""}`}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
      ]}
    />
  </div>
);
export default CommonSelect;
