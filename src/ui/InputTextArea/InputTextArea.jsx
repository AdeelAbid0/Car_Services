import { Input } from "antd";

const InputTextArea = ({ placeholder, label, rows, className, ...rest }) => {
  return (
    <div className="flex w-full items-center flex-col gap-2">
      {label && (
        <p className="flex w-full justify-start text-[#171717] font-semibold text-[16px] leading-6">
          {label}
        </p>
      )}

      <Input.TextArea
        placeholder={placeholder}
        className={`w-full! rounded-lg border border-[#E5E5E5] ${
          className ?? ""
        }`}
        {...rest}
        rows={rows}
      />
    </div>
  );
};

export default InputTextArea;
