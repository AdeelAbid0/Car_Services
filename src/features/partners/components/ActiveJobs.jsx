import { useState } from "react";
import CallIcon from "../../../assets/svg/call.svg?react";
import Button from "../../../components/ui/Button";
const ActiveJobs = () => {
  const [activeTab, setActiveTab] = useState("today");
  return (
    <>
      <div className="flex w-fit bg-white rounded-lg h-11 items-center mb-5 px-0.5 gap-2">
        <div
          className={`flex justify-center items-center w-27 h-10 rounded-lg cursor-pointer ${
            activeTab === "today" ? "bg-background/30" : "bg-white"
          }`}
          onClick={() => setActiveTab("today")}
        >
          <p className="text-foreground font-medium! text-[13px]!">Today</p>
        </div>
        <div
          className={`flex justify-center items-center w-27 h-10 rounded-lg cursor-pointer ${
            activeTab === "tomorrow" ? "bg-background/30" : "bg-white"
          }`}
          onClick={() => setActiveTab("tomorrow")}
        >
          <p className="text-foreground font-medium! text-[13px]!">Tomorrow</p>
        </div>
      </div>
      <div className="flex w-full justify-between rounded-2xl bg-white hover:bg-white p-6 cursor-pointer">
        <div className="flex gap-4 w-[80%]">
          <div className="w-33.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-4 justify-center items-center ">
            <img
              src="/Images/hero-image.png"
              alt=""
              className="w-7 h-7 object-cover"
            />
            <h1 className="text-foreground text-sm!  font-semibold!">
              User Name
            </h1>
          </div>
          <div className="w-33.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-4 justify-center items-center ">
            <img
              src="/Images/hero-image.png"
              alt=""
              className="w-7 h-7 object-cover"
            />
            <h1 className="text-foreground text-sm!  font-semibold!">
              Service
            </h1>
          </div>
          <div className="w-33.5 h-28.5 bg-muted-background rounded-2xl flex flex-col gap-4 justify-center items-center ">
            <img
              src="/Images/hero-image.png"
              alt=""
              className="w-7 h-7 object-cover"
            />
            <h1 className="text-foreground text-sm!  font-semibold!">
              Time remaining
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-[20%] justify-around">
          <div className="flex w-full flex-col items-end gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5! h-1.5! rounded-full bg-amber-500 inline-block"></span>
              <p className="text-xs font-medium text-amber-500">Status</p>
            </div>
          </div>
          <div className="flex gap-4 w-full justify-end ">
            <div className="flex shrink-0 justify-center items-center bg-background rounded-full h-8 w-8">
              <CallIcon />
            </div>
            <div>
              <Button
                type={"primary"}
                label={"Job completed"}
                className={"h-8!"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveJobs;
