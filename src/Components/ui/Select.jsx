import { Select } from "antd";
import ChevronDown from "../../assets/svg/chevron-down.svg?react";

const CommonSelect = ({
  label,
  placeholder,
  defaultValue,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  mode,
  className,
  options = [],
  onChange,
  value,
  ...rest
}) => {
  return (
    <div className="flex w-full items-center flex-col gap-2">
      {label && (
        <p className="flex w-full justify-start text-foreground font-semibold text-[16px] leading-6">
          {label}
        </p>
      )}
      <div className="relative w-full">
        {PrefixIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            {typeof PrefixIcon === "function" ? <PrefixIcon /> : PrefixIcon}
          </div>
        )}
        <Select
          placeholder={placeholder}
          options={options}
          suffixIcon={
            SuffixIcon ? (
              typeof SuffixIcon === "function" ? (
                <SuffixIcon />
              ) : (
                SuffixIcon
              )
            ) : (
              <ChevronDown className="w-5 h-5 text-foreground" />
            )
          }
          className={`w-full! ${PrefixIcon ? "pl-10!" : ""} ${className ?? ""}`}
          rootClassName="[&_.ant-select-content]:flex! [&_.ant-select-content]:items-center! [&_.ant-select-content]:h-full! [&_.ant-select-placeholder]:text-muted-foreground! [&_.ant-select-placeholder]:font-normal! [&_.ant-select-placeholder]:text-sm!"
          {...rest}
        />
      </div>
    </div>
  );
};
export default CommonSelect;
