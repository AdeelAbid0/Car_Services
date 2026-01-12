import { Input } from "antd";

const InputText = ({
  placeholder,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  type = "text",
  suffix,
  label,
  name,
  formik,
  onChange,
  onBlur,
  className,
  ...rest
}) => {
  const hasError = formik?.touched?.[name] && formik?.errors?.[name];

  return (
    <div className="flex w-full items-center flex-col gap-2">
      {label && (
        <p className="flex w-full justify-start text-[#171717] font-semibold text-[16px] leading-6">
          {label}
        </p>
      )}
      <Input
        type={type}
        name={name}
        value={formik?.values?.[name] || ""}
        onChange={onChange || formik?.handleChange}
        onBlur={onBlur || formik?.handleBlur}
        placeholder={placeholder}
        prefix={PrefixIcon ? PrefixIcon : null}
        suffix={SuffixIcon ? SuffixIcon : null}
        className={`w-full! rounded-lg border ${className ?? ""}`}
        style={{ height: "44px" }}
        status={hasError ? "error" : ""}
        {...rest}
        rootClassName="[&_.ant-input-prefix]:!mr-2"
      />
      {hasError && (
        <div className="flex w-full justify-start">
          <span className="text-[#EF4444] text-sm">{formik.errors[name]}</span>
        </div>
      )}
    </div>
  );
};

export default InputText;
