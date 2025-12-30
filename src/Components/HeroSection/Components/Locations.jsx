import InputText from "../../../Common/InputText/InputText";
import RouteIcon from "../../../assets/svg/route.svg?react";
import LocationIcon from "../../../assets/svg/location.svg?react";

const Locations = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center bg-white rounded-2xl w-[40%] p-5">
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <InputText
          placeholder={"Search place"}
          className={"max-w-75 rounded-full!"}
        />
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-5 w-[49%] bg-[#F4F2FF] p-1 rounded-2xl">
              <div className="flex justify-center items-center w-14 h-14 rounded-md bg-white">
                <LocationIcon />
              </div>
              <div className="flex flex-col gap-2 w-[49%] bg-[#F4F2FF]">
                <h1 className="text-[#262626] text-[13px] font-medium">
                  Nearby
                </h1>
                <p className="text-[10px] font-normal text-[#737373]">
                  Find What’s around you
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 w-[49%] bg-[#F4F2FF] p-1 rounded-2xl">
              <div className="flex justify-center items-center w-14 h-14 rounded-md bg-white">
                <RouteIcon />
              </div>
              <div className="flex flex-col gap-2 w-[49%] bg-[#F4F2FF]">
                <h1 className="text-[#262626] text-[13px] font-medium">
                  Google Maps
                </h1>
                <p className="text-[10px] font-normal text-[#737373]">
                  Choose on maps
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#737373] text-[10px] font-normal">
              Suggestions
            </label>
            {[1, 2, 3].map((item) => {
              return (
                <div className="flex flex-col gap-1  mt-2.5">
                  <h1 className="font-inter text-[13px] font-normal text-[#262626]">
                    F-8 Markaz, Islamabad
                  </h1>
                  <p className="font-normal text-[#737373] text-[10px]">
                    Mehmand Car Garage
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
