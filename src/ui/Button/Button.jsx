import { Button as AntdButton } from "antd";

const Button = ({
  type,
  label,
  onClick,
  disabled,
  prefixIcon,
  suffixIcon,
  className,
}) => {
  return (
    <AntdButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      suffixIcon={suffixIcon}
      className={`${
        type === "default"
          ? "w-full text-[#9A85FF]! bg-[#F4F2FF]! hover:bg-[#F4F2FF]! hover:text-[#9A85FF]!"
          : type === "link"
          ? "flex w-auto! px-0! py-0! h-auto! underline cursor-pointer font-medium"
          : "w-full"
      } ${className}`}
    >
      {prefixIcon && <span className="ml-1">{prefixIcon}</span>} {label}
      {suffixIcon && <span className="ml-1">{suffixIcon}</span>}
    </AntdButton>
  );
};

export default Button;
