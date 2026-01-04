import { Button } from "antd";
const ButtonComponent = ({ type, label }) => {
  return (
    <div className="flex w-full">
      <Button type={type} className="">
        {label}
      </Button>
    </div>
  );
};

export { ButtonComponent as Button };
