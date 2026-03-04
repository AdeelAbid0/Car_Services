import PartnerCard from "../../../Components/PartnerCard/PartnerCard";

const Partners = () => {
  return (
    <div className="flex flex-col w-full items-center h-full">
      <div className="flex w-[72%] flex-col gap-6 py-11">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#262626] text-2xl! font-bold!">Partners</h1>
          <p className="text-[#737373] text-[16px] font-normal">
            Verified workshops and providers ready to care for your car.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full mt-5">
          <PartnerCard
            profileImage={"/Images/hero-image.png"}
            tag={"Recommended"}
            shopName={"Detail Kings"}
            status={"Available Now  "}
            location={"H-8 Sector, Islamabad"}
            distance={"2.8 km away"}
            services={"Leather Conditioning"}
            price={"3000"}
            rating={5}
          />
          <PartnerCard
            profileImage={"/Images/hero-image.png"}
            tag={"Recommended"}
            shopName={"Detail Kings"}
            status={"Available Now  "}
            location={"H-8 Sector, Islamabad"}
            distance={"2.8 km away"}
            services={"Leather Conditioning"}
            price={"3000"}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
