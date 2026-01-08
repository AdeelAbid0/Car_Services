import Button from "../../ui/Button/Button";

const EmptyView = ({ icon, title, description, buttonText }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[25%] text-center gap-8">
        {icon}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#262626] text-[20px] font-semibold">{title}</h1>
          <p className="text-[##737373] text-sm font-normal leading-6">
            {description}
          </p>
        </div>
        <Button type={"primary"} label={buttonText} />
      </div>
    </div>
  );
};

export default EmptyView;
