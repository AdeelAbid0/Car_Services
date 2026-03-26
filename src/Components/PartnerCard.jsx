import { Avatar, Checkbox } from "antd";
import StarActive from "../assets/svg/star-active.svg?react";
import StarDefault from "../assets/svg/star-default.svg?react";
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
  onCLick,
}) => {
  return (
    <div
      className="flex w-full justify-between rounded-2xl bg-muted-background hover:bg-white p-1 pr-4 cursor-pointer"
      onClick={onCLick}
    >
      <div className="flex w-[80%] gap-5">
        <div className="flex shrink-0 w-38 h-38 rounded-xl m-1">
          <img
            src={profileImage}
            alt="profile-image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex w-auto flex-col gap-4 justify-center my-2">
          <span className="inline-flex bg-[#2E82FF] rounded-full px-4 py-1 text-white text-sm font-normal max-w-fit">
            {tag}
          </span>
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-[20px]! font-bold! text-foreground">
                {shopName}
              </h1>
              <p className="text-[13px] font-normal text-muted-foreground">
                {location}
              </p>
            </div>
            <div className="flex items-center gap-1 h-5">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              <p className="text-success text-sm font-normal leading-5">
                {status}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Distance
              </p>
              <h1 className="text-sm! font-bold! text-foreground">
                {distance}
              </h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Location
              </p>
              <Button type={"link"} label={"open in Maps"} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Services
              </p>
              <div className="flex gap-2">
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
      <div className="flex flex-col w-[20%] items-end justify-between my-8">
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-medium text-muted-foreground">
            Starting Price
          </p>
          <h1 className="text-[20px] font-bold! text-foreground">{price}</h1>
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
