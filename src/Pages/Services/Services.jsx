import BgGradientBlue from "../../Components/GradientBg/BgGradientBlue";

const Services = () => {
  return (
    <div className="w-full relative overflow-hidden bg-transparent">
      <div className="absolute top-0 z-0 w-full">
        <BgGradientBlue />
      </div>
      <div
        className="relative flex w-full h-screen justify-center items-center m-1 bg-amber-200"
        id="services"
      ></div>
    </div>
  );
};

export default Services;
