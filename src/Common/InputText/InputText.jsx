import { Input } from "antd";

const InputText = ({
  placeholder,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  type = "text",
  suffix,
  label,
  className,
  ...rest
}) => {
  return (
    <div className="flex w-full items-center flex-col gap-2">
      {label && (
        <p className="flex w-full justify-start text-[#171717] font-semibold text-[16px] leading-6">
          {label}
        </p>
      )}

      <Input
        type={type}
        placeholder={placeholder}
        prefix={PrefixIcon ? <PrefixIcon /> : null}
        suffix={SuffixIcon ? <SuffixIcon /> : null}
        className={`w-full! rounded-lg border border-[#E5E5E5] ${
          className ?? ""
        }`}
        style={{ height: "44px" }}
        {...rest}
        rootClassName="
         [&_.ant-input-prefix]:!mr-2"
      />
    </div>
  );
};

export default InputText;
