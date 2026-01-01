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
      >
        {/* <div className="absolute top-0 left-0 w-25 h-25 bg-linear-to-r blur-[20px] from-[#F05800] to-[#FFD02F] opacity-50 z-10"></div> */}
      </div>
    </div>
  );
};

export default Services;
