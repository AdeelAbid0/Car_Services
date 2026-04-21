import Button from "../ui/Button";

const BookingCard = ({
  profileImage,
  tag,
  shopName,
  status,
  partner,
  dateTime,
  location,
  price,
  rating
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full justify-between rounded-2xl bg-white md:bg-muted-background hover:bg-white p-3 md:p-6">
      <div className="flex md:w-[80%] gap-3 md:gap-5">
        <div className="flex shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl">
          <img
            src={profileImage}
            alt="profile-image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex w-full pr-2  flex-col gap-4 justify-center">
          <div className="flex items-start justify-between md:gap-4">
            <div>
              <h1 className="text-[16px] md:text-[20px]! font-bold! text-foreground">
                {shopName}
              </h1>
              <p className="text-[12px] md:text-[13px] font-normal text-muted-foreground">
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
          <div className="flex flex-col md:flex-row gap-1.5 md:gap-5">
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Partner
              </p>
              <h1 className="text-sm! font-bold! text-foreground">{partner}</h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Date & Time
              </p>
              <h1 className="text-sm! font-bold! text-foreground">
                {dateTime}
              </h1>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium text-muted-foreground">
                Location
              </p>
              <span className="flex gap-6 md:gap-2 text-xs! md:text-sm! font-bold! text-foreground">
                {location}
                <Button type={"link"} label={"open in Maps"} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row w-full md:w-[20%] justify-between items-center">
        <div className="flex w-full flex-col md:items-end gap-1.5">
          <p className="text-xs font-medium text-muted-foreground">Price</p>
          <h1 className="text-[20px] font-bold! text-foreground">
            PKR {price}
          </h1>
        </div>
        <div className="flex w-full justify-end ">
          <Button
            type={"primary"}
            label={"Contact partner"}
            className={"h-8!"}
            width="auto"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default BookingCard;
