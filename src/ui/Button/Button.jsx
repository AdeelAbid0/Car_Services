import { Button as AntdButton } from "antd";

const Button = ({
  type,
  label,
  onClick,
  disabled,
  prefixIcon,
  suffixIcon,
  className,
  width = "auto",
}) => {
  // Width classes based on type or prop
  const getWidthClass = () => {
    if (width === "full") return "w-full";
    if (width === "auto") return "w-auto";
    if (width === "fit") return "w-fit";
    return "w-auto";
  };

  return (
    <AntdButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      suffixIcon={suffixIcon}
      className={`${getWidthClass()} ${
        type === "default"
          ? "text-[#9A85FF]! bg-[#F4F2FF]! hover:bg-[#F4F2FF]! hover:text-[#9A85FF]!"
          : type === "link"
            ? "flex px-0! py-0! h-auto! underline cursor-pointer font-medium underline-offset-3"
            : ""
      } ${className}`}
    >
      {prefixIcon && <span className="ml-1">{prefixIcon}</span>} {label}
      {suffixIcon && <span className="ml-1">{suffixIcon}</span>}
    </AntdButton>
  );
};

export default Button;
