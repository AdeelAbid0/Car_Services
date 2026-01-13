import ArrowRightIcon from "../../assets/svg/arrow-right.svg?react";
import CardImage from "../../assets/Images/cards.svg?react";
const My_Wallet = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mt-11 w-full max-w-[72%]">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-2xl font-bold! text-[#262626]">My Wallet</h1>
            <p className="text-[16px] text-[#737373] font-normal">
              Verified workshops and providers ready to care for your car.{" "}
            </p>
          </div>
          <div className="flex items-center px-4 py-1.75 gap-2 bg-[#262626] rounded-lg cursor-pointer hover:bg-[#404040] transition-colors">
            <p className="flex gap-2 items-center text-white font-normal text-sm">
              My Bookings <ArrowRightIcon className="text-white" />
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between mt-8">
          <div className="w-[30%]">
            <CardImage />
          </div>
          <div className="w-[60%]">
            <h1 className="text-2xl font-bold! text-[#262626]">My Wallet</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_Wallet;
