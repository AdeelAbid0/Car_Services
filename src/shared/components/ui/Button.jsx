import { Button as AntdButton } from "antd";

const Button = ({
  type,
  size,
  label,
  onClick,
  disabled,
  isLoading,
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
      size={size}
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
      suffixIcon={suffixIcon}
      className={`${getWidthClass()} ${
        type === "default"
          ? "text-primary! border border-border! bg-muted-background! background! hover:bg-background/80! hover:text-primary!"
          : type === "danger"
            ? "text-danger! bg-[#FEE2E2]! border border-[#FCA5A5]! hover:bg-[#FEE2E2]/80! hover:text-danger!"
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
