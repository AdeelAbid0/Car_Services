import LocationIcon from "../../../assets/svg/location.svg?react";
const Services = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center bg-white rounded-2xl w-[full] p-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
        return (
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center min-w-21 min-h-21 rounded-xl bg-[#F4F2FF] border border-[#D8D4FF]">
              <LocationIcon />
            </div>
            <h1 className="text-muted-foreground text-xs font-normal">
              oil change
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
