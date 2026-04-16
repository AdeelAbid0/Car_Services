import { Avatar, Checkbox } from "antd";
import StarActive from "../../../assets/svg/star-active.svg?react";
import StarDefault from "../../../assets/svg/star-default.svg?react";
import Button from "../ui/Button";

const PartnerCard = ({
  profileImage,
  tag,
  shopName,
  status,
  location,
  distance,
  services,
  price,
  rating,
  onCLick
}) => {
  return (
    <div
      className="flex flex-col md:flex-row w-full justify-between rounded-2xl bg-white md:bg-muted-background md:hover:bg-white p-2 md:p-1 md:pr-4 cursor-pointer"
      onClick={onCLick}
    >
      <div className="flex w-full md:w-[80%] gap-3 md:gap-5">
        <div className="flex shrink-0 w-10 md:w-38 h-10 md:h-38 rounded-xl m-1">
          <img
            src={profileImage}
            alt="profile-image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex w-auto flex-col gap-4 justify-center my-2">
          <span className=" hidden md:inline-flex bg-[#2E82FF] rounded-full px-4 py-1 text-white text-sm font-normal max-w-fit">
            {tag}
          </span>
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-[16px] leading-[100%] md:text-[20px]! font-bold! text-foreground">
                {shopName}
              </h1>
              <p className="text-[12px] md:text-[13px] leading-[100%] font-normal text-muted-foreground">
                {location}
              </p>
            </div>
            <div className="flex items-center gap-1 h-5 pr-2.5">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              <p className="text-success text-xs md:text-sm font-normal leading-5">
                {status}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="hidden md:flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Distance
              </p>
              <h1 className="text-sm! font-bold! text-foreground">
                {distance}
              </h1>
            </div>
            <div className="hidden md:flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Location
              </p>
              <Button type={"link"} label={"open in Maps"} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Services
              </p>
              <div className="flex flex-wrap gap-2">
                <Checkbox
                  checked
                  className="text-xs font-medium text-foreground"
                >
                  {services}
                </Checkbox>
                <Checkbox
                  checked
                  className="text-xs font-medium text-foreground"
                >
                  {services}
                </Checkbox>
                <Checkbox
                  checked
                  className="text-xs font-medium text-foreground"
                >
                  {services}
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  md:flex-col  md:w-[20%] items-end justify-between px-3 md:px-0 my-2 md:my-8">
        <div className="flex flex-col gap-0.75 md:gap-1.5">
          <p className="text-[10px] md:text-xs font-medium text-muted-foreground">
            Starting Price
          </p>
          <h1 className="text-[16px] md:text-[20px] font-bold! text-foreground">
            {price}
          </h1>
        </div>
        <div className="flex gap-0.75">
          <StarActive />
          <StarActive />
          <StarActive />
          <StarActive />
          <StarDefault />
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
